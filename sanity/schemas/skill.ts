import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'Skill name',
            type: 'string',
        }),
        defineField({
            name: 'abbreviation',
            title: 'Abbreviation',
            description: 'Few-letter abbreviation',
            type: 'string',
        }),
        defineField({
            name: 'visible',
            title: 'Visible',
            description: 'Show in skills section',
            type: 'boolean',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            description: 'Skill logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            description: 'Skill types List',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skillCategory' } }],
        }),
    ],
})

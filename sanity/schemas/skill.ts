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
            name: 'image',
            title: 'Image',
            description: 'Skill logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'category',
            title: 'Category',
            description: 'Skill type',
            type: 'string',
        }),
        defineField({
            name: 'progress',
            title: 'Progress',
            description: 'Progress of skill from 0% to 100%',
            type: 'number',
            validation: (Rule) => Rule.min(0).max(100),
        }),
    ],
})

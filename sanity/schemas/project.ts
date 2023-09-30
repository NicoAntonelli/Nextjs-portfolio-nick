import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'Title of the project',
            type: 'string',
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
        }),
        defineField({
            name: 'isNotFinished',
            title: 'IsNotFinished',
            type: 'boolean',
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill' } }],
        }),
        defineField({
            name: 'linkToBuild',
            title: 'LinkToBuild',
            type: 'url',
        }),
    ],

    preview: {
        select: {
            title: 'Project - Portfolio Nick',
            author: 'Nico.Antonelli',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})

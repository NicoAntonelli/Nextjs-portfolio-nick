import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'Project name',
            type: 'string',
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            description: 'Project description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            description: 'Project representation',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'date',
            title: 'Date',
            description: 'When the project take place',
            type: 'date',
        }),
        defineField({
            name: 'isNotFinished',
            title: 'IsNotFinished',
            description: 'Uncompleted project',
            type: 'boolean',
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            description: 'Skill list',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill' } }],
        }),
        defineField({
            name: 'linkToBuild',
            title: 'LinkToBuild',
            description: 'Link to build address',
            type: 'url',
        }),
    ],
})

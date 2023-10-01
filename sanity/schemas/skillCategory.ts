import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'skillCategory',
    title: 'SkillCategory',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'Skill category name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            description: 'Brief category explanation',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            description: 'Image that represents the category',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})

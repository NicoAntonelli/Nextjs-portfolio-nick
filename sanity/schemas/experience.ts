import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'jobTitle',
            title: 'JobTitle',
            description: 'Name of the job position',
            type: 'string',
        }),
        defineField({
            name: 'company',
            title: 'Company',
            description: 'Company name',
            type: 'string',
        }),
        defineField({
            name: 'companyImage',
            title: 'CompanyImage',
            description: 'Company logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'dateStarted',
            title: 'DateStarted',
            description: 'First day',
            type: 'date',
        }),
        defineField({
            name: 'dateEnded',
            title: 'DateEnded',
            description: 'Last day',
            type: 'date',
        }),
        defineField({
            name: 'isCurrentlyWorkingHere',
            title: 'IsCurrentlyWorkingHere',
            description: 'If still working here',
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
            name: 'points',
            title: 'Points',
            description: 'Job position summary',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
})

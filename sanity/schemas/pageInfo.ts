import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pageInfo',
    title: 'PageInfo',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            description: 'Name and surname',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            description: 'Major role',
            type: 'string',
        }),
        defineField({
            name: 'heroImage',
            title: 'HeroImage',
            description: 'Face picture',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'backgroundInfo',
            title: 'BackgroundInfo',
            type: 'text',
        }),
        defineField({
            name: 'profilePic',
            title: 'ProfilePic',
            description: 'Any profile picture',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'phoneNumber',
            title: 'PhoneNumber',
            description: 'Personal phone',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            description: 'Personal email',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            description: 'Address or an approximation',
            type: 'string',
        }),
        defineField({
            name: 'socials',
            title: 'Socials',
            description: 'Social media list',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'social' } }],
        }),
    ],
})

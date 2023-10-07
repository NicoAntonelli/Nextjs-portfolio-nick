import { type NextRequest, NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'
import Project from '@/entities/Project'

const query: string = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`

export async function GET(req: NextRequest) {
    const response: Project[] = await client.fetch(query)
    return Response.json(response, { status: 200 })
}

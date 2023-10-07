import { type NextRequest, NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'
import Experience from '@/entities/Experience'

const query: string = groq`
    *[_type == "experience"]
`

export async function GET(req: NextRequest) {
    const response: Experience[] = await client.fetch(query)
    return Response.json(response, { status: 200 })
}

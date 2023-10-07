import { type NextRequest, NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'
import Social from '@/entities/Social'

const query: string = groq`
    *[_type == "social"]
`

export async function GET(req: NextRequest) {
    const response: Social[] = await client.fetch(query)
    return Response.json(response, { status: 200 })
}

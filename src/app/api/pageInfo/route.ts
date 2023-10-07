import { type NextRequest, NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'
import PageInfo from '@/entities/PageInfo'

const query: string = groq`
    *[_type == "pageInfo"][0]
`
// { ..., socials[]-> }

export async function GET(req: NextRequest) {
    const response: PageInfo[] = await client.fetch(query)
    return Response.json(response, { status: 200 })
}

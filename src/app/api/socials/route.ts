import { type NextRequest, NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'

type Data = {
    socials: any
}

const query: string = groq`
    *[_type == "social"]
`

export async function GET(req: NextRequest) {
    const response: any = await client.fetch(query)

    return Response.json(response, { status: 200 })
}

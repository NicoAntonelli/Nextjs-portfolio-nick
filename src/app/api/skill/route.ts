import { type NextRequest, NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'
import Skill from '@/entities/Skill'

const query: string = groq`
    *[_type == "skill"]
`

export async function GET(req: NextRequest) {
    const response: Skill[] = await client.fetch(query)
    return Response.json(response, { status: 200 })
}

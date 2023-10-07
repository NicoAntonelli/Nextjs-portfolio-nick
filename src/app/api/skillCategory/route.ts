import { type NextRequest, NextResponse } from 'next/server'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'
import SkillCategory from '@/entities/SkillCategory'

const query: string = groq`
    *[_type == "skillCategory"]
`

export async function GET(req: NextRequest) {
    const response: SkillCategory[] = await client.fetch(query)
    return Response.json(response, { status: 200 })
}

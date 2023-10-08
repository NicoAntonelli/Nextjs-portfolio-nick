import Skill from '@/entities/Skill'

const fetchSkills = async (): Promise<Skill[] | undefined> => {
    try {
        const baseAPI: string = `${process.env.NEXT_PUBLIC_BASE_URL}/api`
        const res: Response = await fetch(`${baseAPI}/skill`)
        if (!res.ok) throw new Error('Failed to fetch skills data')

        return await res.json()
    } catch (Error) {
        console.log(Error)
        return
    }
}

export default fetchSkills

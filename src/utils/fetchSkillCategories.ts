import SkillCategory from '@/entities/SkillCategory'

const revalidation = { next: { revalidate: 3600 } }

const fetchSkillCategories = async (): Promise<SkillCategory[] | undefined> => {
    try {
        const baseAPI: string = `${process.env.NEXT_PUBLIC_BASE_URL}/api`
        const res: Response = await fetch(
            `${baseAPI}/skillCategory`,
            revalidation
        )
        if (!res.ok) throw new Error('Failed to fetch skillCategories data')

        return await res.json()
    } catch (Error) {
        console.log(Error)
        return
    }
}

export default fetchSkillCategories

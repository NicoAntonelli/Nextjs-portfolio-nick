import SkillCategory from '@/entities/SkillCategory'

const fetchSkillCategories = async (): Promise<SkillCategory[] | undefined> => {
    try {
        const baseAPI: string = `${process.env.NEXT_PUBLIC_BASE_URL}/api`
        const res: Response = await fetch(`${baseAPI}/skillCategory`)

        return await res.json()
    } catch (Error) {
        console.log(Error)
        return
    }
}

export default fetchSkillCategories

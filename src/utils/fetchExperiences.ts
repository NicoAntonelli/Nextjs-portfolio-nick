import Experience from '@/entities/Experience'

const revalidation = { next: { revalidate: 3600 } }

const fetchExperiences = async (): Promise<Experience[] | undefined> => {
    try {
        const baseAPI: string = `${process.env.NEXT_PUBLIC_BASE_URL}/api`
        const res: Response = await fetch(`${baseAPI}/experience`, revalidation)
        if (!res.ok) throw new Error('Failed to fetch experiences data')

        return await res.json()
    } catch (Error) {
        console.log(Error)
        return
    }
}

export default fetchExperiences

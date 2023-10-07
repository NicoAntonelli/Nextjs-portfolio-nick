import Experience from '@/entities/Experience'

const fetchExperiences = async (): Promise<Experience[] | undefined> => {
    try {
        const baseAPI: string = `${process.env.NEXT_PUBLIC_BASE_URL}/api`
        const res: Response = await fetch(`${baseAPI}/experience`)

        return await res.json()
    } catch (Error) {
        console.log(Error)
        return
    }
}

export default fetchExperiences

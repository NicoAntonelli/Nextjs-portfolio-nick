import Project from '@/entities/Project'

const fetchProjects = async (): Promise<Project[] | undefined> => {
    try {
        const baseAPI: string = `${process.env.NEXT_PUBLIC_BASE_URL}/api`
        const res: Response = await fetch(`${baseAPI}/project`)
        if (!res.ok) throw new Error('Failed to fetch projects data')

        return await res.json()
    } catch (Error) {
        console.log(Error)
        return
    }
}

export default fetchProjects

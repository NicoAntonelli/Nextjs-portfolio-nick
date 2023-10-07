import Project from '@/entities/Project'

const fetchProject = async (): Promise<Project[] | undefined> => {
    try {
        const baseAPI: string = `${process.env.NEXT_PUBLIC_BASE_URL}/api`
        const res: Response = await fetch(`${baseAPI}/project`)

        return await res.json()
    } catch (Error) {
        console.log(Error)
        return
    }
}

export default fetchProject

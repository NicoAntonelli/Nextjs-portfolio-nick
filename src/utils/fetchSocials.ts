import Social from '@/entities/Social'

const fetchSocials = async (): Promise<Social[] | undefined> => {
    try {
        const baseAPI: string = `${process.env.NEXT_PUBLIC_BASE_URL}/api`
        const res: Response = await fetch(`${baseAPI}/social`)
        if (!res.ok) throw new Error('Failed to fetch socials data')

        return await res.json()
    } catch (Error) {
        console.log(Error)
        return
    }
}

export default fetchSocials
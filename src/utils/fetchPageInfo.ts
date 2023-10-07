import PageInfo from '@/entities/PageInfo'

const fetchPageInfo = async (): Promise<PageInfo[] | undefined> => {
    try {
        const baseAPI: string = `${process.env.NEXT_PUBLIC_BASE_URL}/api`
        const res: Response = await fetch(`${baseAPI}/pageInfo`)

        return await res.json()
    } catch (Error) {
        console.log(Error)
        return
    }
}

export default fetchPageInfo

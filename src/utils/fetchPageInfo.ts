import PageInfo from '@/entities/PageInfo'

const revalidation = { next: { revalidate: 3600 } }

const fetchPageInfo = async (): Promise<PageInfo | undefined> => {
    try {
        const baseAPI: string = `${process.env.NEXT_PUBLIC_BASE_URL}/api`
        const res: Response = await fetch(`${baseAPI}/pageInfo`, revalidation)
        if (!res.ok) throw new Error('Failed to fetch pageInfo data')

        return await res.json()
    } catch (Error) {
        console.log(Error)
        return
    }
}

export default fetchPageInfo

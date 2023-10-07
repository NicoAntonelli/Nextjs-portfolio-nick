import SanityCommon from './Base/SanityCommon'
import SanityImage from './Base/SanityImage'

interface PageInfo extends SanityCommon {
    _type: 'PageInfo'
    address: string
    backgroundInformation: string
    email: string
    heroImage: SanityImage
    name: string
    phoneNumber: string
    profilePic: SanityImage
    role: string
}

export default PageInfo

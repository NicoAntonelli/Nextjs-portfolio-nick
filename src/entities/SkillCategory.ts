import SanityCommon from './Base/SanityCommon'
import SanityImage from './Base/SanityImage'

interface SkillCategory extends SanityCommon {
    _type: 'SkillCategory'
    description: string
    image: SanityImage
    title: string
}

export default SkillCategory

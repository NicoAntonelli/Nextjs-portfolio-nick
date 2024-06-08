import SanityCommon from './Base/SanityCommon'
import SanityImage from './Base/SanityImage'

import SkillCategory from './SkillCategory'

interface Skill extends SanityCommon {
    _type: 'skill'
    abbreviation: string
    categories: SkillCategory[]
    image: SanityImage
    title: string
    visible: boolean
}

export default Skill

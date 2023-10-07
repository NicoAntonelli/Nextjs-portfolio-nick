import SanityCommon from './Base/SanityCommon'
import SanityImage from './Base/SanityImage'

import SkillCategory from './SkillCategory'

interface Skill extends SanityCommon {
    _type: 'Skill'
    abbreviation: string
    categories: SkillCategory[]
    image: SanityImage
    title: string
}

export default Skill

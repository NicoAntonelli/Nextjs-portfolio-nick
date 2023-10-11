import SanityCommon from './Base/SanityCommon'
import SanityImage from './Base/SanityImage'

import Skill from './Skill'

interface Experience extends SanityCommon {
    _type: 'experience'
    company: string
    companyImage: SanityImage
    dateStarted: Date
    dateEnded: Date
    isCurrentlyWorkingHere: boolean
    jobTitle: string
    order: number
    points: string[]
    technologies: Skill[]
}

export default Experience

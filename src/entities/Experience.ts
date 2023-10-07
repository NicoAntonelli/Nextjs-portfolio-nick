import SanityCommon from './Base/SanityCommon'
import SanityImage from './Base/SanityImage'

import Skill from './Skill'

interface Experience extends SanityCommon {
    _type: 'Experience'
    company: string
    companyImage: SanityImage
    dateStarted: Date
    dateEnded: Date
    isCurrentlyWorkingHere: boolean
    jobTitle: string
    technologies: Skill[]
    points: string[]
}

export default Experience

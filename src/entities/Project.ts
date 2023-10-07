import SanityCommon from './Base/SanityCommon'
import SanityImage from './Base/SanityImage'

import Skill from './Skill'

interface Project extends SanityCommon {
    _type: 'Project'
    date: Date
    image: SanityImage
    isNotFinished: boolean
    linkToBuild: string
    summary: string
    technologies: Skill[]
    title: string
}

export default Project

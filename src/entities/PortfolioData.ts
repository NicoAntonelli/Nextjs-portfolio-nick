import Experience from './Experience'
import PageInfo from './PageInfo'
import Project from './Project'
import Skill from './Skill'
import SkillCategory from './SkillCategory'
import Social from './Social'

interface PortfolioData {
    experiences?: Experience[]
    pageInfo?: PageInfo
    projects?: Project[]
    skills?: Skill[]
    skillCategories?: SkillCategory[]
    socials?: Social[]
}

export default PortfolioData

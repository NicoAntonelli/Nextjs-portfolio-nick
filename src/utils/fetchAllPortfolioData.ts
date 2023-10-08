import fetchExperiences from '@/utils/fetchExperiences'
import fetchPageInfo from '@/utils/fetchPageInfo'
import fetchProjects from '@/utils/fetchProjects'
import fetchSkills from '@/utils/fetchSkills'
import fetchSkillCategories from '@/utils/fetchSkillCategories'
import fetchSocials from '@/utils/fetchSocials'

import PortfolioData from '@/entities/PortfolioData'

const fetchAllPortfolioData = async (): Promise<PortfolioData> => {
    const experiences = await fetchExperiences()
    const pageInfo = await fetchPageInfo()
    const projects = await fetchProjects()
    const skills = await fetchSkills()
    const skillCategories = await fetchSkillCategories()
    const socials = await fetchSocials()

    const data: PortfolioData = {
        experiences,
        pageInfo,
        projects,
        skills,
        skillCategories,
        socials,
    }

    return data
}

export default fetchAllPortfolioData

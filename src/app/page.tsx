'use client'
import { GetStaticProps } from 'next'

import About from '@/components/about/about'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Projects from '@/components/projects/projects'
import Skills from '@/components/skills/skills'
import WorkExperience from '@/components/workExperience/workExperience'

import Experience from '@/entities/Experience'
import PageInfo from '@/entities/PageInfo'
import Project from '@/entities/Project'
import Skill from '@/entities/Skill'
import SkillCategory from '@/entities/SkillCategory'
import Social from '@/entities/Social'

import fetchExperiences from '@/utils/fetchExperiences'
import fetchPageInfo from '@/utils/fetchPageInfo'
import fetchProjects from '@/utils/fetchProjects'
import fetchSkills from '@/utils/fetchSkills'
import fetchSkillCategories from '@/utils/fetchSkillCategories'
import fetchSocials from '@/utils/fetchSocials'

interface Props {
    experiences?: Experience[]
    pageInfo?: PageInfo
    projects?: Project[]
    skills?: Skill[]
    skillCategories?: SkillCategory[]
    socials?: Social[]
}

const Home = (props: Props) => {
    return (
        <main className="h-screen bg-[rgb(30,30,30)] text-white snap snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar-custom z-0">
            {/* Social Icons & Email */}
            <Header />

            {/* Sections */}
            <section id="hero" className="snap-start">
                <Hero />
            </section>

            <section id="about" className="snap-center">
                <About />
            </section>

            <section id="experience" className="snap-center">
                <WorkExperience />
            </section>

            <section id="projects" className="snap-start">
                <Projects />
            </section>

            <section id="skills" className="snap-start">
                <Skills />
            </section>

            <section id="contact" className="snap-start">
                <Contact />
            </section>

            {/* Back to Top */}
            <Footer />
        </main>
    )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
    const experiences: Experience[] | undefined = await fetchExperiences()
    const pageInfo: PageInfo | undefined = await fetchPageInfo()
    const projects: Project[] | undefined = await fetchProjects()
    const skills: Skill[] | undefined = await fetchSkills()
    const skillCategories: SkillCategory[] | undefined =
        await fetchSkillCategories()
    const socials: Social[] | undefined = await fetchSocials()

    const props: Props = {
        experiences,
        pageInfo,
        projects,
        skills,
        skillCategories,
        socials,
    }

    // Regeneration: when a request comes in & at most one every 5 minutes
    return { props, revalidate: 300 }
}

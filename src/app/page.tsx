import About from '@/components/about/about'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Projects from '@/components/projects/projects'
import Skills from '@/components/skills/skills'
import WorkExperience from '@/components/workExperience/workExperience'

import fetchAllPortfolioData from '@/utils/fetchAllPortfolioData'
import PortfolioData from '@/entities/PortfolioData'

const Home = async () => {
    const data: PortfolioData = await fetchAllPortfolioData()

    return (
        <main className="h-screen bg-[rgb(30,30,30)] text-white snap snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar-custom z-0">
            {/* Social Icons & Email */}
            <Header socials={data.socials} />

            {/* Sections */}
            <section id="hero" className="snap-start">
                <Hero pageInfo={data.pageInfo} />
            </section>

            <section id="about" className="snap-center">
                <About pageInfo={data.pageInfo} />
            </section>

            <section id="experience" className="snap-center">
                <WorkExperience experiences={data.experiences} />
            </section>

            <section id="projects" className="snap-start">
                <Projects projects={data.projects} />
            </section>

            <section id="skills" className="snap-start">
                <Skills skills={data.skills} />
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

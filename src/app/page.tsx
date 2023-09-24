import About from '@/components/about/about'
import Contact from '@/components/contact/contact'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Projects from '@/components/projects/projects'
import Skills from '@/components/skills/skills'
import WorkExperience from '@/components/workExperience/workExperience'

export default function Home() {
    return (
        <main className="h-screen bg-[rgb(30,30,30)] text-white snap snap-y snap-mandatory overflow-scroll z-0">
            {/* Social Icons & Email */}
            <Header />

            {/* Hero */}
            <section id="hero" className="snap-start">
                <Hero />
            </section>

            {/* About */}
            <section id="about" className="snap-center">
                <About />
            </section>

            {/* Experience */}
            <section id="experience" className="snap-center">
                <WorkExperience />
            </section>

            {/* Projects */}
            <section id="projects" className="snap-center">
                <Projects />
            </section>

            {/* Skills */}
            <section id="skills" className="snap-start">
                <Skills />
            </section>

            {/* Contact Me */}
            <section id="contact-me" className="snap-center">
                <Contact />
            </section>
        </main>
    )
}

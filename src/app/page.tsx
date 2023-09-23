import About from '@/components/about/about'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
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
            <section id="projects" className="snap-center"></section>

            {/* Skills */}
            <section id="skills" className="snap-center"></section>

            {/* Contact Me */}
            <section id="contact-me" className="snap-center"></section>
        </main>
    )
}

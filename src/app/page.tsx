import About from '@/components/about/about'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'

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
            <section id="experience"></section>

            {/* Projects */}
            <section id="projects"></section>

            {/* Skills */}
            <section id="skills"></section>

            {/* Contact Me */}
            <section id="contact-me"></section>
        </main>
    )
}

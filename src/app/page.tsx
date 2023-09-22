import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="min-h-screen bg-[rgb(30,30,30)] text-white">
            {/* Social Icons & Email */}
            <Header />

            {/* Hero */}
            <section id="hero">
                <Hero />
            </section>

            {/* About */}
            <section id="about"></section>

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

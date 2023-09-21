import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Social Icons & Email */}
            <Header />

            {/* Hero */}
            <section id="hero"></section>

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

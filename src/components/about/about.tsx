'use client'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            className="flex flex-col relative h-screen justify-evenly items-center text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}>
            <h3 className="section-title">About</h3>

            <motion.img
                className="w-32 h-32 mt-[120px] mb-0 flex flex-shrink-0 rounded-full object-cover md:mt-15 lg:mt-0 md:rounded-lg md:w-52 md:h-52 xl:w-[300px] xl:h-[300px]"
                src="nick_profile_ai.png"
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
            />

            <div className="space-y-5 px-0 md:px-10">
                <h4 className="text-3xl semibold md:mt-15 lg:mt-0">
                    Here's a{' '}
                    <span className="underline decoration-[#e66c2c]/80">
                        little
                    </span>{' '}
                    background
                </h4>
                <div className="text-xs md:text-sm lg:text-base">
                    <p className="pb-3">
                        Hi, I'm Nico—a passionate software web developer with a
                        deep love for both frontend and backend development. I
                        thrive on crafting nice user experiences through
                        intuitive interfaces and robust, efficient server-side
                        solutions. I am a final year software engineering
                        student also captivated by software architecture, it is
                        essential to look for elegant and scalable designs to
                        address complex problems.
                    </p>
                    <p>
                        I firmly believe that great software is not just
                        functional; it's a manifestation of creativity combined
                        with technical precision. When I'm not coding or
                        designing software systems, you'll likely find me
                        exploring new technologies or reading about the latest
                        industry trends.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default About

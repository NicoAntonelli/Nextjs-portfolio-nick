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
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <motion.img
                className="w-44 h-44 mb-0 flex flex-shrink-0 rounded-full object-cover md:mb-0 md:rounded-lg md:w-52 md:h-52 xl:w-[300px] xl:h-[300px]"
                src="nick_profile_ai.png"
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4>
                    Here's a{' '}
                    <span className="underline decoration-[#e66c2c]/80">
                        little
                    </span>{' '}
                    background
                </h4>
                <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi rerum vel debitis velit odio facilis maxime assumenda
                    a, libero magni at consectetur est tenetur molestias earum
                    quas itaque dicta maiores!
                </p>
            </div>
        </motion.div>
    )
}

export default About

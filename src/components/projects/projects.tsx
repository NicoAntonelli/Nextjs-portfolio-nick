'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Projects = () => {
    const projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4']

    return (
        <div className="flex flex-col md:flex-row relative h-screen max-w-full justify-evenly items-center text-left mx-auto overflow-hidden z-0">
            <h3 className="section-title">Projects</h3>
            <div className="relative w-full flex snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-custom z-20">
                {projects.map((project, index) => (
                    <motion.div
                        className="w-screen h-screen flex flex-col flex-shrink-0 items-center justify-center space-y-5 p-20 md:p-40 snap-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        key={index}>
                        <motion.img
                            className="w-32 h-32"
                            src="cat_spaceship_ia.png"
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        />

                        <div className="space-y-6 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-3xl font-semibold text-center">
                                <span className="underline decoration-[#e66c2c]/70">{`Project ${
                                    index + 1
                                } of ${projects.length}`}</span>
                                : {project}
                            </h4>
                            <p className="text-lg">
                                A few-lines brief description about what I did
                                in that project and useful stuff
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Background line */}
            <div className="w-full h-[250px] left-0 absolute top-[35%] bg-[#e66c2c]/20 -skew-y-12" />
        </div>
    )
}

export default Projects

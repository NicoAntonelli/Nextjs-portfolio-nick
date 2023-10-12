'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { urlForImage } from '../../../sanity/lib/image'
import Image from 'next/image'

import Project from '@/entities/Project'
import Skill from '@/entities/Skill'

type Props = {
    projects?: Project[]
}

const Projects = ({ projects }: Props) => {
    // Sorting function
    const orderLogic = (a: Project, b: Project) => a.order - b.order

    // Format all the project technologies presentation
    const formatSkills = (project: Project) => {
        return project?.technologies.map((skill: Skill) => (
            <Image
                key={skill._id}
                className="object-cover"
                src={urlForImage(skill.image).url()}
                alt={skill.title}
                height={20}
                width={20}
            />
        ))
    }

    return (
        <div className="flex flex-col md:flex-row relative h-screen max-w-full justify-evenly items-center text-left mx-auto overflow-hidden z-0">
            <h3 className="section-title">Projects</h3>
            <div className="relative w-full flex snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-custom z-20">
                {projects &&
                    projects.sort(orderLogic).map((project, index) => (
                        <motion.div
                            className="w-screen h-screen flex flex-col flex-shrink-0 items-center justify-center space-y-5 px-10 py-20 md:px-20 md:py-40 lg:pt-40 snap-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            key={index}>
                            <motion.img
                                className="w-20 h-20"
                                src={urlForImage(project.image).url()}
                                initial={{ y: -100, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            />

                            <div className="space-y-3 px-0 md:px-10 max-w-6xl xl:ma">
                                <h4 className="text-3xl font-semibold text-center">
                                    {project.title}
                                </h4>
                                <div className="flex gap-2 justify-center space-x-1 my-3">
                                    {formatSkills(project)}
                                </div>
                                <p className="text-lg p-2 max-h-40 overflow-y-auto scrollbar-custom">
                                    {project.summary}
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

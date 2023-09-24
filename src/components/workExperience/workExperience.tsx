'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './experienceCard/experienceCard'

const WorkExperience = () => {
    return (
        <motion.div
            className="flex flex-col md:flex-row relative h-screen max-w-full justify-evenly items-center text-left px-10 mx-auto overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}>
            <h3 className="section-title">Experience</h3>

            <div className="flex w-full space-x-5 p-10 snap-x snap-mandatory overflow-x-scroll">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    )
}

export default WorkExperience
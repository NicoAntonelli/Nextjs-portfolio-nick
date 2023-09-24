'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SkillInfo from './skillInfo/skillInfo'

const Skills = () => {
    return (
        <motion.div
            className="flex flex-col xl:flex-row relative h-screen justify-center items-center text-center md:text-left min-w-screen max-w-[2000px] xl:space-y-0 xl:px-10 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}>
            <h3 className="section-title">Skills</h3>
            <h4 className="absolute top-32 uppercase tracking-[3px] mr-[-3px] text-gray-500 text-sm">
                Hover over a skill for more info
            </h4>

            <div className="grid grid-cols-4 gap-x-8 gap-y-4 pt-10 xl:pt-20">
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo />
                <SkillInfo directionLeft />
                <SkillInfo directionLeft />
                <SkillInfo directionLeft />
                <SkillInfo directionLeft />
                <SkillInfo directionLeft />
                <SkillInfo directionLeft />
                <SkillInfo directionLeft />
                <SkillInfo directionLeft />
            </div>
        </motion.div>
    )
}

export default Skills

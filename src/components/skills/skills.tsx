'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SkillInfo from './skillInfo/skillInfo'

import Skill from '@/entities/Skill'

type Props = {
    skills?: Skill[]
}

const Skills = ({ skills }: Props) => {
    // Sorting function
    const orderLogic = (a: Skill, b: Skill) => {
        return a.title > b.title ? 1 : -1
    }

    const [skillsSorted, setSkillsSorted] = useState<Skill[]>()

    useEffect(() => {
        // Filter and sort
        console.log('Skills debug (after):', skills)
        skills = skills?.filter((s) => s.visible).sort(orderLogic)
        setSkillsSorted(skills)
        console.log('Skills debug (before):', skills)
    }, [])

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

            <div className="grid grid-cols-6 md:grid-cols-7 xl:grid-cols-9 gap-x-6 gap-y-4 pt-20 md:pt-24 xl:pt-36">
                {skillsSorted && (
                    <>
                        {skillsSorted
                            .slice(0, skillsSorted.length / 2)
                            .map((skill: Skill) => (
                                <SkillInfo key={skill._id} skill={skill} />
                            ))}
                        {skillsSorted
                            .slice(skillsSorted.length / 2, skillsSorted.length)
                            .map((skill: Skill) => (
                                <SkillInfo
                                    key={skill._id}
                                    skill={skill}
                                    directionLeft
                                />
                            ))}
                    </>
                )}
            </div>
        </motion.div>
    )
}

export default Skills

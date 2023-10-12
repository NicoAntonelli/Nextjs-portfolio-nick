'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { urlForImage } from '../../../../sanity/lib/image'

import Skill from '@/entities/Skill'

type Props = {
    skill: Skill
    directionLeft?: boolean
}

const SkillInfo = ({ skill, directionLeft }: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                className="w-8 h-8 md:h-10 md:w-10 xl:w-12 xl:h-12 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
                src={urlForImage(skill.image).url()}
                initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
            />
            <div className="absolute h-8 w-8 md:h-10 md:w-10 xl:w-12 xl:h-12 rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-900">
                <div className="flex items-center justify-center h-full">
                    <p className="text-xs md:text-sm xl:text-base font-bold text-[#e66c2c] text-center opacity-100">
                        {skill.title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SkillInfo

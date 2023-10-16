'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlForImage } from '../../../../sanity/lib/image'

import Experience from '@/entities/Experience'
import Skill from '@/entities/Skill'

type Props = {
    experience?: Experience
}

const ExperienceCard = ({ experience }: Props) => {
    // Format date with JS standard DateString but without the day's name
    const dateFormat = (date?: Date) => {
        if (!date) return
        return new Date(date).toDateString().substring(4)
    }

    return (
        <article className="flex flex-col rounded-lg items-center mt-24 p-5 space-y-2 flex-shrink-0 w-[75vw] snap-center bg-[#222] cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
            {experience?.companyImage && (
                <motion.img
                    className="w-24 h-24 rounded-full xl:h-[100px] xl:w-[100px] object-cover object-center"
                    src={urlForImage(experience.companyImage).url()}
                    initial={{ y: -100, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                />
            )}
            <div className="px-5 md:px-10">
                <h4 className="text-xl md:text-3xl lg:text-4xl font-light">
                    {experience?.jobTitle}
                </h4>
                <p className="text-lg md:text-xl lg:text-2xl font-bold mt-1">
                    {experience?.company}
                </p>
                <div className="flex gap-2 space-x-1 my-3 overflow-x-auto scrollbar-none">
                    {experience?.technologies.map((skill: Skill) => (
                        <Image
                            key={skill._id}
                            className="object-cover"
                            src={urlForImage(skill.image).url()}
                            alt={skill.title}
                            height={20}
                            width={20}
                        />
                    ))}
                </div>
                <p className="uppercase py-3 text-gray-300 text-xs">
                    {experience?.dateStarted &&
                        `Started work: ${dateFormat(experience.dateStarted)}`}
                    {experience?.isCurrentlyWorkingHere
                        ? ' | Present'
                        : ` | Ended: ${dateFormat(experience?.dateEnded)}`}
                </p>

                <ul className="list-none space-y-1 text-sm md:text-base max-h-40 pr-2 overflow-y-auto scrollbar-custom">
                    {experience?.points.map((point: string, index: number) => (
                        <li key={index} className="pl-3">
                            <span className="mr-2">✓</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard

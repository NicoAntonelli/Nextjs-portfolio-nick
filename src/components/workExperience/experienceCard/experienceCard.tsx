'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ExperienceCard = () => {
    return (
        <article className="flex flex-col rounded-lg items-center mt-24 p-5 space-y-2 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#222] cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
            <motion.img
                className="w-24 h-24 rounded-full xl:h-[100px] xl:w-[100px] object-cover object-center"
                src="la_mutual_amr.jpg"
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            />
            <div className="px-5 md:px-10">
                <h4 className="text-4xl font-light">Software Dev</h4>
                <p className="text-2xl font-bold mt-1">La Mutual de AMR</p>
                <div className="flex gap-2 space-x-1 my-1">
                    <Image
                        className="object-cover"
                        src={'/tech_js.png'}
                        alt={'JavaScript'}
                        height={20}
                        width={20}
                    />
                    <Image
                        className="object-cover"
                        src={'/tech_js.png'}
                        alt={'JavaScript'}
                        height={20}
                        width={20}
                    />
                    <Image
                        className="object-cover"
                        src={'/tech_js.png'}
                        alt={'JavaScript'}
                        height={20}
                        width={20}
                    />
                </div>
                <p className="uppercase py-3 text-gray-300">
                    Started work... - Ended...
                </p>

                <ul className="list-['✓'] space-y-1 ml-5 text-base">
                    <li className="pl-2">
                        Two-lines max explanation about what things I did in
                        this project for La Mutual de AMR
                    </li>
                    <li className="pl-2">
                        Two-lines max explanation about what things I did in
                        this project for La Mutual de AMR
                    </li>
                    <li className="pl-2">Summary points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard

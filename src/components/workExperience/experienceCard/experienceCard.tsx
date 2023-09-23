'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ExperienceCard = () => {
    return (
        <article className="flex flex-col rounded-lg items-center p-10 space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#222] cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
            <motion.img
                className="w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center"
                src="la_mutual_amr.jpg"
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Software Dev</h4>
                <p className="text-2xl font-bold mt-1">La Mutual de AMR</p>
                <div className="flex gap-2 space-x-2 my-2">
                    <Image
                        className="object-cover"
                        src={'/tech_js.png'}
                        alt={'JavaScript'}
                        height={25}
                        width={25}
                    />
                    <Image
                        className="object-cover"
                        src={'/tech_js.png'}
                        alt={'JavaScript'}
                        height={25}
                        width={25}
                    />
                    <Image
                        className="object-cover"
                        src={'/tech_js.png'}
                        alt={'JavaScript'}
                        height={25}
                        width={25}
                    />
                </div>
                <p className="uppercase py-5 text-gray-300">
                    Started work... - Ended...
                </p>

                <ul className="list-['✓'] space-y-2 ml-5 text-lg">
                    <li className="pl-2">Summary points</li>
                    <li className="pl-2">Summary points</li>
                    <li className="pl-2">Summary points</li>
                    <li className="pl-2">Summary points</li>
                    <li className="pl-2">Summary points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard

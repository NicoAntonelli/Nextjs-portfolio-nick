'use client'
import React from 'react'
import { motion } from 'framer-motion'

import PageInfo from '@/entities/PageInfo'
import { urlForImage } from '../../../sanity/lib/image'

type Props = {
    pageInfo?: PageInfo
}

const About = ({ pageInfo }: Props) => {
    return (
        <motion.div
            className="flex flex-col relative h-screen justify-evenly items-center text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}>
            <h3 className="section-title">About</h3>

            {pageInfo?.profilePic && (
                <motion.img
                    className="w-32 h-32 mt-24 md:mt-15 lg:mt-0 mb-0 flex flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-52 md:h-52 xl:w-[300px] xl:h-[300px]"
                    src={urlForImage(pageInfo.profilePic).url()}
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                />
            )}
            <div className="space-y-5 px-0 md:px-10">
                <h4 className="text-3xl semibold md:mt-15 lg:mt-0">
                    Here's a{' '}
                    <span className="underline decoration-[#e66c2c]/80">
                        little
                    </span>{' '}
                    background
                </h4>
                <div className="text-xs md:text-sm lg:text-base">
                    {pageInfo?.backgroundInformation}
                </div>
            </div>
        </motion.div>
    )
}

export default About

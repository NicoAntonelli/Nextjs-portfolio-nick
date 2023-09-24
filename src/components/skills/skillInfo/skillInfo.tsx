'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

const SkillInfo = (props: Props) => {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                className="w-14 h-14 xl:w-20 md:h-16 md:w-16 xl:h-20 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
                src="/tech_js.png"
                initial={{ x: props.directionLeft ? -200 : 200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
            />
            <div className="absolute h-14 w-14 md:h-16 md:w-16 xl:w-20 xl:h-20 rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-900">
                <div className="flex items-center justify-center h-full">
                    <p className="text-base font-bold text-[#e66c2c] opacity-100">
                        JavaScript
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SkillInfo

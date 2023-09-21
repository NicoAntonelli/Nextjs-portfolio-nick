'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto z-20">
            {/* Social Icons */}
            <motion.div
                className="flex flex-row gap-2 items-center"
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}>
                <SocialIcon
                    url="https://www.linkedin.com/in/nico-antonelli/"
                    bgColor="transparent"
                    target="blank"
                />
                <SocialIcon
                    url="https://github.com/NicoAntonelli/"
                    bgColor="transparent"
                    target="blank"
                />
            </motion.div>
            {/* Email */}
            <motion.div
                className="flex flex-row gap-1 items-center cursor-pointer"
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}>
                <SocialIcon
                    url="mailto:niconelli2@gmail.com"
                    network="email"
                    bgColor="transparent"
                    target="blank"
                />
                <p className="uppercase hidden md:inline-flex text-sm">
                    Get in touch
                </p>
            </motion.div>
        </header>
    )
}

export default Header
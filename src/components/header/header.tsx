'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header className="flex justify-between top-0 p-5 max-w-7xl mx-auto sticky z-20">
            {/* Social Icons */}
            <motion.div
                className="flex flex-row items-center"
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
                <a
                    href="mailto:niconelli2@gmail.com"
                    className="uppercase hidden md:inline-flex text-sm">
                    Get in touch
                </a>
            </motion.div>
        </header>
    )
}

export default Header

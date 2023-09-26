'use client'
import React from 'react'
import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header className="flex justify-between items-center top-0 p-5 max-w-7xl mx-auto sticky z-20">
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
            <Link href="#contact">
                <motion.div
                    className="flex flex-row gap-3 items-center cursor-pointer"
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}>
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                    <p className="mt-[2px] uppercase hidden md:inline-flex text-sm">
                        Get in touch
                    </p>
                </motion.div>
            </Link>
        </header>
    )
}

export default Header

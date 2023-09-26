'use client'
import React from 'react'
import Link from 'next/link'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

const Footer = () => {
    return (
        <footer className="sticky bottom-5 w-full">
            <div className="flex items-center justify-end mr-5">
                <Link href="#hero">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full cursor-pointer bg-gray-700 hover:bg-[#e66c2c] transition duration-200">
                        <ChevronUpIcon className="h-8 w-8 ml-[1px] mb-[1px]" />
                    </div>
                </Link>
            </div>
        </footer>
    )
}

export default Footer

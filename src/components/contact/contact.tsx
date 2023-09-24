'use client'
import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row relative h-screen max-w-7xl px-10 mx-auto justify-evenly items-center text-center md:text-left">
            <h3 className="section-title">Contact Me</h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-3xl font-semibold text-center">
                    I have got just what you need.{' '}
                    <span className="underline decoration-[#e66c2c]/70">
                        Lets Talk
                    </span>
                    .
                </h4>
                <div className="flex flex-col items-center">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-5">
                            <PhoneIcon className="h-7 w-7 text-[#e66c2c] animate-pulse" />
                            <p className="text-xl">+54 9 341 383 7379</p>
                        </div>
                        <div className="flex items-center space-x-5">
                            <EnvelopeIcon className="h-7 w-7 text-[#e66c2c] animate-pulse" />
                            <p className="text-xl">niconelli2@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-5">
                            <MapPinIcon className="h-7 w-7 text-[#e66c2c] animate-pulse" />
                            <p className="text-xl">Argentina</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './backgroundCircles/backgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

import PageInfo from '@/entities/PageInfo'
import { urlForImage } from '../../../sanity/lib/image'

type Props = {
    pageInfo?: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi, I'm ${pageInfo?.name}`,
            'I love web development, from backend to frontend!',
            "If you see a bug here, don't worry, it will soon be a new feature",
            '[Error 404: Ironic joke not found]',
            'I promise my code are better than my jokes',
            'InsertAnotherSillyJoke.tsx',
            '<IForgotTheCoffeeJoke />',
        ],
        loop: true,
        delaySpeed: 2000,
        deleteSpeed: 15,
    })

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            {pageInfo?.heroImage && (
                <div className="relative h-32 w-32">
                    <Image
                        className="relative rounded-full mx-auto object-cover"
                        src={urlForImage(pageInfo.heroImage).url()}
                        alt={'Photo of Nico Antonelli'}
                        fill={true}
                    />
                </div>
            )}
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[0.85rem] md:tracking-[1rem] mr-[-0.85rem] md:mr-[-1rem]">
                    {pageInfo?.role}
                </h2>
                <h1 className="text-4xl lg:text-6xl font-semibold px-10">
                    <span className="mr-1">{text}</span>
                    <Cursor cursorColor="#e66c2c" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="hero-button">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="hero-button">Experience</button>
                    </Link>
                    <Link href="#projects">
                        <button className="hero-button">Projects</button>
                    </Link>
                    <Link href="#skills">
                        <button className="hero-button">Skills</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero

'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './backgroundCircles'
import Image from 'next/image'

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Nico Antonelli",
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
            <div className="relative h-32 w-32">
                <Image
                    className="relative rounded-full mx-auto object-cover"
                    src={'/Nick_prop.png'}
                    alt={'Photo of Nico Antonelli'}
                    fill={true}
                />
            </div>
            <div>
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-4xl lg:text-6xl font-semibold px-10">
                    <span className="mr-1">{text}</span>
                    <Cursor cursorColor="#e66c2c" />
                </h1>
            </div>
        </div>
    )
}

export default Hero

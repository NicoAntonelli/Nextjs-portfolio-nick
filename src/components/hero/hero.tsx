'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './backgroundCircles'

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
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#e66c2c" />
            </h1>
        </div>
    )
}

export default Hero

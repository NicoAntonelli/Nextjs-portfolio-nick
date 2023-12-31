'use client'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

// Contact form inputs
type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

const Contact = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<Inputs>()

    // Format mail body
    const bodyFormat = (values: Inputs) => {
        const newLine = '%0D%0A'
        return `[Name: ${values.name}]${newLine}[Email: ${values.email}]${newLine}${newLine}${values.message}`
    }

    const onSubmit: SubmitHandler<Inputs> = (values: Inputs) => {
        const nickMail = 'niconelli2@gmail.com'

        window.location.href = `mailto:${nickMail}?subject=[PORTFOLIO] ${
            values.subject
        }&body=${bodyFormat(values)}`
    }

    return (
        <div className="flex flex-col md:flex-row relative h-screen max-w-7xl px-10 mx-auto justify-evenly items-center text-center md:text-left">
            <h3 className="section-title">Contact Me</h3>
            <div className="flex flex-col space-y-6">
                <h4 className="text-xl md:text-2xl font-semibold text-center mt-20">
                    I have got just what you need.{' '}
                    <span className="underline decoration-[#e66c2c]/70">
                        Lets Talk
                    </span>
                    .
                </h4>
                <div className="flex flex-col items-center">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-5">
                            <PhoneIcon className="h-6 w-6 text-[#e66c2c] animate-pulse" />
                            <p className="text-xl">+54 9 341 383 7379</p>
                        </div>
                        <div className="flex items-center space-x-5">
                            <EnvelopeIcon className="h-6 w-6 text-[#e66c2c] animate-pulse" />
                            <p className="text-xl">niconelli2@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-5">
                            <MapPinIcon className="h-6 w-6 text-[#e66c2c] animate-pulse" />
                            <p className="text-xl">Argentina</p>
                        </div>
                    </div>
                </div>

                <form
                    className="flex flex-col w-fit space-y-2 mx-auto"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex space-x-2">
                        <input
                            className="contact-input"
                            {...register('name')}
                            placeholder="Name"
                            type="text"
                        />
                        <input
                            className="contact-input"
                            {...register('email')}
                            placeholder="Email"
                            type="email"
                        />
                    </div>
                    <input
                        className="contact-input"
                        {...register('subject')}
                        placeholder="Subject"
                        type="text"
                    />
                    <textarea
                        className="contact-input"
                        {...register('message')}
                        placeholder="Message"
                    />
                    <button
                        className="bg-[#e66c2c]/70 text-white text-lg font-bold rounded-sm px-10 py-3"
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact

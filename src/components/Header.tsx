import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto z-20">
            <div className="flex flex-row gap-2 items-center">
                {/* Social Icons */}
                <SocialIcon
                    url="https://www.linkedin.com/in/nico-antonelli/"
                    target="blank"
                />
                <SocialIcon
                    url="https://github.com/NicoAntonelli/"
                    target="blank"
                />
            </div>
            <div className="flex flex-row gap-1 items-center cursor-pointer">
                {/* Email */}
                <SocialIcon
                    url="mailto:niconelli2@gmail.com"
                    network="email"
                    bgColor="transparent"
                    target="blank"
                />
                <p className="uppercase hidden md:inline-flex text-sm">
                    Get in touch
                </p>
            </div>
        </header>
    )
}

export default Header

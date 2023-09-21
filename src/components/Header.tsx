import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
    return (
        <header>
            <div>
                {/* Social Icons */}
                <SocialIcon
                    url="https://www.linkedin.com/in/nico-antonelli/"
                    target="blank"
                />
            </div>
        </header>
    )
}

export default Header

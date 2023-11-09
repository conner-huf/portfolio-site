import React from 'react'
import './Logo.css'
import { SocialIcon } from 'react-social-icons'

export const Logo = () => {
  return (
    // Here for if I ever make a decent "logo" for myself
    <div className='socials-container'>
      <SocialIcon className="social-icon" bgColor="black" url="https://www.linkedin.com/in/conner-hufnagel-070243287/" target="_blank"/>
      <SocialIcon className="social-icon" bgColor='black' url="https://github.com/conner-huf" target="_blank"/>
    </div>
  )
}

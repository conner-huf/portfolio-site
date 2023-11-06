import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Logo } from './Logo/Logo'

import './Header.css'

export const Header = () => {
  return (
    <div className='header'>
        <Logo />
        <Navbar />
    </div>
  )
}

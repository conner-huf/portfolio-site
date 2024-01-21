import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

import './Navbar.css'
import resume from '../../../Assets/Resume.pdf'

export const Navbar = () => {

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header ref={navRef}>
      <nav className="menu-container">
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li><Link to='/' className="nav-link">Home</Link></li>
          <li><Link to='/about' className="nav-link">About Me</Link></li>
          <li><Link to='/projects' className="nav-link">Projects</Link></li>
          <li><a href={resume} download className="nav-link">Resume</a></li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
          <FaTimes />
      </button>
    </header>
  )
}

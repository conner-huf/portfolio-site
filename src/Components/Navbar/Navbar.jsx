import React, { useRef } from 'react'
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

import './Navbar.css'

export const Navbar = () => {

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive");
  }

  return (
    <header>
      <Logo className="socials"/>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
      <nav className="menu-container" ref={navRef}>
        <Link to='/' className="nav-link" onClick={showNavBar}>Home</Link>
        <Link to='/about' className="nav-link" onClick={showNavBar}>About Me</Link>
        <Link to='/projects' className="nav-link" onClick={showNavBar}>Projects</Link>
        <Link to='/resume' className="nav-link" onClick={showNavBar}>Resume</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
    </header>
  )
}

import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import resume from '../../../Assets/Resume.pdf'

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="menu-container">
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li><Link to='/' className="nav-link">Home</Link></li>
          <li><Link to='/about' className="nav-link">About Me</Link></li>
          <li><Link to='projects' className="nav-link">Projects</Link></li>
          <li><a href={resume} download className="nav-link">Resume</a></li>
        </ul>
      </div>
    </nav>
  )
}

import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <ul>
        <li><Link to='/' className="nav-link">Home</Link></li>
        <li><Link to='/about' className="nav-link">About Me</Link></li>
        <li><Link to='projects' className="nav-link">Projects</Link></li>
        <li><Link to='/' className="nav-link">Resume</Link></li>
    </ul>
  )
}

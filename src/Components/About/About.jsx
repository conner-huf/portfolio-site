import React from 'react'
import './About.css'

export const About = () => {
  return (
    <div className='about-content'>
        <aside className='about-section1'>
            <h1 className='greeting'>--Hiya!</h1>
            <p className='about-me'>My name's Conner. I'm a software engineer based in Los Angeles, CA. I've mostly been making websites using React lately.</p>
        </aside>
        <aside className='about-section2'>
            <p>Section 2</p>
        </aside>
    </div>
  )
}

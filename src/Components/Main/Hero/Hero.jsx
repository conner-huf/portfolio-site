import React from 'react'
import './Hero.css'
import avatar from '../../../Assets/wave_avatar.gif'

export const Hero = () => {
  return (
    <div className='hero-main-section'>
      <aside className='hero-section1'>
        <h3>I'm <span>Conner</span></h3>
        <h5>I'm a Software Developer</h5>
      </aside>
      <aside className='hero-section2'>
        <img src={avatar} alt="" className="avatar"></img>
      </aside>
    </div>
  )
}

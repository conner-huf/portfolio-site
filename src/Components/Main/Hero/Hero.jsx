import React from 'react'
import './Hero.css'
import avatar from '../../../Assets/wave_avatar.gif'

export const Hero = () => {
  return (
    <div className='hero-main-section'>
      <aside className='hero-avatar'>
        <img src={avatar} alt="" className="avatar"></img>
      </aside>
      <aside className='hero-text'>
        <h3>I'm <span>Conner</span></h3>
        <p>SOFTWARE DEVELOPER</p>
      </aside>
    </div>
  )
}

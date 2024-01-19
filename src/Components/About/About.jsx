import React from 'react'
import './About.css'
import profilePic from '../../Assets/ProfilePic.png';

export const About = () => {
  return (
    <div className='about-page'>
        <aside className='about-text-section'>
            <h1 className='greeting'>Hi!</h1>
            <p className='about-me-text'>
              My name's Conner. I'm a software developer based in Los Angeles, CA.
              <br/><br/>
              I specialize in developing React applications, and I specifically enjoy developing tools related to video games, movies, music, etc.
              <br/><br/>
              If you're interested in seeing some of the things I've worked on, check out my Projects link. You'll find some live hosted applications and sites that you can fiddle around with!
              <br/><br/>
              If you'd like to get in touch, feel free to reach out to me using the LinkedIn icon above, or shoot me an email at conner.huf@gmail.com. You can also play any of my finished Unity projects by using the Itch.io link above.
            </p>
        </aside>
        <aside className='about-pic-section'>
            <img src={profilePic} alt="" className='profilePic'></img>
        </aside>
    </div>
  )
}

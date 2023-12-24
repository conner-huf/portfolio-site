import React from 'react'
import './About.css'
import profilePic from '../../Assets/ProfilePic.png';

export const About = () => {
  return (
    <div className='about-content'>
        <aside className='about-section1'>
            <h1 className='greeting'>Hi!</h1>
            <p className='about-me'>
              My name's Conner. I'm a software developer based in Los Angeles, CA.
              <br/><br/>
              I specialize in developing React applications, and I specifically enjoy developing tools related to video games, movies, music, etc.
              <br/><br/>
              If you're interested in seeing some of the things I've worked on, check out my Projects link. You'll find some live hosted applications and sites that you can fiddle around with!
              <br/><br/>
              As far as upcoming projects, I'm currently (as of 12/23) working on a Full-Stack development certification so I can continue to grow my skills in manipulating databases and backend/frontend interactions.
              <br/><br/>
              If you'd like to get in touch, feel free to reach out to me using the LinkedIn icon above, or shoot me an email at conner.huf@gmail.com
            </p>
        </aside>
        <aside className='about-section2'>
            <img src={profilePic} alt="" className='profilePic'></img>
        </aside>
    </div>
  )
}

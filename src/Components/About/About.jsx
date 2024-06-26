import React from 'react'
import './About.css'
import profilePic from '../../Assets/ProfilePic.png';

export const About = () => {
  return (
    <div className='about-page'>
        <aside className='about-text-section'>
            <h1 className='greeting'>Hi!</h1>
            <p className='about-me-text'>
              My name's Conner. I'm a software engineer based in Los Angeles, CA.
              <br/><br/>
              I specialize in developing Full-Stack applications, I typically use React.js for my frontend work and .NET for my backend work. I especially enjoy developing tools related to video games, movies, music, etc.
              <br/><br/>
              I'm currently looking for a full time position as a software engineer. I'm actively pursuing certifications in Azure and working on personal projects to expand my portfolio.
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

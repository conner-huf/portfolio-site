import React from 'react'
import './About.css'
import profilePic from '../../Assets/ProfilePic.png';

export const About = () => {
  return (
    <div className='about-content'>
        <aside className='about-section1'>
            <h1 className='greeting'>--Hiya!</h1>
            <p className='about-me'>
              My name's Conner. I'm a software engineer based in Los Angeles, CA.
              <br/><br/>
              I specialize in developing React applications, and I specifically enjoy developing tools related to video games, movies, music, etc.
              <br/><br/>
              If you're interested in seeing some of the things I've worked on, check out my Projects link. You'll find some applications and sites live hosted that you can fiddle around with!
              <br/><br/>
              As far as upcoming projects, I'm currently (as of 11/23) working on a project in Unity for a GameJam, and I've got an application I'm developing using Leaflet that I'm excited about. But you'll have to wait and see what those are, no spoilies.
            </p>
        </aside>
        <aside className='about-section2'>
            <img src={profilePic} alt="" className='profilePic'></img>
        </aside>
    </div>
  )
}

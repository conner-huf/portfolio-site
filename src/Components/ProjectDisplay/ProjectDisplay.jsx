import React from 'react'
import './ProjectDisplay.css'

import restaurantPic from '../../Assets/project-restaurant-site.png'
import ecommercePic from '../../Assets/project-e-commerce-site.png'
import spotifyPic from '../../Assets/project-spotify-clone.png'
import angularQAPic from '../../Assets/project-angular-qa-site.png'

export const ProjectDisplay = () => {
  return (
    <div className='project-backdrop'>
      <p>Featured Projects:</p>
      <hr />
      <div className="project-container">
        <div className="project-card">
          <img src={restaurantPic} alt={"Restaurant Site"} />
          <div className='layer'>
            <h3>{"Restaurant Site"}</h3>
            <p>{"A demo site for a restaurant called Little Lemon"}</p>
            <a href="https://conner-huf.github.io/restaurant-site/" target="_blank">Visit Project</a>
          </div>
        </div>
        <div className="project-card">
          <img src={ecommercePic} alt={"E-Commerce Site"} />
          <div className='layer'>
            <h3>{"E-Commerce Site"}</h3>
            <p>{"A demo E-Commerce site, built using React"}</p>
            <a href="https://conner-huf.github.io/e-commerce-site/" target="_blank">Visit Project</a>
          </div>
        </div>
        <div className="project-card">
          <img src={spotifyPic} alt={"Spotify Clone"} />
          <div className='layer'>
            <h3>{"Spotify Clone"}</h3>
            <p>{"Meant to work like and look like Spotify. Built using React, TailwindCSS, and Supabase"}</p>
            <a href="https://spotify-clone-sable-three.vercel.app/" target="_blank">Visit Project</a>
          </div>
        </div>
        <div className="project-card">
          <img src={angularQAPic} alt={"Angular Q&A Site"} />
          <div className='layer'>
            <h3>{"Angular Q&A Site"}</h3>
            <p>{"A site displaying answers to common questions about Angular. Built using AWS buckets, Docker, Angular, AWS Lambdas, and DynamoDB"}</p>
            <a href="http://connerbucket1.s3-website-us-east-1.amazonaws.com/" target="_blank">Visit Project</a>
          </div>
        </div>
      </div>
    </div>
  )
}


// Until I can figure out how to make the json image paths work, I'm going to manually populate the project cards.s

/*
export const ProjectDisplay = ({ projects }) => {
  return (
    <div className='project-backdrop'>
      <p>Featured Projects:</p>
      <hr />
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={require(`${project.img}`).default} alt={project.title} />
            <div className='layer'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>Visit Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
*/


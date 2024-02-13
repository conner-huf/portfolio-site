import React from 'react'
import './ProjectDisplay.css'

import restaurantPic from '../../Assets/project-restaurant-site.png'
import ecommercePic from '../../Assets/project-e-commerce-site.png'
import spotifyPic from '../../Assets/project-spotify-clone.png'
import angularQAPic from '../../Assets/project-angular-qa-site.png'
import asteroidsPic from '../../Assets/project-asteroids.png'
import blenderDonutsPic from '../../Assets/project-blenderDonuts.png'
import blenderBearPic from '../../Assets/project-blenderBear.png'
import pokedexPic from '../../Assets/project-pokedex.png'
import portfolioPic from '../../Assets/project-portfolio.png'
import evermanaPic from '../../Assets/project-wow-addon.png'

export const ProjectDisplay = () => {
  return (
    <div className='project-backdrop'>
      <p>Featured Projects:</p>
      <hr />
      <div className="project-container">

        <div className="project-card">
          <img src={pokedexPic} alt={"Pokedex Application"} />
          <div className='layer'>
            <h3>{"Pokedex Application"}</h3>
            <p>{"An application that fetches data from the PokeApi to display information on the Pokemon game series. Made using React, PokeApi.co, and Node.js. (Currently in development)"}</p>
            <a href="https://conner-huf.github.io/pokedex/" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={asteroidsPic} alt={"Asteroids Game"} />
          <div className='layer'>
            <h3>{"Asteroids Game"}</h3>
            <p>{"A game inspired by the asteroids arcade game. Built using Unity."}</p>
            <a href="https://itzlumpz.itch.io/asteroids" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={restaurantPic} alt={"Restaurant Site"} />
          <div className='layer'>
            <h3>{"Restaurant Site"}</h3>
            <p>{"A demo site for a restaurant called Little Lemon. Built using React."}</p>
            <a href="https://conner-huf.github.io/restaurant-site/" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={spotifyPic} alt={"Spotify Clone"} />
          <div className='layer'>
            <h3>{"Spotify Clone"}</h3>
            <p>{"Meant to work like and look like Spotify. Built using React, TailwindCSS, and Supabase"}</p>
            <a href="https://spotify-clone-sable-three.vercel.app/" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={evermanaPic} alt={"EverMana"} />
          <div className='layer'>
            <h3>{"EverMana WoW Addon"}</h3>
            <p>{"An Addon for World of Warcraft classic. This Addon displays the mana level of a druid no matter what form they're in."}</p>
            <a href="https://github.com/conner-huf/EverMana" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={ecommercePic} alt={"E-Commerce Site"} />
          <div className='layer'>
            <h3>{"E-Commerce Site"}</h3>
            <p>{"A demo E-Commerce site, built using React"}</p>
            <a href="https://conner-huf.github.io/e-commerce-site/" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={angularQAPic} alt={"Angular Q&A Site"} />
          <div className='layer'>
            <h3>{"Angular Q&A Site"}</h3>
            <p>{"A site displaying answers to common questions about Angular. Built using AWS buckets, Docker, Angular, AWS Lambdas, and DynamoDB"}</p>
            <a href="http://connerbucket1.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={blenderDonutsPic} alt={"Blender Donuts"} />
          <div className='layer'>
            <h3>{"Blender Donuts"}</h3>
            <p>{"A project I took on to learn some light 3D modeling. Made in Blender."}</p>
            <a href="https://sketchfab.com/3d-models/donut-iso-a4c4239e39c64d69902f583b03800d4c" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={blenderBearPic} alt={"Blender Bear"} />
          <div className='layer'>
            <h3>{"Blender Bear"}</h3>
            <p>{"A bear character, currently building out skeleton rigging. Made in Blender."}</p>
            <a href="https://sketchfab.com/3d-models/bear-02f69c5f9a4b425eb3b36e1736b71cbb" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={portfolioPic} alt={"Portfolio Site"} />
          <div className='layer'>
            <h3>{"Portfolio Site"}</h3>
            <p>{"The website you're seeing this on! I made this website using React and it is constantly being updated, refactored, and expanded."}</p>
            <a href="https://github.com/conner-huf/portfolio-site" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>
        
      </div>
    </div>
  )
}


// Until I can figure out how to make the json image paths work, I'm going to manually populate the project cards.

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



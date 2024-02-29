import React from 'react'
import './ProjectDisplay.css'

/*

import angularQAPic from '../../Assets/project-angular-qa-site.png'
import blenderDonutsPic from '../../Assets/project-blenderDonuts.png'
import blenderBearPic from '../../Assets/project-blenderBear.png'
import ecommercePic from '../../Assets/project-e-commerce-site.png'

*/

import restaurantPic from '../../Assets/project-restaurant-site.png'
import spotifyPic from '../../Assets/project-spotify-clone.png'
import asteroidsPic from '../../Assets/project-asteroids.png'
import pokedexPic from '../../Assets/project-pokedex.png'
import portfolioPic from '../../Assets/project-portfolio.png'
import evermanaPic from '../../Assets/project-wow-addon.png'
import noodlePic from '../../Assets/project-noodle.png'
import teenylinkPic from '../../Assets/project-teenylink.png'

export const ProjectDisplay = () => {
  return (
    <div className='project-backdrop'>
      <p>Featured Projects:</p>
      <hr />
      <div className="project-container">

      <div className="project-card">
          <img src={noodlePic} alt={"Noodle"} />
          <div className='layer'>
            <h3>{"Noodle"}</h3>
            <p>{"A full-stack application for finding concerts in your local area. Uses Python Flask, React.js, Leaflet, TicketmasterAPI, SpotifyAPI, Heroku. (Currently in Development)"}</p>
            <a href="https://conner-huf.github.io/noodle/" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={pokedexPic} alt={"Pokedex Application"} />
          <div className='layer'>
            <h3>{"Pokedex Application"}</h3>
            <p>{"An application that fetches data from the PokeApi to display information on the Pokemon game series. Made using React, PokeApi.co, and Node.js."}</p>
            <a href="https://conner-huf.github.io/pokedex/" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={teenylinkPic} alt={"Teeny Link"} />
          <div className='layer'>
            <h3>{"Teeny Link"}</h3>
            <p>{"An application that can shorten a url. Uses Firebase to store target long URLs and generated short URLs. Made using React, Python Flask, Firebase, Heroku."}</p>
            <a href="http://www.teeny-link.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
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

/*
        <div className="project-card">
          <img src={blenderBearPic} alt={"Blender Bear"} />
          <div className='layer'>
            <h3>{"Blender Bear"}</h3>
            <p>{"A bear character, currently building out skeleton rigging. Made in Blender."}</p>
            <a href="https://sketchfab.com/3d-models/bear-02f69c5f9a4b425eb3b36e1736b71cbb" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
          </div>
        </div>

        <div className="project-card">
          <img src={blenderDonutsPic} alt={"Blender Donuts"} />
          <div className='layer'>
            <h3>{"Blender Donuts"}</h3>
            <p>{"A project I took on to learn some light 3D modeling. Made in Blender."}</p>
            <a href="https://sketchfab.com/3d-models/donuts-c352bd5dec594444b3b5ad281454a625" target="_blank" rel="noreferrer"><i className="fa-solid fa-link" /></a>
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
*/



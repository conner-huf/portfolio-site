import React from 'react'
import './ProjectCard.css'

import portfolioPic from '../../Assets/project-portfolio.png'
import noodlePic from '../../Assets/project-noodle.png'
import teenyLinkPic from '../../Assets/project-teenylink.png'
import asteroidsPic from '../../Assets/project-asteroids.png'
import evermanaPic from '../../Assets/project-wow-addon.png'
import pokedexPic from '../../Assets/project-pokedex.png'
import spotifyPic from '../../Assets/project-spotify-clone.png'
import restaurantPic from '../../Assets/project-restaurant-site.png'

const images = {
    "Portfolio Site": portfolioPic,
    "Noodle": noodlePic,
    "Teeny Link": teenyLinkPic,
    "Asteroids Game": asteroidsPic,
    "Evermana WoW Addon": evermanaPic,
    "Pokedex Application": pokedexPic,
    "Spotify Clone": spotifyPic,
    "Restaurant Site": restaurantPic,
}

export const ProjectCard = ({ index, project }) => {
  return (
    <div className={`project-card-container ${index % 2 === 1 ? 'reverse' : ''}`}>
        <div className='project-card'>
            <div className='project-image-container'>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img className='project-card-image' src={images[project.title]} alt='project' />
                </a>
            </div>
            <div className='project-card-description'>
                <div className='project-technologies'>
                    {project.tech.split(', ').map((tech, i) => (
                        <p key={i} className='tech-used-in-project'>
                            {tech}
                        </p>
                    ))}
                </div>
                <div className='project-description-text'>
                    {project.description}
                </div>
            </div>
        </div>
    </div>
  )
}

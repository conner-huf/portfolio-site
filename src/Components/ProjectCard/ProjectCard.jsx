import React from 'react';
import './ProjectCard.css';

import portfolioPic from '../../Assets/project-portfolio.png';
import noodlePic from '../../Assets/project-noodle.png';
import teenyLinkPic from '../../Assets/project-teenylink.png';
import asteroidsPic from '../../Assets/project-asteroids.png';
import evermanaPic from '../../Assets/project-wow-addon.png';
import pokedexPic from '../../Assets/project-pokedex.png';
import spotifyPic from '../../Assets/project-spotify-clone.png';
import restaurantPic from '../../Assets/project-restaurant-site.png';
import connerapiPic from '../../Assets/project-connerapi.png';
import ecommercePic from '../../Assets/project-e-commerce-site.png';
import threedPic from '../../Assets/project-3dmodelviewer.png';

const images = {
    "Autaly": portfolioPic,
    "Portfolio Site": portfolioPic,
    "ConnerAPI": connerapiPic,
    "Noodle": noodlePic,
    "Teeny Link": teenyLinkPic,
    "Asteroids": asteroidsPic,
    "Evermana": evermanaPic,
    "Pokedex App": pokedexPic,
    "Spotify Clone": spotifyPic,
    "Restaurant Demo Site": restaurantPic,
    "PokeBattle": pokedexPic,
    "E-Commerce Demo Site": ecommercePic,
    "3D Model Viewer": threedPic
};

export const ProjectCard = ({ index, project }) => {
  if (!project || !project.name || !project.technologies || !project.description) {
    return <div>No project data available</div>;
  }

  return (
    <div className={`project-card-container ${index % 2 === 1 ? 'reverse' : ''}`} key={index}>
      <div className='project-card'>
        <div className='project-image-container'>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <img className='project-card-image' src={images[project.name]} alt='project' />
          </a>
        </div>
        <div className='project-card-description'>
          <div className='project-technologies'>
            {project.technologies.map((tech, i) => (
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
  );
};
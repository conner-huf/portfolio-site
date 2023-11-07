import React from 'react'
import './ProjectDisplay.css'

export const ProjectDisplay = ({ projects }) => {
  return (
    <div className='project-backdrop'>
      <p>Featured Projects:</p>
      <hr />
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={require(`../../${project.img}`).default} alt={project.title} />
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


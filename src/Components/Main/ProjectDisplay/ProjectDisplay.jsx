import React from 'react'
import './ProjectDisplay.css'

export const ProjectDisplay = ({ projects }) => {
  return (
    <div className='project-backdrop'>
      <p>Featured Projects:</p>
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>Visit Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};


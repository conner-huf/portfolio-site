import React, {useEffect, useRef } from 'react'
import './ProjectDisplay.css'
import { ProjectCard } from '../ProjectCard/ProjectCard'

import projects from '../../Assets/projects.json'

export const ProjectDisplay = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Scroll a small amount to the right
      container.scrollTo({ left: 500, behavior: 'smooth' });

      // After 1 second, scroll back to the start
      setTimeout(() => {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      }, 500);
    }
  }, []);

  return (
    <div className='project-backdrop' ref={containerRef}>
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} project={project} />
      ))}
    </div>
  )
}
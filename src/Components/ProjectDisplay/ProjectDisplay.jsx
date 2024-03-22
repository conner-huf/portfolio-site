import React from 'react'
import './ProjectDisplay.css'
import { ProjectCard } from '../ProjectCard/ProjectCard'

import projects from '../../Assets/projects.json'

export const ProjectDisplay = () => {
  return (
    <div className='project-backdrop'>
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} project={project} />
      ))}
    </div>
  )
}
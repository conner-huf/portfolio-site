import React, {useEffect, useRef } from 'react'
import { useQuery } from 'react-query';
import './ProjectDisplay.css'
import { ProjectCard } from '../ProjectCard/ProjectCard'



const fetchProjects = async () => {
  const res = await fetch('https://app-connerapi-dev.azurewebsites.net/projects');
  return res.json();
}

export const ProjectDisplay = () => {

  const containerRef = useRef(null);
  const { data: projects, isLoading } = useQuery('projects', fetchProjects);

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

  if (isLoading) return 'Loading...';

  return (
    <div className='project-backdrop' ref={containerRef}>
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} project={project} />
      ))}
    </div>
  )
}
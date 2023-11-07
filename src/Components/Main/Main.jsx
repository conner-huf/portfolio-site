import React from 'react'
import { Hero } from './Hero/Hero'
import { ProjectDisplay } from './ProjectDisplay/ProjectDisplay'
import projects from "../../Assets/projects.json";

export const Main = () => {
  return (
    <>
        <Hero />
        <ProjectDisplay projects={projects}/>
    </>
  )
}

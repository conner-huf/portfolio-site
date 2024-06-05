import React from 'react'
import './Main.css'
import { SpinningCube } from '../SpinningCube/SpinningCube'

export const Main = () => {
  return (
    <div className='home-main-section'>
      <aside className='home-aside'>
        <SpinningCube />
      </aside>
      <aside className='home-text'>
        <h3>I'm <span>Conner</span></h3>
        <p>SOFTWARE ENGINEER</p>
        <p>Added CI/CD</p>
      </aside>
    </div>
  )
}
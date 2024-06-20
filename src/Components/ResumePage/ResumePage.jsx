import React from 'react'
import './ResumePage.css'

import resume from '../../Assets/Resume6-18.pdf'

export const ResumePage = () => {

  return (
    <div className='resume-page-container'>
      <div className='resume-page-left'>
        <ul><h3 data-testid='tech-skill' className='tech-skill'>Technical Skills</h3><div></div>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>C#</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
        <ul><h3 data-testid='edu-exp' className='edu-exp'>Education</h3>
          <li><h4>Southern New Hampshire University</h4></li>
            <ul>
              <li>Bachelor's of Computer Science</li>
              <li>Summa Cum Laude - 2023</li>
            </ul>
          <li><h4>Certifications</h4></li>
            <ul>
              <li>AZ-900 - Microsoft</li>
              <li>Front-End-Development - Meta</li>
              <li>Full-Stack-Development - IBM</li>
              <li>Data Analytics - Google</li>
            </ul>
        </ul>
        <ul><h3 data-testid='work-exp' className='work-exp'>Work Experience</h3>
          <li><h4>Computer Systems Operator</h4>
            <ul>
              <li>Army National Guard | 2016 - 2022</li>
            </ul>
          </li>
          <li><h4>Health Manager</h4>
            <ul>
              <li>Sunbeam Family Services | 2019 - 2022</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <a href={resume}  className='resume-download-button' download>Download My Resume</a>
    </div>
  )
}

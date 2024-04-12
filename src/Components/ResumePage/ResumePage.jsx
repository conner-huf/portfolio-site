import React, { useState } from 'react'
import './ResumePage.css'

import resume from '../../Assets/Resume.pdf'

export const ResumePage = () => {
  const [hoveredSection, setHoveredSection] = useState('');

  return (
    <div className='resume-page-container'>
      <div className='resume-page-left'>
        <ul><h3 data-testid='tech-skill' className='tech-skill' onMouseEnter={() => setHoveredSection('tech-skill')} onMouseLeave={() => setHoveredSection('')}>Technical Skills</h3><div></div>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>C#</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
        <ul><h3 data-testid='edu-exp' className='edu-exp' onMouseEnter={() => setHoveredSection('edu-exp')} onMouseLeave={() => setHoveredSection('')}>Education</h3>
          <li><h4>Southern New Hampshire University</h4></li>
            <ul>
              <li>Bachelor's of Computer Science</li>
              <li>Summa Cum Laude - 2023</li>
            </ul>
          <li><h4>Certifications</h4></li>
            <ul>
              <li>Front-End-Development - Meta</li>
              <li>Full-Stack-Development - IBM</li>
              <li>Data Analytics - Google</li>
            </ul>
        </ul>
        <ul><h3 data-testid='work-exp' className='work-exp' onMouseEnter={() => setHoveredSection('work-exp')} onMouseLeave={() => setHoveredSection('')}>Work Experience</h3>
          <li><h4>Health Manager</h4>
            <ul>
              <li>Sunbeam Family Services | 2019 - 2022</li>
            </ul>
          </li>
          <li><h4>Mortar Squad Sergeant</h4>
            <ul>
              <li>Army National Guard | 2016 - 2022</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='resume-page-right'>
        <p data-testid='tech-skill-desc' className={`tech-skill ${hoveredSection === 'tech-skill' ? 'unhovered' : 'hovered'}`}>The majority of my frontend projects are built using React. Most of my backends are made using either Python Flask or Node.js. I've really enjoyed learning and using React, and it's what I feel most comfortable using, but I'm always pursuing new opportunities using different frameworks and libraries! One thing I've been enjoying a lot lately is Unity development using C#. I've done two game jams using Unity so far, and I'm always signing up for more because I love the creative challenge of making a project centered around a provided theme!</p>
        <hr />
        <p data-testid='edu-exp-desc' className={`edu-exp ${hoveredSection === 'edu-exp' ? 'unhovered' : 'hovered'}`}>Last year, I finished up a Bachelors in Computer Science from Southern New Hampshire University. I graduated Summa Cum Laude, and actually discovered an appreciation for Math throughout my coursework. Now, I love implementing things like sin functions to create repeating behavior, be it in css animations in React or game behavior in Unity. While pursuing my degree, I also was actively earning a certification for Frontend development. And I'm still actively earning certifications while on the job hunt to refine my skills and learn more about different areas of software I find interesting! My Full stack development and Data analytics certifications are currently in progress.</p>
        <hr />
        <p data-testid='work-exp-desc' className={`work-exp ${hoveredSection === 'work-exp' ? 'unhovered' : 'hovered'}`}>As a Health Manager at Sunbeam Family Services, I led a team of 4 in maintaining health compliance standards for a school system with 17 separate sites and 500 active students. While I was with Sunbeam, we underwent a standard federal compliance review, during this 90-day review, my team and I improved our health compliance numbers from 65% to a staggeringly-high 92% compliance. As a result, Sunbeam kept their federal funding and have been able to continue serving local families.</p>
        <p className={`work-exp ${hoveredSection === 'work-exp' ? 'unhovered' : 'hovered'}`}>While a Mortar Squad Sergeant with the Army National Guard, I served as the Fire Direction and Control Check Computer. This means I would communicate with the forward observers to receive information on targets and use both digital and analog methods of determining the correct vertical angle and horizontal deflection to fire the mortars in a 4 mortar fire team. This involved a lot of math when using the analog methods, and was incredibly interesting to learn how each type of round affected flight times. This role involved a lot of physics and trigonometry and was an experience I'm immensely proud of.</p>
      </div>
      <a href={resume}  className='resume-download-button' download>Download My Resume</a>
    </div>
  )
}

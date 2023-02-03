import React from 'react';
import './projects.css'
import logo from '../../assets/logo-1.png';
import { data } from './mock'

const Projects = () => {
  return (
    <div className='projects-wrapper' id='projects'>
      <div className='projects-header'>
      <img src={logo} />
        <p>Projects:</p>
      </div>
      {data.map((item)=> (
      <div className='projects' key={item.id}>
        <div className='number'>
          <p>{item.number}</p>
        </div>
        <div className='project-border' >
          <div className='img-container'>
            <img src={item.image1} className='project-image1' alt='logo'/>
            <img src={item.image2} className='project-image2' alt='logo'/>
          </div>
            <div className='project-content'>
              <p className='title1'>{item.title}</p>
              <p className='title2'>{item.stack}</p>
              <p className='title3'><a href={item.url}>VISIT THE WEBSITE</a></p>
            </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Projects
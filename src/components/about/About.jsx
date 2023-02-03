import React from 'react';
import './about.css';
import logo from '../../assets/logo.png';
import profile from '../../assets/anass-logo.png'

const About = () => {
  return (
    <div className='about-container' id='about'>
     
      <div className='about-title'>
        <img src={logo} />
      <h1>About: </h1>
      </div>
      <div className='about-content'> 
        <div className='profile-background'>  
          <img src={profile}/>
          <p> Lorem ipsum dolor sit ameCras sit amet euismod elit. Donec elit orci,  
            efficitur a diam sit amet, scelerisque finibus ipsum.  
            Nullam vehicula ante elit, in ornare justo egestas non. Donec ut accumsan mauris.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
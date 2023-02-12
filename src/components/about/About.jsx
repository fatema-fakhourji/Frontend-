import React from 'react';
import './about.css';
import logo from '../../assets/logo-1.png';
import profile from '../../assets/anass-logo.png'
import { useState, useEffect } from 'react';

const About = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     const fetchData = async () => {
        try {
           const response = await fetch('https://anass-haidar-portfolio-stfk.onrender.com/about');
           const data = await response.json();
           setPosts(data);
        } catch (err) {
           console.log(err.message);
        }
     };

     fetchData();
  }, []);
  console.log(posts)
  return (
    
    <div>
      {posts.map(item => (
    <div className='about-container' id='about'>
     
      <div className='about-title' key={item.id}>
        <img src={logo} />
      <p>About: </p>
      </div>
      <div className='about-content'> 
      <div className='profile-background'>  <img src={`https://anass-haidar-portfolio-stfk.onrender.com/${item.image}`}/></div>
      <p> {item.description}</p>
     
      </div>
    </div>))}
    </div>
    
  )
}

export default About
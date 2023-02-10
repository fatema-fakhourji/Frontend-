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
           const response = await fetch('http://localhost:5000/about');
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
      <h1>About: </h1>
      </div>
      <div className='about-content'> 
      <div className='profile-background'>  <img src={`http://localhost:5000/${item.image}`}/></div>
      <p> {item.description}</p>
     
      </div>
    </div>))}
    </div>
    
  )
}

export default About
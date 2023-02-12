import React from 'react';
import './projects.css'
import logo from '../../assets/logo-1.png';
import { useEffect, useState } from 'react';



const Projects = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     const fetchData = async () => {
        try {
           const response = await fetch('https://anass-haidar-portfolio-stfk.onrender.com/projects');
           const data = await response.json();
           setPosts(data);
        } catch (err) {
           console.log(err.message);
        }
     };

     fetchData();
  }, []);

  return (
    <div className='projects-wrapper' id='projects'>
      <div className='projects-header'>
      <img src={logo} />

        <p>Projects:</p>
      </div>
      {posts.map((item)=> (
      <div className='projects' key={item.id}>
        <div className='number'>
          <p>{item.number}</p>
        </div>
        <div className='project-border' >
          <div className='img-container'>
            <img src={`https://anass-haidar-portfolio-stfk.onrender.com/${item.image1}`} className='project-image1' alt='logo'/>
            <img src={`https://anass-haidar-portfolio-stfk.onrender.com/${item.image2}`}className='project-image2' alt='logo'/>
          </div>
            <div className='project-content'>
              <p className='title1'>{item.title}</p>
              <p className='title2'>{item.description}</p>
              <p className='title3'><a href={item.link}>VISIT THE WEBSITE</a></p>
            </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Projects
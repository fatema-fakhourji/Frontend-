import React from 'react';
import './skills.css'
import logo from '../../assets/logo-1.png';
import sql from '../../assets/SQL.png'
import js from '../../assets/javascript.png'
import node from '../../assets/nodeJS.png'
import reactpic from '../../assets/react.png'
import python from '../../assets/python.png'
import { useEffect, useState } from 'react';
import DeleteSkill from './deleteSkill';

const Skills = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     const fetchData = async () => {
        try {
           const response = await fetch('http://localhost:5000/skills');
           const data = await response.json();
           setPosts(data);
        } catch (err) {
           console.log(err.message);
        }
     };

     fetchData();
  }, []);
  return (
    <div>
      
    
    <br />
    <br />
    <br />
    <div className='skills-title'>
      <img src={logo} />
    <h1>Skills: </h1>
    </div>
    <div className='skills-container' id='skills'>
    {posts.map(item => (
    <div className='skills-items'>
     <span className='skills-item-1'> 
        <img src={`http://localhost:5000/${item.image1}`}/>
        <h3>  {item.description}</h3>
     </span>
     
    </div>))}

    

    </div>
    <div className='skills-quote'>
    {posts.map(item => (
      <p>{item.quote}</p>

    ))
    }        < DeleteSkill />
      


    </div>
    </div>
  )
}

export default Skills
import React from 'react';
import './skills.css'
import logo from '../../assets/logo-1.png';

import { useEffect, useState } from 'react';

const Skills = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     const fetchData = async () => {
        try {
           const response = await fetch('https://anass-haidar-portfolio-stfk.onrender.com/skills');
           const data = await response.json();
           setPosts(data);
        } catch (err) {
           console.log(err.message);
        }
     };

     fetchData();
  }, []);

  
   const [info, setInfo] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('https://anass-haidar-portfolio-stfk.onrender.com/quote');
            const data = await response.json();
            setInfo(data);
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
    <p>Skills: </p>
    </div>
    <div className='skills-container' id='skills'>
    {posts.map(item => (
    <div className='skills-items'>
     <span className='skills-item-1'> 
        <img src={`https://anass-haidar-portfolio-stfk.onrender.com/${item.image}`}/>
        <h3>  {item.description}</h3>
     </span>
     
    </div>))}

    

    </div>
    <div className='skills-quote'>
    {info.map(item => (
      <p>{item.quote}</p>
    ))}

    </div>
    </div>
  )
}

export default Skills
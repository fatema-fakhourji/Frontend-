import React from 'react';
import './skills.css'
import logo from '../../assets/logo-1.png';
import sql from '../../assets/SQL.png'
import js from '../../assets/javascript.png'
import node from '../../assets/nodeJS.png'
import reactpic from '../../assets/react.png'
import python from '../../assets/python.png'

const Skills = () => {
  return (
    <div className='skills-container' id='skills'>
      <br />
      <br />
      <br />
      <div className='skills-title'>
        <img src={logo} />
      <h1>Skills: </h1>
      </div>
      <div className='skills-items'>
     <span className='skills-item-1'> 
        <img src={sql}/>
        <h3> SQL</h3>
     </span>
     <span className='skills-item-2'> 
        <img src={js}/>
        <h3> JavaScript </h3>
     </span>
     <span className='skills-item-3'>
        <img src={node}/>
        <h3> NodeJS </h3>
        </span>
        <span className='skills-item-4'>
        <img src={reactpic}/>
        <h3> React </h3>
        </span>
        <span className='skills-item-5'>
        <img src={python}/>
        <h3> Python </h3>

        </span>
    </div>

    <div className='skills-quote'>
      <p>“Self-belief and hard work will always earn you success!” </p>


    </div>

    </div>
  )
}

export default Skills
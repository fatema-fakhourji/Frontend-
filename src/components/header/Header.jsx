import React from 'react';
import { useEffect, useState } from 'react';
import './header.css';


const Header = () => {
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

  
  return (
    <div>
      
      {posts.map(item => (
     
  <div className='header-text' key={item.id}>
    <h1>{item.quote}</h1>
    {/* <h1>“Helping your <span className='text-special'> products </span><br /> to see the light is my <br /> calling.”</h1> */}
  </div>))}
  </div>
  )
  
}



export default Header
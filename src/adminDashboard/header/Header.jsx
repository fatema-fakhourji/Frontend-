import React from 'react';
import { useEffect, useState } from 'react';
import './header.css';


const Header = (props) => {
  
  
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

  // const deleteQuote = (id) => {
  //   const url = `https://anass-haidar-portfolio-stfk.onrender.com/quotes/${id}`;
  //   fetch(url, {
  //     method: 'DELETE',
  //   })
  //   .then(res => {
  //     if (!res.ok) {
  //       throw new Error('Failed to delete quote');
  //     }
  //     return res.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //     // update the state of your component to reflect the deleted quote
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // };



  


  return (
    <div>
      {posts.map(item => (
     
  <div className='header-text' key={item.id}>
    <h1>{item.quote}</h1>
    
  </div>
  ))}

  </div>
  )
  
}



export default Header
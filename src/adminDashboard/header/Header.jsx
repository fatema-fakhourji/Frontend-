import React from 'react';
import { useEffect, useState } from 'react';
import './header.css';


const Header = (props) => {
  
  
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

  // const deleteQuote = (id) => {
  //   const url = `http://localhost:5000/quotes/${id}`;
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
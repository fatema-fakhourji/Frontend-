import React, { Fragment } from "react";
import "./certificates.css";
import certificate1 from "../../assets/certificate1.jpg";
import certificate2 from "../../assets/certificate2.jpg";
import certificate3 from "../../assets/certificate3.jpg";
import certificate4 from "../../assets/certificate4.jpg";
import Carousel from 'better-react-carousel';


import logo from "../../assets/logo.png"

import { useEffect, useState } from "react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
 
];

const ProductCard = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     const fetchData = async () => {
        try {
           const response = await fetch('http://localhost:5000/certificates');
           const data = await response.json();
           setPosts(data);
        } catch (err) {
           console.log(err.message);
        }
     };

     fetchData();
  }, []);
  console.log(posts);
 

  
  return (



    <div id="certificates">
    
  {/* <img className="logo" src={logo} alt="logo" />
  <p> 
  Certificates:
</p>
{posts.map(item => (
  {item.id}
))} */}

  </div>)

    };
export default ProductCard;
import React, { Fragment } from "react";
import "./certificates.css";
import certificate1 from "../../assets/certificate1.jpg";
import certificate2 from "../../assets/certificate2.jpg";
import certificate3 from "../../assets/certificate3.jpg";
import certificate4 from "../../assets/certificate4.jpg";
import logo from "../../assets/logo.png"
import Carousel from "react-elastic-carousel";
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
    <div id="certificates">
      <Fragment>
       <div className="certificates-header">
          {" "}
        
            <img className="logo" src={logo} alt="logo" />
          <p> 
          Certificates:
        </p>
        </div>
        <section>
          <div className="row">
            <Carousel breakPoints={breakPoints}>
              {/*cer 1*/}
              

              <div className="product">
                <div className="product-thumb">
                  <a href="#">
                    <img className="image" src={certificate1} alt="certificate"/>
                  </a>
                </div>
              </div>

              {/*cer 2*/}

              <div className="product">
                <div className="product-thumb">
                  <a href="#">
                    <img
                      className="image"
                      src={certificate2}
                      alt="certificate"
                    />
                  </a>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="#">
                    <img
                      className="image"
                      src={certificate3}
                      alt="certificate"
                    />
                  </a>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="#">
                    <img
                      className="image"
                      src={certificate4}
                      alt="certificate"
                    />
                  </a>
                </div>
              </div>
            </Carousel>
          </div>
        </section>
      </Fragment>
    </div>
  );
};

export default ProductCard;
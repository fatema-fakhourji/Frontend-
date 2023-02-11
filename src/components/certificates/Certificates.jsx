import React, { Fragment } from "react";
import "./certificates.css";
import certificate1 from "../certificates/images/certificate1.jpg";
import certificate2 from "../certificates/images/certificate2.jpg";
import certificate3 from "../certificates/images/certificate3.jpg";
import certificate4 from "../certificates/images/certificate4.jpg";
import logo from "../certificates/images/logo.png"

const ProductCard = () => {
  return (
    <div id="certificates">
      <Fragment>
        <h1>
          {" "}
          <a href="#">
            <img className="logo" src={logo} alt="logo" />
          </a>
          Certificates:
        </h1>
        <section>
          <div className="row">
           
              {/*cer 1*/}

              <div className="product">
                <div className="product-thumb">
                  <a href="#">
                    <img
                      className="image"
                      src={certificate1}
                      alt="certificate"
                    />
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
           
          </div>
        </section>
      </Fragment>
    </div>
  );
};

export default ProductCard;

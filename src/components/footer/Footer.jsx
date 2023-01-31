import React from "react";
import icon from "../contact/contact-images/logo.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer1">
      <div class="line"></div>
      <div className="footer">
        <img src={icon}></img>
        <p>Anass Haidar </p>

        <p className="footer2">&#169; 2023</p>
      </div>
    </div>
  );
};

export default Footer;

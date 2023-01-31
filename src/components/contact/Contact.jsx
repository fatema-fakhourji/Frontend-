import React from "react";
import icon from "./contact-images/logo.png";

import { ReactSocialMediaIcons } from "react-social-media-icons";

import "./contact.css";

const Contact = () => {
  return (
    <div className="height">
      <div className="contact">
        <img src={icon}></img>
        <p>Contact: </p>
      </div>

      <div className="contacts">
        <div>
          <ReactSocialMediaIcons
            roundness="40"
            borderColor="rgba(0,0,0, 0.25)"
            icon="phone"
            iconColor="black"
            backgroundColor="white"
            url=""
            size="48"
          />
          <p>+961 71 942 307</p>
        </div>
        <div>
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0.25)"
            icon="linkedin"
            iconColor="black"
            backgroundColor="white"
            url="www.linkedin.com/in/anass-haydar/"
            size="48"
          />
          <p>linkedin.com/in/anass-haydar/</p>
        </div>
        <div>
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0.25)"
            icon="mail"
            iconColor="black"
            backgroundColor="white"
            url=""
            size="48"
          />
          <p>anasshaydar5@gmail.com</p>
        </div>
        <div>
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0.25)"
            icon="github"
            iconColor="black"
            backgroundColor="white"
            url="www.github.com/anasshay"
            size="48"
          />
          <p>github.com/anasshay</p>
        </div>
      </div>

      {/* 
      <div className="contacts">
       <a href=""><img src={github} alt="" />gitub</a> 
       <a href=""> <img src={facebook} alt="" />facebook</a> 
       <a href=""> <img src={linkedin} alt="" />linkedin</a> 
       <a href=""> <img src={instagram} alt="" />instagram</a> 
      </div> */}
      <div className="button"  id="contact">
        <a href="https://www.canva.com/design/DAE7IXEC8z0/LZehmNlUVpUr_DuGxkGD0Q/view?utm_content=DAE7IXEC8z0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
          <button> Download my cv </button>
        </a>
      </div>

      {/* <div class="line"></div> */}
    </div>
  );
};

export default Contact;

import React from "react";
import icon from "../certificates/images/logo.png";

import { ReactSocialMediaIcons } from "react-social-media-icons";

import "./contact.css";

const Contact = () => {
  return (
    <div className="height" id="contact">
      <div className="contact">
        <img src={icon}></img>
        <p>Contact: </p>
      </div>
      <div className="back-contacts">
        <div className="contacts">
          <div>
            <ReactSocialMediaIcons
              roundness="40"
              borderColor="rgba(0,0,0, 0.25)"
              icon="phone"
              iconColor="black"
              backgroundColor="white"
              url="tel:+961-719-423-07"
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
              url="https://www.linkedin.com/in/anass-haydar/"
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
              url="mailto:anasshaydar5@gmail.com"
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
              url="https://www.github.com/anasshay"
              size="48"
            />
            <p>github.com/anasshay</p>
          </div>
        </div>
        <div className="button" id="contact">
          <div className="edit-save">
            <button className="changes">Edit</button>
            <button className="changes">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

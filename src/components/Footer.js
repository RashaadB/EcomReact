import React from "react";
import Rsb from "../img/rsb.jpg"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedin,faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      {/* <!-- footer --> */}

      <footer id="main-footer">
        <a href="https://www.instagram.com/birdshavebeaks/" target="_blank" style={{fontSize:35}}>
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/rashaad-bracley-44588a212/"
          target="_blank" style={{fontSize:35, padding: 10}}>
        
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <p>copyright &copy;2021: Rashaad's e-commerce</p>
        <img class="rsb_img" src={Rsb} alt="logo" />
      </footer>
    </>
  );
};

export default Footer;

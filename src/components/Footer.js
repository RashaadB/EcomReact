import React from "react";

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedin,faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      {/* <!-- footer --> */}

      <footer style={{color:"#fd6621"}} id="main-footer">
        <a href="https://www.instagram.com/birdshavebeaks/" target="_blank" style={{fontSize:35}}>
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/rashaad-bracley-44588a212/"
          target="_blank" style={{fontSize:35, padding: 10}}>
        
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <p style={{fontSize:25}}>Rashaad Ecommerce: Copyright &copy;2022</p>
        <img class="rsb_img"  src="../img/rsb.jpg" alt="logo" />
      </footer>
    </>
  );
};

export default Footer;

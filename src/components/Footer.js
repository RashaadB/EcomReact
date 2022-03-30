import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      {/* <!-- footer --> */}

      <footer id="main-footer">
        <a
          href="https://www.instagram.com/birdshavebeaks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/rashaad-bracley-44588a212/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <p>Rashaad Ecommerce: Copyright &copy;2022</p>
        <img className="rsb_img" src="../img/rsb.jpg" alt="logo" />
      </footer>
    </>
  );
};

export default Footer;

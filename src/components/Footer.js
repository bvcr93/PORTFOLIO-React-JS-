import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/cullenssister/">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/darel.bvcr.3/">
          <FacebookIcon />
        </a>
        <TwitterIcon />
        <a href="https://www.linkedin.com/in/darel-bvcr-17086621b/">
          <LinkedInIcon />
        </a>
      </div>
      <div className="bottom-container">
        <p> &copy; 2020 darelbvcr.com</p>
        <h3> Email: darelbavcar1@gmail.com</h3>
      </div>
    </div>
  );
};

export default Footer;

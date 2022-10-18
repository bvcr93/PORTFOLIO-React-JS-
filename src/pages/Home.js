import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Darel</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
         <a href="https://github.com/bvcr93">
          <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/darel-bvcr-17086621b/">
          <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, MaterialUI, StyledComponents</span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;

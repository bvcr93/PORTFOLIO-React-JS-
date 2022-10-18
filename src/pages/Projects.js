import React from "react";
import ProjectItem from "../components/ProjectItem";
import Portfolio from "../assets/port.png";
import Pizza from "../assets/pizza.jpg";
import Airbnb from "../assets/airbnb.jpg";
import Tesla from "../assets/tesla.jpg";
import { projectList } from "../helpers/ProjectList";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="naslov">My personal projects</h1>
      <div className="projectList">
        {projectList.map((project, index) => {
          return <ProjectItem id = {index} name={project.name} image={project.image} skill = {project.skill} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

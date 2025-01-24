import React from "react";
import "./Projects.css";
import personImg from "./assets/Images/person.png";
import aniadvImg from "./assets/Images/ani-adv-game.png";
import pixabayImg from "./assets/Images/pixabay.png";
import weatherAppImg from "./assets/Images/weatherapp.png";
import webshopImg from "./assets/Images/webshop.png";
import cvImg from "./assets/Images/cv.png";
import defaultImg from "./assets/Images/defaultImg.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Kids Game",
      description: "A game I built for my daughter",
      image: aniadvImg,
      link: "https://github.com/McFlink/AnimalAdventure",
      technologies: ["React", "ASP.NET", "MSSQL"],
    },
    {
      title: "Weather App",
      description: "Uing OpenWeather API.",
      image: weatherAppImg,
      link: "https://mcflink.github.io/Weather-forecast/",
      technologies: ["Vue.js", "CSS", "JS"],
    },
    {
      title: "Pixabay Search NGIN",
      description: "(school project).",
      image: pixabayImg,
      link: "https://mcflink.github.io/pixabay-frontend/",
      technologies: ["ASP.NET", "EF CORE", "MSSQL"],
    },
    {
      title: "Fishing Baits Webshop",
      description: "(school project).",
      image: webshopImg,
      link: "https://github.com/McFlink/Fishing-Baits-Webshop",
      technologies: ["Razor Pages", "MSSQL", "BS"],
    },
    {
      title: "Polarmotor.se",
      description: "Motorcycle shop.",
      image: defaultImg,
      link: "#",
      technologies: ["React", "Firebase", "BS/CSS"],
    },
    {
      title: "CV",
      description: "My CV.",
      image: cvImg,
      link: "https://mcflink.github.io/CV/",
      technologies: ["HTML", "CSS", "CSS Grid"],
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-body">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;

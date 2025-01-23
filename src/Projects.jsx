import React from "react";
import "./Projects.css";
import personImg from "./assets/Images/person.png";
import aniadvImg from "./assets/Images/ani-adv-game.png";
import pixabayImg from "./assets/Images/pixabay.png";
import weatherAppImg from "./assets/Images/weatherapp.png";
import webshopImg from "./assets/Images/webshop.png";
import cvImg from "./assets/Images/cv.png";

const Projects = () => {
  const projects = [
    {
      title: "Kids Game",
      description: "A game I built for my daughter, 6yo.",
      image: aniadvImg,
      link: "https://github.com/McFlink/AnimalAdventure",
      technologies: ["React", "ASP.NET", "SQL Server"],
    },
    {
      title: "Weather App",
      description: "Weather App using OpenWeather API.",
      image: weatherAppImg,
      link: "https://mcflink.github.io/Weather-forecast/",
      technologies: ["Vue.js", "CSS", "JavaScript"],
    },
    {
      title: "Pixabay Search Engine",
      description: "(school project).",
      image: pixabayImg,
      link: "https://mcflink.github.io/pixabay-frontend/",
      technologies: ["ASP.NET", "EF CORE", "SQL Server"],
    },
    {
      title: "Fishing Baits Webshop",
      description: "(school project).",
      image: webshopImg,
      link: "https://github.com/McFlink/Fishing-Baits-Webshop",
      technologies: ["Razor Pages", "Sql Server", "Bootstrap/CSS"],
    },
    {
      title: "Polarmotor.se",
      description: "Motorcycle shop.",
      image: "project4.jpg",
      link: "#",
      technologies: ["React", "Firebase", "Bootstrap CSS"],
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
              <h3>{project.title}</h3>
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

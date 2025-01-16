import React from "react";
import "./Projects.css";
import personImg from "./assets/Images/person.png";
import aniadvImg from "./assets/Images/ani-adv-game.png";

const Projects = () => {
  const projects = [
    {
      title: "Kids Game",
      description: "A game I built for my daughter, 6yo.",
      image: aniadvImg,
      link: "#",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Weather App",
      description: "Another awesome project.",
      image: personImg,
      link: "#",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Project 3",
      description: "(school project).",
      image: "project3.jpg",
      link: "#",
      technologies: ["ASP.NET", "EF CORE", "SQL Server"],
    },
    {
      title: "Webshop",
      description: "(school project).",
      image: "project4.jpg",
      link: "#",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Polarmotor.se",
      description: "Motorcycle shop.",
      image: "project4.jpg",
      link: "#",
      technologies: ["React", "Firebase", "Bootstrap CSS"],
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

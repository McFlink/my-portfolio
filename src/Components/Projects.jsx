import { useState } from "react";
import "./Projects.css";
import aniadvImg from "../assets/images/ani-adv-game.png";
import pixabayImg from "../assets/images/pixabay.png";
import weatherAppImg from "../assets/images/weatherapp.png";
import webshopImg from "../assets/images/webshop.png";
import cvImg from "../assets/images/cv.png";
import defaultImg from "../assets/images/defaultImg.jpg";
import timeReport from "../assets/images/Time-Report.png";
import binarImg from "../assets/images/binar_pres.jpg";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Pick-To-Light",
      description:
        "A Pick-To-Light system I upgraded at Binar Solutions AB in Trollhättan, Sweden. Using Pick-To-Light technology, I built a system using light modules to streamline the Binar production department’s order management and assembly workflow. I also upgraded their UI/UX and added QR code scanning function to connect modules to orders. Built with .NET Framework 4.6 and React. TCP/IP communication with hardware controller.",
      image: binarImg,
      link: "#",
      technologies: ["EF6", "ASP.NET", "React"],
    },
    {
      title: "Webshop",
      description:
        "Fishing Baits Webshop built with Razor Pages and SQL Server, a fun school project I built together with a classmate.",
      image: webshopImg,
      link: "https://github.com/McFlink/Fishing-Baits-Webshop",
      technologies: ["Razor", "MSSQL", "BS"],
    },
    {
      title: "Polarmotor.se",
      description:
        "Motorcycle Workshop webpage I am building for one of the best Harley Davidson experts in Sweden, built with React and Firebase. Here you can find objects for sale, to buy, gallery and contact info if you want something made or repaired. Workshop located in Stockholm. (webpage under construction, dead link).",
      image: defaultImg,
      link: "#",
      technologies: ["React", "FB", "BS/CSS"],
    },
    {
      title: "Time Report",
      description:
        "Web based time report for employees used by several construction workers and their companies. Enter your work hours, minutes and breaks, it calculates total work time for the choosen week. Download as PDF to your device and mail it to your boss! Free to use (currently...)",
      image: timeReport,
      link: "https://mcflink.github.io/Time-report/",
      technologies: ["Javascript", "HTML", "CSS"],
    },
    {
      title: "Weather App",
      description:
        "Weather app using OpenWeather API. A school project I built with a friend, our first Vue.js project. Currently only showing current weather data, API key is needed for forecast (have it, but you know, other stuff first...).",
      image: weatherAppImg,
      link: "https://mcflink.github.io/Weather-forecast/",
      technologies: ["Vue.js", "CSS", "JS"],
    },
    {
      title: "Search NGIN",
      description:
        "An image search engine using Pixabay API. Search whatever image, set the a color theme and press Search! Built with a friend.",
      image: pixabayImg,
      link: "https://mcflink.github.io/pixabay-frontend/",
      technologies: ["ASP.NET", "EF CORE", "SQL"],
    },

    {
      title: "Kids Game",
      description:
        "A web app game I am creating for my daughter. Let the kids test their animal skills and knowledge! (under construction, link to my github repository)",
      image: aniadvImg,
      link: "https://github.com/McFlink/AnimalAdventure",
      technologies: ["React", "ASP.NET", "MSSQL"],
    },
    {
      title: "CV",
      description: "My CV. (CV not yet finished, currently no url)",
      image: cvImg,
      link: "#",
      technologies: ["HTML", "CSS", "CSS Grid"],
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <div className="projects-container">
      <div className="projects">
        <h4>Projects</h4>
        <div className="project-div">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="project-description">
                <p>{project.description}</p>
              </div>
              <div className="project-card">
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
            </div>
          ))}
          {projects.length > 5 && (
            <div className="see-more-container">
              <button
                className="see-more-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show less" : "See more projects"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

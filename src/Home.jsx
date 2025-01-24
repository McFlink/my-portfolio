import React from "react";
import "./Home.css";
import personImg from "./assets/Images/person.png";
import profilePic from "./assets/Images/prof-pic-nobg.png";
import binarImg from "./assets/Images/binar_pres.jpg";
import Projects from "./Projects.jsx";
import { GrLinkedin, GrGithub, GrYoutube, GrContact } from "react-icons/gr";

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar-row">
        <a
          href="https://github.com/McFlink"
          target="_blank"
          rel="noopener noreferrer"
          title="My github profile"
          alt="Github profile"
        >
          <GrGithub size="2.5rem" />
        </a>
        <a
          href="https://linkedin.com/in/mikael-flink-7aa881287"
          target="_blank"
          rel="noopener noreferrer"
          title="My LinkedIn profile"
          alt="LinkedIn profile"
        >
          <GrLinkedin size="2.5rem" />
        </a>
        <a
          href="https://www.youtube.com/@FlinkFishing"
          target="_blank"
          rel="noopener noreferrer"
          title="My youtube channel"
          alt="Youtube channel"
          style={{ marginRight: "1.8rem" }}
        >
          <GrYoutube size="2.5rem" />
        </a>
        <div>
          <GrContact size="2.3rem" title="Contact me" cursor={"pointer"} />
        </div>
      </div>
      <div className="content-row">
        <div className="left-box">
          <div className="about">
            <h4>About me</h4>
            <p>
              What does best describe me? Well, I LOVE coding, probably an
              unhealthy amount of it. Why? There's always something new to
              learn, and that suits my personality, and I'm not sorry I figured
              that out after 17 years in construction, I'm just glad I did. The
              reason I'm actually pretty good at it already is probably because
              the love I feel about it.
            </p>
            <p>
              Well, enough with the boring stuff. I also love fishing, making
              youtube content about fishing, my kids, my fiance, and coding. I
              keep coming back to coding...
            </p>
            <p>I love coding.</p>
            <p>Check out a selection of my projects to the right.</p>
            <p>
              <span>
                <strong>Education:</strong> .NET Developer EXAM - 2025,
                including
              </span>
            </p>
            <ul>
              <li>C#</li>
              <li>Javascript</li>
              <li>ASP.NET</li>
              <li>Vue.js</li>
              <li>Entity Framework</li>
              <li>Blazor</li>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>Microservice archtecture</li>
              <li>Cloud</li>
              <li>Node.js</li>
              <li>MSSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <span className="profile-pic-borderbox"></span>
          <img className="profile-pic" src={profilePic} alt="image" />
        </div>
        <div className="right-box">
          <div className="projects">
            <h3 className="fullstack-title">Fullstack</h3>
          </div>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;

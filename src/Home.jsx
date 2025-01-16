import React from "react";
import "./Home.css";
import personImg from "./assets/Images/person.png";
import Projects from "./Projects.jsx";

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar-row">
        <a href="https://github.com/McFlink" target="_blank">
          Github
        </a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">Portfolio</a>
      </div>
      <div className="content-row">
        <div className="left-box">
          <img className="profile-pic" src={personImg} alt="image" />
        </div>
        <div className="right-box">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Home.css";
import personImg from "./assets/Images/person.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar-row">
        <a href="#">Github</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">Portfolio</a>
      </div>
      <div className="content-row">
        <div className="left-box">
          <img className="profile-pic" src={personImg} alt="image" />
        </div>
        <div className="right-box">Projects</div>
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import "./Profile.css";
import TechStack from "./TechStack";
import profilePic from "../assets/images/me.jpg";

const Profile = () => {
  const [doneTyping, setDoneTyping] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 400);
    };

    // Sätt ett "stopp" på scroll-event när man scrollar upp så att bilden "åker in" på sin rätta position och sen fortsätter scrollen upp automatiskt.

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDoneTyping(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="profile-container">
      <a
        href="/CV%202025.pdf"
        download="Mikael_Flink_CV.pdf"
        className="download-cv-btn"
      >
        Download Resume
      </a>

      <p className="hello-world">
        Hello world! I'm <span className="name">Mikael C. Flink</span>
      </p>
      <p className={`fullstack-text typing-text ${doneTyping ? "done" : ""}`}>
        Fullstack developer
      </p>
      <div>
        <img
          src={profilePic}
          className={`profile-pic ${scrolled ? "scrolled" : ""}`}
          alt="Profile picture"
        />
      </div>
      {/* <p className="typing-text">var statement = "Fullstack developer";</p> */}
      <div className="about-me">
        <h4>About me</h4>
        <p>
          Hi! I'm a passionate (for real, not just saying that) backend
          developer with a serious love for code. I recently made a bold move -
          leaving a stable job to pursue what truly excites me: software
          development. Since starting my .NET education, I’ve been all-in. Even
          after a full day of coding during my internship, I often find myself
          continuing into the evening, chasing ideas that won’t leave me alone.
        </p>
        <p>
          I’m the kind of person who thrives on solving problems, asking a
          million follow-up questions, and digging into code until that magical
          "it works!" moment. Backend development has totally hooked me - it’s
          fun in a way that almost feels ridiculous. I believe that with enough
          curiosity and dedication (and I’ve got a lot of both), I’ll become a
          great developer.
        </p>
        <p>
          Outside of code (yeah, there’s <em>some</em> time), I run a relativly
          big fishing YouTube channel, love editing videos, follow Formula 1,
          football, go for runs, and hit the gym. I’m social and love hanging
          out with people - but I also really enjoy time alone with my guitar,
          xbox, thoughts (and side projects).
        </p>
        <p>
          Oh, and one more thing... I'm a dad. Definitely my most important
          project. And therefore legally allowed to make bad puns.
        </p>
      </div>
      <div className="tech-stack-container">
        <h4>Tech stack</h4>
        <TechStack />
      </div>
    </div>
  );
};

export default Profile;

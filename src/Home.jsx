import { useEffect, useState } from "react";
import "./Home.css";
import ContactNavbar from "./Components/ContactNavbar.jsx";
import Profile from "./Components/Profile.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";
import TopScrollButton from "./Components/TopScrollButton.jsx";
import ContactMe from "./Components/ContactMe.jsx";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setIsLoaded(true);
      }
    }, 50); // 0.05s / step – total av 1s
  }, []);

  if (!isLoaded) {
    return (
      <div className="loader-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="loading-text">Loading FlinkDev.se...</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="content-container">
        <ContactNavbar />
        <Profile />
        <Projects />
        <ContactMe />
        <Footer />
        <TopScrollButton />
      </div>
    </div>
  );
};

export default Home;

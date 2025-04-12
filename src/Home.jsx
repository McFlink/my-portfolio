import "./Home.css";
import ContactNavbar from "./Components/ContactNavbar.jsx";
import Profile from "./Components/Profile.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";
import TopScrollButton from "./Components/TopScrollButton.jsx";
import ContactMe from "./Components/ContactMe.jsx";

const Home = () => {
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

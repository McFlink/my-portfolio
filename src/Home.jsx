import { useState, useEffect } from "react";
import "./Home.css";
import ContactNavbar from "./Components/ContactNavbar.jsx";
import Profile from "./Components/Profile.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";
import TopScrollButton from "./Components/TopScrollButton.jsx";
import ContactModal from "./Components/ContactModal.jsx";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", modalOpen);
  }, [modalOpen]);

  return (
    <div className="home-container">
      <div className="content-container">
        <ContactNavbar setModalOpen={setModalOpen} />
        <Profile />
        <Projects />
        <Footer />
        <TopScrollButton />
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;

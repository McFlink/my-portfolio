import { useEffect, useState } from "react";
import { GrLinkedin, GrGithub, GrYoutube, GrContact } from "react-icons/gr";
import "./ContactNavbar.css";

const ContactNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar-row ${scrolled ? "scrolled" : ""}`}>
      <a
        href="https://github.com/McFlink"
        target="_blank"
        rel="noopener noreferrer"
        title="My github profile"
        alt="Github profile"
        className="github-icon"
      >
        <GrGithub size="4rem" />
      </a>
      <a
        href="https://linkedin.com/in/mikael-flink-7aa881287"
        target="_blank"
        rel="noopener noreferrer"
        title="My LinkedIn profile"
        alt="LinkedIn profile"
      >
        <GrLinkedin size="4rem" />
      </a>
      <a
        href="https://www.youtube.com/@FlinkFishing"
        target="_blank"
        rel="noopener noreferrer"
        title="My youtube channel"
        alt="Youtube channel"
      >
        <GrYoutube size="4.5rem" />
      </a>
      <div
        className="contact-icon"
        title="Contact me"
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
        style={{ marginRight: "1.8rem", cursor: "pointer" }}
      >
        <GrContact size="4rem" />
      </div>
    </div>
  );
};

export default ContactNavbar;

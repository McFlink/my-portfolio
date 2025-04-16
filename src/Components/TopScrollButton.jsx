import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // eller annan ikon du gillar
import "./TopScrollButton.css";

const TopScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 1300);
    }
  };

  return (
    isVisible && (
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default TopScrollButton;

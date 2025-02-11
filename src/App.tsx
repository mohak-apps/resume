/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import { Contact, Navbar, Tech } from "./components";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import HorizontalScrollCarousel from "./components/HorizontalScrollCarousel";
import SkillsBlock from "./components/SkillsBlock";
import Eye from "./components/Eyes";
import ExperienceAtAGlance from "./components/ExperienceAtAGlance";
import { experiences } from "./constants";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const [clicked, setClicked] = useState(false);
  const [position] = useState({ x: "50%", y: "50%" });

  const handleClick = () => {
    setClicked(true);
    // setTimeout(() => setClicked(false), 1500);
  };

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // If scrolled more than 20px, apply bg-primary
      if (window.scrollY >= 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div ref={container} className="relative z-0 bg-primary">
        <Navbar isScrolled={isScrolled} />
        <div className="relative h-screen">
          <Tech scrollYProgress={scrollYProgress || 0} />
        </div>
        {/* <Experience scrollYProgress={scrollYProgress || 0} /> */}
        {/* <div className="relative">
          <HorizontalScrollCarousel />
        </div> */}
        <div className="relative h-screen">
          <ExperienceAtAGlance />
        </div>
        {/* <div>
          <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
            
            <button
              className="px-6 py-3 bg-white text-black rounded-lg shadow-lg z-10"
              onClick={handleClick}
            >
              Click Me
            </button>
          </div>
        </div> */}
        <SkillsBlock />
        <div className="relative h-screen z-0">
          <Contact scrollYProgress={scrollYProgress || 0} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

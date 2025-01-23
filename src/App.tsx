/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Navbar, Tech } from "./components";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

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
      <div ref={container} className="relative z-0 bg-primary ">
        <Navbar isScrolled={isScrolled} />
        <div className="relative h-screen">
          <Tech scrollYProgress={scrollYProgress || 0} />
        </div>
        <div className="relative h-screen">
          <Experience scrollYProgress={scrollYProgress || 0} />
          <div className="noise"></div>
        </div>
        <div className="relative h-screen z-0">
          <Contact scrollYProgress={scrollYProgress || 0} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

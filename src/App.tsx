/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Feedbacks, Navbar, Tech } from "./components";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Stars from "./components/canvas/Stars";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const container = useRef({});
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
      <div ref={container} className="relative z-0 bg-primary h-[200vh] ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar isScrolled={isScrolled} />
        </div>
        {/*<About /> */}
        {/* <Works /> */}
        <div className="z-0 sticky top-0 h-screen">
          <div className="noise"></div>
          <Tech scrollYProgress={scrollYProgress || 0} />
        </div>
        <div className="z-50 bg-primary relative">
          <Experience scrollYProgress={scrollYProgress || 0} />
        </div>
        <Feedbacks scrollYProgress={undefined} />
        <div className="relative z-0">
          <Contact scrollYProgress={undefined} />
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

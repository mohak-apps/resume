import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../hoc/index";

const Footer = () => {
  const alertFlagRef = useRef(false); // Create ref for the alert flag
  const [style, setStyle] = useState({});

  useEffect(() => {
    // Function to check if page has reached the bottom
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.documentElement.scrollHeight;
      if (scrollPosition >= bottomPosition && !alertFlagRef.current) {
        alertFlagRef.current = true; // Set the flag to true after the alert
        setTimeout(() => {
          setStyle({ maxWidth: "100%" });
        }, 500);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id={"contact"} className="relative px-[18vw] mt-20">
      <div className=" flex flex-wrap items-center justify-center">
        <svg viewBox="0 0 853 10" className="h-5 w-full block">
          <line x1="0" y1="1" x2="853" y2="1" stroke="white" strokeWidth="1" />
        </svg>
        <div className="flex justify-around w-full items-center mb-1">
          <div>mohak londhe</div> <span className="dot" />
          <div>+1 (306) 990-2623</div> <span className="dot" />
          <div>mohak.londhe@gmail.com</div> <span className="dot" />
          {/* <div>Saskatchewan, Canada</div> <span className="dot" /> */}
          <div className="underline cursor-pointer">LinkedIn</div>
        </div>
        <svg
          style={style}
          viewBox="0 0 853 20"
          className="h-10 w-full block overflow-hidden max-w-1 transition-all duration-500 ease-out origin-center "
        >
          <line x1="0" y1="2" x2="853" y2="2" stroke="white" strokeWidth="1" />
          <g className="animate-loop-scroll">
            <line
              x1="0"
              y1="9"
              x2="853"
              y2="9"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="2.7"
            />
            <line
              x1="853"
              y1="9"
              x2="1706"
              y2="9"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="2.7"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Footer;

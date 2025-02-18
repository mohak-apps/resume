import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [styleHeight, setStyleHeight] = useState(200);
  const [stylePosition, setStylePosition] = useState("inherit");
  const [styleAlign, setStyleAlign] = useState("flex-start");
  const contactRef = useRef(null);

  const handleScroll = () => {
    if (!contactRef.current) return;

    const minHeight = 200;
    const contactTop =
      contactRef.current.offsetTop - window.innerHeight + minHeight; // Get top position of #contact and the animation should start after i cross initial 200px

    const contactBottom =
      contactRef.current.offsetTop +
      contactRef.current.offsetHeight -
      window.innerHeight;
    const scrollY = window.scrollY; // Get current scroll position
    const maxScroll = contactTop + window.innerHeight * 0.8; // 50vh target

    const maxHeight = window.innerHeight * 0.8; // 75vh
    // Calculate font-size dynamically (from 15px to 50px)

    if (scrollY >= contactTop && scrollY < contactBottom) {
      console.log(contactTop);

      let height =
        minHeight +
        (Math.min(scrollY - contactTop, maxScroll - contactTop) /
          (maxScroll - contactTop)) *
          (maxHeight - minHeight);

      setStyleHeight(height);
      setStylePosition("fixed");
      setStyleAlign("flex-end");
    } else if (scrollY <= contactTop) {
      setStyleAlign("flex-start");
      setStylePosition("inherit");
    } else {
      setStylePosition("inherit");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex w-full h-full justify-end flex-col relative  mt-[200px]  box-border"
      ref={contactRef}
    >
      <div
        className="flex h-[80vh] justify-start "
        style={{ alignItems: styleAlign }}
      >
        <div className="contactTitle w-full ">
          <div
            className="innerContactTitle w-full flex justify-end items-end self-end"
            style={{ height: styleHeight, position: stylePosition, bottom: 0 }}
          >
            <svg
              viewBox="0 0 820.72 312.26"
              preserveAspectRatio="none"
              height="312.26"
            >
              <path
                fill="white"
                className="cls-1"
                strokeWidth={20}
                d="M13.11,286.73C4.37,269.84,0,226.05,0,155.34S4.34,39.43,13.01,23.66,35.81,0,55.39,0s34.7,7.89,43.37,23.66,13.01,53.62,13.01,113.55h-51.85V47.51c0-1.97-1.32-2.96-3.94-2.96-2.76,0-4.14.99-4.14,2.96v215.96c0,2.7,1.31,4.04,3.94,4.04,2.76,0,4.14-1.38,4.14-4.14v-87.33h51.85c0,56.91-4.34,93.8-13.01,110.69-8.67,16.89-23.06,25.33-43.17,25.33s-33.74-8.44-42.48-25.33Z"
              ></path>

              <path
                fill="white"
                className="cls-1"
                d="M130.79,289.1c-8.21-15.31-12.32-59.63-12.32-132.97s4.11-117.69,12.32-133.06C139.01,7.69,153.37,0,173.87,0s35.06,7.72,43.27,23.16c8.21,15.44,12.32,59.77,12.32,132.97s-4.11,117.66-12.32,132.97c-8.21,15.31-22.64,22.97-43.27,22.97s-34.86-7.65-43.07-22.97ZM178.01,262.88V49.28c0-3.15-1.38-4.73-4.14-4.73s-3.94,1.58-3.94,4.73v213.59c0,3.09,1.31,4.63,3.94,4.63,2.76,0,4.14-1.54,4.14-4.63Z"
              ></path>
              <path
                fill="white"
                className="cls-1"
                d="M287.61,310.48h-51.65V0h97.38l9.46,263.76h4.73l-2.37-118.87c-.13-1.44-.2-3.06-.2-4.83V0h52.04v310.48h-98.76l-9.46-265.54h-4.93l3.55,116.51c.13,1.58.2,3.22.2,4.93v144.1Z"
              ></path>
              <path
                fill="white"
                className="cls-1"
                d="M476.07,310.48h-52.44V56.38h-20.7V0h93.83v56.38h-36.08v4.93h6.51c2.63,0,4.76.79,6.41,2.37,1.64,1.58,2.46,3.75,2.46,6.51v240.3Z"
              ></path>
              <path
                fill="white"
                className="cls-1"
                d="M505.83,0h83.19l15.97,310.48h-52.83l-1.38-71.76h-6.5l-1.38,71.76h-52.83L505.83,0ZM544.28,199.89h6.7l-1.38-141.54c0-1.84.03-3.91.1-6.21.06-2.3.1-4.37.1-6.21l.39-7.69h-4.93l.39,7.69c.13,1.97.23,4.11.3,6.41.06,2.3.1,4.37.1,6.21l-1.77,141.34Z"
              ></path>
              <path
                fill="white"
                className="cls-1"
                d="M620.47,286.73c-8.74-16.89-13.11-60.68-13.11-131.39s4.34-115.91,13.01-131.68S643.17,0,662.75,0s34.7,7.89,43.37,23.66,13.01,53.62,13.01,113.55h-51.85V47.51c0-1.97-1.31-2.96-3.94-2.96-2.76,0-4.14.99-4.14,2.96v215.96c0,2.7,1.31,4.04,3.94,4.04,2.76,0,4.14-1.38,4.14-4.14v-87.33h51.85c0,56.91-4.34,93.8-13.01,110.69-8.67,16.89-23.06,25.33-43.17,25.33s-33.74-8.44-42.48-25.33Z"
              ></path>
              <path
                fill="white"
                className="cls-1"
                d="M797,310.48h-52.44V56.38h-20.7V0h93.83v56.38h-36.08v4.93h6.51c2.63,0,4.76.79,6.41,2.37,1.64,1.58,2.46,3.75,2.46,6.51v240.3Z"
              ></path>
             
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

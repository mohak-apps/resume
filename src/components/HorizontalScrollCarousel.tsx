/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cardData = [
  {
    title: "54e Dev Studios",
    role: "Software Developer",
    duration: "Jun 2022 - Jun 2024",
  },
  {
    title: "Soho Square Solutions",
    role: "Front-End Developer",
    duration: "Jul 2024 - Present",
  },
  {
    title: "Infosys1",
    role: "Full-Stack Developer",
    duration: "May 2020 - May 2022",
  },
  {
    title: "Infosys2",
    role: "Full-Stack Developer",
    duration: "May 2020 - May 2022",
  },
  {
    title: "Infosys3",
    role: "Full-Stack Developer",
    duration: "May 2020 - May 2022",
  },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
 

  const [_, setFixedTop] = useState(0);

  const [positionIndexes, setPositionIndexes] = useState([1, 0, 4, 3, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex: any) =>
        prevIndex == 0 ? 4 : prevIndex - 1
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex: any) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const positions = ["left", "left1", "center", "right1", "right"];

  const imageVarients = {
    left1: { x: "-100%", scale: 0.7, zIndex: 2 },
    left: { x: "-200%", scale: 0.5, zIndex: 1 },
    center: { x: "0%", scale: 0.9, zIndex: 5 },
    right: { x: "200%", scale: 0.5, zIndex: 1 },
    right1: { x: "+100%", scale: 0.7, zIndex: 2 },
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollPosition < 2 * viewportHeight) {
    } else {
      setFixedTop(viewportHeight + 40);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <section
      ref={targetRef}
      className="relative h-[100vh] z-10 bg-primary flex flex-col "
    >
      <div className="w-full h-full flex justify-center items-center flex-col bg-primary">
        <motion.div className="h-[90vh] relative flex gap-4 card-container justify-center  ">
          {cardData.map((_, index) => {
            return (
              <motion.div
                key={index}
                className={"rounded-12"}
                animate={positions[positionIndexes[index]]} //4321 3214 2143 1234
                variants={imageVarients}
                transition={{ duration: 0.5 }}
                style={{
                  width: "200px",
                  height: "90vh",
                  position: "absolute",
                  border: "2px solid #6f8e99",
                }}
              >
                <div className="w-full h-full bg-[#6f8e99]/50 backdrop-blur-sm">
                  {index}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <div>
          <button
            className="text-white bg-[#6f8e99]/50 rounded-md py-2 px-4"
            onClick={handleBack}
          >
            Back
          </button>
          &nbsp;
          <button
            className="text-white bg-[#6f8e99]/50 rounded-md py-2 px-4"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;

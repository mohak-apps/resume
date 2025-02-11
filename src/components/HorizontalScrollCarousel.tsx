/* eslint-disable @typescript-eslint/no-explicit-any */
import { images } from "@/constants";
import { styles } from "@/styles";
import { motion, useTransform, useScroll } from "framer-motion";
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

const Card = ({ card, index }: { card: any; index: number }) => {
  return (
    <div key={index} className="group card">
      <div className="card-title">
        <div className="card-title-text">{card.title}</div>
      </div>
      <div className="card-details">
        <ul className="card-list">
          <li>{card.role}</li>
          <li>{card.duration}</li>
        </ul>
      </div>
    </div>
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);

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
      setIsSticky(true); // Sticky until 200vh
    } else {
      setIsSticky(false); // Remove stickiness after 200vh
      setFixedTop(viewportHeight + 40);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[100vh] z-10 bg-primary flex flex-col "
    >
      <div className="w-full h-full flex justify-center items-center flex-col bg-primary">
        <motion.div className="h-[90vh] relative flex gap-4 card-container justify-center  ">
          {cardData.map((card, index) => {
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

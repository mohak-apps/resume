import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { useRef, useEffect, useState } from "react";
import { experiences } from "@/constants";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const ExperienceAtAGlance = () => {
  const tiltRef = useRef(null);
  const [expCount, setExpCount] = useState(0);

  const handleNext = () => {
    setClicked(true);
    const count = expCount + 1;
    setExpCount(count === 5 ? 0 : count);
  };

  const handleBack = () => {
    setClicked(true);
    const count = expCount - 1;
    setExpCount(count === 5 ? 0 : count === -1 ? 4 : count);
  };

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15, // Maximum tilt angle (in degrees)
        speed: 4000, // Speed of the effect
        glare: true, // Adds a "glare" effect
        "max-glare": 1, // Maximum glare opacity
      });
    }

    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current?.vanillaTilt.destroy();
      }
    };
  }, []);

  const { company, designation, location, tenure, count } =
    experiences[expCount];

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        key={expCount}
        initial={{ scale: 0, backgroundColor: experiences[expCount].color }}
        animate={{
          backgroundColor: clicked ? experiences[expCount].color : "",
          scale: 10,
        }}
        transition={{ duration: 5 }}
        className="absolute almostOrange rounded-full w-full h-full -z-10 "
      />
      <div className="noise" />
      <div className="h-full flex flex-row justify-evenly items-center">
        <FaLessThan
          onClick={handleBack}
          className="cursor-pointer hover:drop-shadow-[0_0_10px_#fff]"
        />
        <div className="flex h-[65vh] w-[20vw] flex-col justify-evenly items-end">
          <div className="flex-col w-full h-[20vh] justify-evenly flex items-end text-4xl">
            <div className="font-BaseNeueTrialThin text-right">
              {designation}
            </div>
            <div className="font-BaseNeueTrialWideBlack text-right">
              {company}
            </div>
            <div className="font-BaseNeueTrialThin text-right">{location}</div>
          </div>
          <div className="flex flex-col h-[20vh] w-[20vw] justify-evenly items-end">
            <div className="font-BaseNeueTrialWideBlack">{tenure}</div>
          </div>
        </div>
        {/* Company Name - Location - Tech Stack */}
        <div className="w-[20vw] border-[1px] rounded-[100px] border-dotted border-t-2">
          <div className="border-[1px] rounded-[100px] h-[65vh] w-[full] m-2 p-14">
            <div
              ref={tiltRef}
              className="relative rounded-sm h-full w-full shadow-[20px_20px_50px_rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.1)] overflow-hidden 
            border-t border-l border-[rgba(255,255,255,0.5)] backdrop-blur-sm"
            >
              <div className="font-BaseNeueTrialWideBlack text-end pr-1 text-xl">
                {company}
              </div>
              <h2 className="absolute bottom-0 right-0 text-9xl text-[rgba(255,255,255,0.2)]">
                {count}
              </h2>
            </div>
          </div>
        </div>
        <FaGreaterThan
          onClick={handleNext}
          className="cursor-pointer hover:drop-shadow-[0_0_10px_#fff]"
        />

      </div>
    </div>
  );
};

export default ExperienceAtAGlance;

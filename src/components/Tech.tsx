/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionWrapper } from "../hoc/index";
import { Img } from "react-image";
import { motion } from "framer-motion";
import { images } from "@/constants";
import Typewriter from "typewriter-effect";

const Tech = () => {
  return (
    <div className="relative w-full h-full bg-primary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
        }}
        className="flex flex-row justify-center items-center mt-44 h-[50vh] mix-blend-lighten border-4"
      >
        <div className="relative h-full w-1/2">
          <Img src={images.selfimg} alt="alt" className="absolute  scale-150" />
        </div>
        <div className="h-1/2 w-1/4 flex justify-start">
          <Typewriter
            options={{
              strings: [
                "Hello, I'm Mohak Londhe!",
                "I am a developer.<br>Let's create something amazing.",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 0, // Disable deletion
            }}
          />
        </div>
      </motion.div>
      <div className="absolute w-32 h-32 bg-primary flex justify-center items-center transform bottom-1 right-1 text-2xl translate-x-1/2 translate-y-1/2 z-100">
        &bull;
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "tech");

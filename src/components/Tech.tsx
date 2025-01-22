import { BallCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc/index";
import { technologies } from "../constants";
import { motion, useTransform } from "framer-motion";

const Tech = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative flex z-0 bg-white/30 mx-full my-40 backdrop-blur-md border-4 border-white rounded-2xl h-[500px]"
    >
      {technologies.frontend.map((tech) => {
        return (
          <div className="w-28 h-28 flex" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        );
      })}
      {technologies.backend.map((tech) => {
        return (
          <div className="w-28 h-28 flex" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        );
      })}
      {technologies.database.map((tech) => {
        return (
          <div className="w-28 h-28 flex" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        );
      })}
      {technologies.cicd.map((tech) => {
        return (
          <div className="w-28 h-28 flex" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        );
      })}
      {technologies.versionControl.map((tech) => {
        return (
          <div className="w-28 h-28 flex" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        );
      })}
    </motion.div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "tech");

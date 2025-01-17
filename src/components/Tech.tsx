import { BallCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc/index";
import { technologies } from "../constants";
import { motion, useTransform } from "framer-motion";
import Gravity, { MatterBody } from "./fancy/gravity";

const Tech = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative z-0 bg-white/30 mx-full my-40 backdrop-blur-md border-4 border-white rounded-2xl h-[500px]"
    >
      <Gravity
        className="border-2 relative"
        gravity={{ x: 0, y: 1 }}
      >
        {technologies.frontend.map((tech) => {
          return (
            <MatterBody x="10%" y="50%" className="">
              <div className="w-28 h-28 flex" key={tech.name}>
                <BallCanvas icon={tech.icon} />
              </div>
            </MatterBody>
          );
        })}
        {technologies.backend.map((tech) => {
          return (
            <MatterBody x="30%" y="50%" className=" ">
              <div className="w-28 h-28 flex" key={tech.name}>
                <BallCanvas icon={tech.icon} />
              </div>
            </MatterBody>
          );
        })}
        {technologies.database.map((tech) => {
          return (
            <MatterBody x="50%" y="50%" className=" ">
              <div className="w-28 h-28 flex" key={tech.name}>
                <BallCanvas icon={tech.icon} />
              </div>
            </MatterBody>
          );
        })}
        {technologies.cicd.map((tech) => {
          return (
            <MatterBody x="70%" y="50%" className=" ">
              <div className="w-28 h-28 flex" key={tech.name}>
                <BallCanvas icon={tech.icon} />
              </div>
            </MatterBody>
          );
        })}
        {technologies.versionControl.map((tech) => {
          return (
            <MatterBody x="90%" y="50%" className=" ">
              <div className="w-28 h-28 flex" key={tech.name}>
                <BallCanvas icon={tech.icon} />
              </div>
            </MatterBody>
          );
        })}
      </Gravity>
    </motion.div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "tech");

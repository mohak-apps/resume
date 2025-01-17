import { BallCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc/index";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion, useTransform } from "framer-motion";

const Tech = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [1, -10]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="z-0 bg-white/30 mx-full my-40 backdrop-blur-md border-4 border-white rounded-2xl p-8 h-96 w-[296]"
    >
      <div className="flex flex-col h-full items-center">
        <p className={`${styles.sectionSubText} w-52`}></p>
        <div className="flex flex-row flex-wrap gap-10 w-full justify-evenly">
          {technologies.frontend.map((tech) => {
            return (
              <div className="w-28 h-28 flex" key={tech.name}>
                <div className="flex w-full h-full">
                  <BallCanvas icon={tech.icon} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col h-full items-center">
        <p className={`${styles.sectionSubText} w-52`}></p>
        <div className="flex flex-row flex-wrap gap-10 w-full justify-center">
          {technologies.backend.map((tech) => (
            <div className="w-28 h-28 flex" key={tech.name}>
              <div className="flex w-full h-full">
                <BallCanvas icon={tech.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full items-center">
        <p className={`${styles.sectionSubText} w-52 border-sky-200`}></p>
        <div className="flex flex-row flex-wrap gap-10 w-full justify-evenly">
          {technologies.database.map((tech) => (
            <div className="w-28 h-28 flex " key={tech.name}>
              <div className="flex  w-full h-full">
                <BallCanvas icon={tech.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full items-center">
        <p className={`${styles.sectionSubText} w-52 border-sky-200`}></p>
        <div className="flex flex-row flex-wrap gap-10 w-full justify-evenly">
          {technologies.versionControl.map((tech) => (
            <div className="w-28 h-28 flex  " key={tech.name}>
              <div className="flex  w-full h-full">
                <BallCanvas icon={tech.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full items-center ">
        <p className={`${styles.sectionSubText} w-52 border-sky-200`}></p>
        <div className="flex flex-row flex-wrap gap-10 w-full justify-evenly">
          {technologies.cicd.map((tech) => (
            <div className="w-28 h-28 flex " key={tech.name}>
              <div className="flex w-full h-full">
                <BallCanvas icon={tech.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "tech");

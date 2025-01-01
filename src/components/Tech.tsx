import { BallCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc/index";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
      <div className="flex border-2 flex-row h-full items-center">
        <p className={`${styles.sectionSubText} w-52 border-sky-200`}>
          Frontend:
        </p>
        <div className="flex flex-row flex-wrap  gap-10 w-full">
          {technologies.frontend.map((tech) => (
            <div
              className="w-28 h-28 flex justify-center items-center"
              key={tech.name}
            >
              <div className="flex justify-center items-center w-full h-full">
                <BallCanvas icon={tech.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row h-full items-center">
        <p className={`${styles.sectionSubText} w-52 border-sky-200`}>
          Backend:
        </p>
        <div className="flex flex-row flex-wrap gap-10 w-full">
          {technologies.backend.map((tech) => (
            <div
              className="w-28 h-28 flex justify-center items-center"
              key={tech.name}
            >
              <div className="flex justify-center items-center w-full h-full">
                <BallCanvas icon={tech.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row h-full items-center">
        <p className={`${styles.sectionSubText} w-52 border-sky-200`}>
          Database:
        </p>
        <div className="flex flex-row flex-wrap   gap-10 w-full">
          {technologies.database.map((tech) => (
            <div
              className="w-28 h-28 flex justify-center items-center"
              key={tech.name}
            >
              <div className="flex justify-center items-center w-full h-full">
                <BallCanvas icon={tech.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row h-full items-center">
        <p className={`${styles.sectionSubText} w-52 border-sky-200`}>
          Version Control:
        </p>
        <div className="flex flex-row flex-wrap gap-10 w-full">
          {technologies.versionControl.map((tech) => (
            <div
              className="w-28 h-28 flex justify-center items-center"
              key={tech.name}
            >
              <div className="flex justify-center items-center w-full h-full">
                <BallCanvas icon={tech.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row h-full items-center">
        <p className={`${styles.sectionSubText} w-52 border-sky-200`}>CI/CD</p>
        <div className="flex flex-row flex-wrap gap-10 w-full">
          {technologies.cicd.map((tech) => (
            <div
              className="w-28 h-28 flex justify-center items-center"
              key={tech.name}
            >
              <div className="flex justify-center items-center w-full h-full">
                <BallCanvas icon={tech.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

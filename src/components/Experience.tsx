import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import type { Experience } from "../types";

// const ExperienceCard = ({ experience }: { experience: Experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{ background: "#8c9491", color: "#fff" }}
//       contentArrowStyle={{ borderRight: "7px solid #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className="w-[60%] h-[60%] object-contain"
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
//         <p
//           className="text-secondary text-[16px] font-semibold"
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>
//       <ul className="mt-5 list-disc ml-5 space-y-2">
//         {experience.points.map((point, index) => {
//           return (
//             <li
//               key={index}
//               className="text-white-100 text-[14px] pl-1 tracking-wider"
//             >
//               {point}
//             </li>
//           );
//         })}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

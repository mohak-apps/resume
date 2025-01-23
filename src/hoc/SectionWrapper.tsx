/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (
  Component: React.ComponentType<{ scrollYProgress: any }>,
  idName: string
) =>
  function HOC({ scrollYProgress }: { scrollYProgress: any }) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component scrollYProgress={scrollYProgress} />
      </motion.section>
    );
  };

export default SectionWrapper;

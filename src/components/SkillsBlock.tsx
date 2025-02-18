import { motion } from "framer-motion";

const SkillsBlock = () => {
  return (
    <section className="relative h-[100vh]  flex justify-between flex-col bg-yellow-900">
      <motion.div className="relative z-0 bg-prdimary img min-h-screen bg-cover bg-fixed">
        <div className=""></div>
        <div className="flex-container">
          <div className="flex-[2] h-full flex-column">
            <div className="flex-1 rounded-lg flex flex-row gap-5 ">
              <div
                className={` flex  z-20 transition-all duration-1000 ease-in-out justify-center bg-box-style  h-full w-full bg-black/10`}
              >
                React
              </div>
              <div
                className={` flex  z-20 transition-all duration-1000 ease-in-out justify-center bg-box-style  h-full w-full bg-black/10 hover:hoverFamily`}
              >
                TypeScript
              </div>
            </div>
            <div className="flex-1 flex-column">
              <div
                className={` flex  z-20 transition-all duration-1000 ease-in-out justify-center bg-box-style  h-full w-full bg-black/10`}
              >
                Redux
              </div>
              <div
                className={` flex  z-20 transition-all duration-1000 ease-in-out justify-center bg-box-style  h-full w-full bg-black/10`}
              >
                Node.JS
              </div>
            </div>
          </div>
          <div className="flex-column">
            <div
              className={` flex  z-20 transition-all duration-1000 ease-in-out justify-center bg-box-style  h-full w-full bg-black/10`}
            >
              Vite
            </div>
            <div className="flex-1 rounded-lg flex flex-row gap-5">
              <div
                className={` flex  z-20 transition-all duration-1000 ease-in-out justify-center bg-box-style  h-full w-full bg-black/10`}
              >
                GraphQL
              </div>
              <div
                className={` flex  z-20 transition-all duration-1000 ease-in-out justify-center bg-box-style  h-full w-full bg-black/10`}
              >
                REST APIs
              </div>
            </div>
            <div
              className={` flex  z-20 transition-all duration-1000 ease-in-out justify-center bg-box-style  h-full w-full bg-black/10`}
            >
              WebSockets / Socket.IO
            </div>
            <div
              className={` flex  z-20 transition-all duration-1000 ease-in-out justify-center bg-box-style  h-full w-full bg-black/10`}
            >
              Tailwind CSS
            </div>
          </div>
          <div className="flex-column">
            <div
              className={` flex  z-20 transition-all duration-1000 ease-in-out justify-center bg-box-style  h-full w-full bg-black/10`}
            >
              MongoDB
            </div>
            <div
              className={` flex  z-20 transition-all duration-1000 ease-in-out justify-center bg-box-style  h-full w-full bg-black/10`}
            >
              CI/CD & DevOps
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsBlock;

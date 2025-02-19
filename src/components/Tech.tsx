/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionWrapper } from "../hoc/index";
import { Img } from "react-image";
import { images } from "@/constants";
import { reactjs, typescript, nodejs, mongodb } from "@/assets";
import { Button } from "./ui/button";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Tech = () => {
  return (
    <div className="flex flex-row justify-start items-center mt-14 h-[75vh] w-full mix-blend-lighten">
      <div className="h-full w-1/2 flex justify-center items-center flex-col bg-black/10 backdrop-blur-sm">
        <div className="flex flex-col h-full justify-center gap-24">
          <div>
            <span className="text-2xl">I'm, </span>
            <span className="font-RockSaltRegular text-2xl">Mohak Londhe</span>
            <br />
            <span className="text-2xl">
              I build software that works (most of the time :p)
            </span>
          </div>
          <div>
            <div className="text-2xl">Expertise in:</div>
            <div className="flex flex-row gap-2">
              <img
                title="React"
                src={reactjs}
                alt="react"
                style={{ height: 50, width: 50 }}
                className="cursor-pointer"
              />
              <img
                title="TypeScript"
                src={typescript}
                alt="ts"
                style={{ height: 50, width: 50 }}
                className="cursor-pointer"
              />
              <img
                title="NodeJS"
                src={nodejs}
                alt="node"
                style={{ height: 50, width: 50 }}
                className="cursor-pointer"
              />
              <img
                title="MongoDB"
                src={mongodb}
                alt="mongo"
                style={{ height: 50, width: 50 }}
                className="cursor-pointer"
              />
            </div>
            <br />
            <div>
              <Button className="glow-button">Download Resume</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-32 top-0 h-full w-1/4  justify-start items-start bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url('./assets/glass.jpg')] bg-cover bg-no-repeat">
        <div className="absolute bg-black/10 backdrop-blur-[1.5px] w-full h-full z-10"></div>
        <div className="absolute right-10 bottom-14 z-10">
          <a className="group glow-spin cursor-pointer" href="#footer">
            <div className="absolute rounded-full flex justify-center items-center z-20">
              <MdOutlineDoubleArrow
                fontSize={24}
                className="group-hover:rotate-90 transition-transform duration-500"
              />
            </div>
            <svg
              width="250"
              height="100"
              viewBox="0 0 250 250"
              className="relative animate-spin bg-transparent"
              style={{
                animation: "rotateAnimation 15s linear infinite",
              }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 125, 125 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                />
              </defs>
              <text
                fill="white"
                font-size="22"
                font-weight="bold"
                letter-spacing="12"
              >
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  text-anchor="middle"
                  color="#fff"
                >
                  Contact. Contact. Contact.
                </textPath>
              </text>
            </svg>
          </a>
        </div>
        <Img
          src={images.selfimg}
          alt="alt"
          className="absolute -left-10 bottom-44 bg-transparent"
        />
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "tech");

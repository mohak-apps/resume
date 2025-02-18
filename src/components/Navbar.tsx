/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { maple } from "../assets/index";

const Navbar = ({ isScrolled }: { isScrolled: unknown }) => {
  const [active, setActive] = useState("about");
  return (
    <nav
      className={`w-screen flex fixed top-0 z-20 transition-all duration-1000 ease-in-out justify-center  ${
        isScrolled ? "bg-black/10 backdrop-blur-sm py-1 " : "py-5 delay-1000"
      }`}
    >
      <div
        className={`absolute bottom-0 z-500 border-b-[1px] transition-width ease-in-out ${
          !isScrolled
            ? `w-[calc(46vw)] mx-auto left-5 delay-1000 duration-200 `
            : "left-0 w-[50vw] duration-1000"
        }`}
      />
      <div
        className={`absolute bottom-0 z-500 border-b-[1px] transition-width ease-in-out ${
          !isScrolled
            ? `w-[calc(45vw)] mx-auto right-10 delay-1000 duration-200 `
            : "right-0 w-[50vw] duration-1000"
        }`}
      />
      {!isScrolled ? (
        <img
          src={maple}
          alt="logo"
          className="absolute -bottom-5 w-14 h-14 object-contain ease-in-out transition-all duration-100 delay-1000 scale-100 z-40"
        />
      ) : (
        <img
          src={maple}
          alt="logo"
          className="absolute -bottom-5 w-14 h-14 object-contain ease-in-out transition-all duration-1000 scale-150 z-50  filter drop-shadow-[0_0_20px_#008cff]"
        />
      )}
      <div className="w-full items-center flex justify-between max-w-7xl mx-auto h-14 ">
        <Link
          to="/"
          className="flex gap-2 items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          mohak londhe
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-nomad" : "text-white"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title.toLowerCase()}</a>
            </li>
          ))}
        </ul>
        {/* <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt={"menu"}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex sm:flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary shadow-md" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-[#915EFF]"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} aria-label={`Navigate to ${nav.title}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="outline-none focus:outline-none"
            aria-label={toggle ? "Close menu" : "Open menu"}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
            />
          </button>

          {/* Mobile Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg transition-all duration-300`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } transition-colors duration-200`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} aria-label={`Navigate to ${nav.title}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

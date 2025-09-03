import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/aboutUS/Main_Logo.svg";
import { LuSquareMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Packages", path: "/packages" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contactUs" },
  ];

  return (
    <div className="flex absolute z-40 w-full bg-gradient-to-b from-black/90 to-transparent items-center py-4 text-white">
      <div className="lg:w-5/6 md:w-11/12 w-11/12 mx-auto flex items-center relative">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden left-0 flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 size={28} /> : <LuSquareMenu size={28} />}
        </button>

        {/* Logo */}
        <div className="flex justify-center md:justify-center w-full md:w-auto">
          <img src={logo} alt="Logo Image" className="h-20" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10 mx-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                `relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:origin-left after:transition-transform after:duration-300 
                ${isActive ? "after:w-1/2 after:scale-x-100" : "after:w-1/2 after:scale-x-0"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Call Button */}
        <a
          href="tel:+94711000700"
          className="hidden md:flex bg-secondary hover:bg-secondary/90 text-black font-lg font-semibold rounded-lg px-4 py-3.5 items-center"
        >
          <span>+94 71 1000 700</span>
        </a>

        {/* Mobile Call Button */}
        <a
          href="tel:+94711000700"
          className="md:hidden absolute right-0 flex items-center bg-secondary hover:bg-secondary/90 text-black font-semibold rounded-lg px-3 py-2 text-sm"
        >
          Call
        </a>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 flex flex-col gap-4 py-6 px-6 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end
                className={({ isActive }) =>
                  `block text-lg ${isActive ? "font-bold text-secondary" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

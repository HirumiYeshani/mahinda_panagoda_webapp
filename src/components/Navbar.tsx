import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/aboutUS/Main_Logo.svg";

const Navbar: React.FC = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Packages", path: "/packages" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contactUs" },
  ];

  return (
    <div className="flex absolute z-40 w-full bg-gradient-to-b from-black/90 to-transparent justify-between items-center py-4 text-white">
      <div className="lg:w-5/6 md:w-11/12 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20" />
        </div>

        {/* Nav Links */}
        <div className="md:flex gap-10">
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

        {/* Phone Button */}
        <a
          href="tel:+94711000700"
          className="bg-secondary text-black font-lg font-semibold rounded-lg px-4 py-3.5 flex items-center"
        >
          <span>+94 71 1000 700</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

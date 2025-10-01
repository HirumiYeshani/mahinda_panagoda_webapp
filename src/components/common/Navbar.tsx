import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/navbar/logo.svg";
import { X } from "lucide-react";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutUs" },
  { name: "Packages", path: "/packages" },
  { name: "Parlours", path: "/parlours" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contactUs" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-b from-black to-black/5 text-white px-4 md:px-14 lg:px-10 py-12 pt-3 flex items-center justify-between absolute top-0 left-0 z-80">
      {/* Logo */}
      <div className="flex items-center pt-2 lg:pt-0 lg:pl-10">
        <NavLink to="/">
          <img
            src={logo}
            alt="Mahinda Panagoda Logo"
            className="h-auto w-auto"
          />
        </NavLink>
      </div>
      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-10 font-semibold">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `relative inline-block pb-1 ${
                isActive
                  ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50%] after:border-2 after:h-[2px] after:bg-white"
                  : "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:border-2 hover:after:w-[50%] hover:after:h-[2px] hover:after:bg-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Buttons */}
      <div className="hidden lg:flex space-x-8 mr-12">
        <button
          onClick={() => (window.location.href = "tel:+94711000700")}
          className="px-4 py-3 bg-primary hover:bg-primary/70 text-black font-bold rounded-lg text-lg cursor-pointer"
        >
          +94 71 1000 700
        </button>

        <button className="px-7 py-2 border-2 border-white rounded-lg text-lg cursor-pointer">
          Login
        </button>
      </div>

      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-8 h-6"
        >
          <span className="block h-1 w-full bg-white rounded"></span>
          <span className="block h-1 w-full bg-white rounded"></span>
          <span className="block h-1 w-full bg-white rounded"></span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-[630px] bg-black/90 flex flex-col z-50">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button onClick={() => setIsOpen(false)}>
              <X size={28} className="text-white" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col items-start mt-4 lg:hidden w-full">
            {navLinks.map((link, ) => (
              <div key={link.name} className="w-full">
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative block w-fit text-white text-2xl py-4 px-6
          ${
            isActive
              ? "after:content-[''] after:block after:w-[50%] after:h-[2px] after:bg-white after:mt-1"
              : "hover:after:content-[''] hover:after:block hover:w-[50%] hover:h-[2px] hover:bg-white hover:mt-1"
          }`
                  }
                >
                  {link.name}
                </NavLink>

              
              </div>
            ))}

            
            {/* Buttons */}
            <div className="flex flex-row space-x-12 mt-6 ml-6">
              <button
                onClick={() => (window.location.href = "tel:+94711000700")}
                className="px-6 py-3 w-fit bg-primary hover:bg-primary/70 text-black font-bold rounded-lg text-lg cursor-pointer"
              >
                +94 71 1000 700
              </button>
              <button className="px-6 py-3 w-fit border-2 border-white rounded-lg text-lg cursor-pointer">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

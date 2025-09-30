import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/navbar/logo.svg";
import { Menu, X } from "lucide-react";

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
        <img src={logo} alt="Mahinda Panagoda Logo" className="h-auto w-auto" />
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
        <button className="px-4 py-3 bg-primary text-black font-bold rounded-lg text-lg cursor-pointer">
          +94 71 1000 700
        </button>
        <button className="px-7 py-2 border-2 border-white rounded-lg text-lg cursor-pointer">
          Login
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden flex items-center divide-amber-300">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
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
  {navLinks.map((link, idx) => (
    <div key={link.name} className="w-full">
      <NavLink
        to={link.path}
        onClick={() => setIsOpen(false)}
        className="block w-full text-white text-2xl font-semibold py-4 px-6"
      >
        {link.name}
      </NavLink>
      {idx !== navLinks.length - 1 && (
        <div className="w-full h-px bg-white/30"></div>
      )}
    </div>
  ))}

  <div className="w-full h-px bg-white/30 "></div>


            {/* Buttons */}
            <div className="flex flex-row space-x-12 mt-6 ml-6">
              <button className="px-6 py-3 w-fit bg-primary text-black font-bold rounded-lg text-lg cursor-pointer">
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

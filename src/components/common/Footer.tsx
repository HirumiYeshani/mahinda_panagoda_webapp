import React from "react";

import logo from "../../assets/img/footer/sublogo.svg";
import bg from "../../assets/img/footer/bg.svg";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

import instasvg from "../../assets/img/footer/insta.svg";
import whatsAppsvg from "../../assets/img/footer/wtsp.svg";
import fbsvg from "../../assets/img/footer/fb.svg";
import AIOHlogo from "../../assets/img/footer/AIOH_logo.png";
const Footer: React.FC = () => {
  const packagesLinks = [
    { name: "VIP Platinum Package", href: "#" },
    { name: "VIP Gold Package", href: "#" },
    { name: "Superior Package", href: "#" },
    { name: "Standard Packages", href: "#" },
    { name: " Pre-Arrangements", href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Packages", href: "#" },
    { name: "Parlours", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const contactInfo = [
  { icon: <FiPhone className="w-4 h-4" />, text: " +94 71 1000 700" },
  { icon: <FiMapPin className="w-6 h-6" />, text: "400 D, New Kandy Road, Talangama, Sri Lanka" },
  { icon: <FiMail className="w-4 h-4" />, text: "mpanagoda2002@yahoo.com" },
];

  const socialIcons = [
    { src: instasvg, alt: "Instagram", link: "#" },
    { src: fbsvg, alt: "Facebook", link: "#" },
    { src: whatsAppsvg, alt: "WhatsApp", link: "#" },
  ];
  return (
    <>
      <div className="flex flex-col items-center text-center space-y-4">
        <p className="text-2xl md:text-3xl font-semibold font-belda text-secondary">
          We Are Always Here When You Need Us
        </p>
        <p className="max-w-5xl md:text-xl text-lg text- font-light px-4">
          We provide 24/7 assistance, ensuring you can reach us any time of the
          day or night. Our dedicated staff is always available to guide you,
          answer your questions, or offer compassionate support.
        </p>
        <button className="px-12 py-3 text-lg bg-primary text-ternary rounded-lg mt-4 mb-6 cursor-pointer">
          Call Now
        </button>
      </div>
      <footer className="bg-gradient-to-b from-black to-ternary text-white">
        {/* Top Image */}
        <div>
          <img src={bg} alt="Footer" className="w-full" />
        </div>

        {/* Main Footer Content */}
        <div className="container py-12 w-5/6 mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 justify-items-center">
            {/* Logo & Description */}
            <div className="text-left lg:w-[400px] -translate-y-5 translate-x-13">
              <img
                src={logo}
                alt="Logo"
                className="mx-auto object-contain w-full md:w-[390px]"
              />
              <p className="text-xl text-white font-light leading-[28px] lg:text-justify text-justify px-4 lg:px-0">
                Mahinda Panagoda Funeral Directors was inaugurated in 2000 with
                all Funeral services to cater the clients under one roof from
                basic Funeral to VIP Funerals and Funeral Parlour with 24 hour
                service.
              </p>
            </div>

            {/* Packages */}
            <div className="text-left lg:translate-x-28">
              <h3 className="text-xl font-semibold mb-3">Packages</h3>
              <ul className="space-y-2 text-xl text-white/80">
                {packagesLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="text-left lg:mr-0 md:mr-18 translate-x-7">
              <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-xl text-white/80">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-left lg:mr-0 md:mr-22">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="flex flex-col gap-4 items-start">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                      {item.icon} 
                    <p className="text-white/80 text-xl">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex space-x-6 mt-8 justify-start mb-2">
                {socialIcons.map((icon, idx) => (
                  <a
                    key={idx}
                    href={icon.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-7 h-7 hover:opacity-80 transition"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden space-y-8">
            {/* Logo & Description */}
            <div className="text-left">
              <img
                src={logo}
                alt="Logo"
                className="object-contain w-[220px] mb-4"
              />
              <p className="text-base text-white font-light leading-6 text-left">
                Mahinda Panagoda Funeral Directors was inaugurated in 2000 with
                all Funeral services to cater the clients under one roof from
                basic Funeral to VIP Funerals and Funeral Parlour with 24 hour
                service.
              </p>
            </div>

            {/* Packages + Quick Links in one row */}
            <div className="grid grid-cols-2 gap-20">
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-2">Packages</h3>
                <ul className="space-y-1 text-base text-white/80">
                  {packagesLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-1 text-base text-white/80">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <div className="flex flex-col gap-3">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                      {item.icon}
                    <p className="text-white/80 text-base">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-5 mt-8">
                {socialIcons.map((icon, idx) => (
                  <a
                    key={idx}
                    href={icon.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-6 h-6 hover:opacity-80 transition"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden w-5/6 mx-auto flex-col px-8 py-12 space-y-10">
          {/* Row 1: Logo + Content + Packages */}
          <div className="flex flex-col sm:flex-row gap-10">
            {/* Logo + Description */}
            <div className="sm:w-1/2 text-left">
              <img src={logo} alt="Logo" className="w-72 mb-4" />
              <p className="text-base text-white/80 leading-6">
                Mahinda Panagoda Funeral Directors was inaugurated in 2000 with
                all Funeral services to cater the clients under one roof from
                basic Funeral to VIP Funerals and Funeral Parlour with 24 hour
                service.
              </p>
            </div>

            {/* Packages */}
            <div className="sm:w-1/2 text-left translate-x-12 mt-4">
              <h3 className="text-lg font-semibold mb-3">Packages</h3>
              <ul className="space-y-1 text-base text-white/80">
                {packagesLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: Quick Links + Contact */}
          <div className="flex flex-col sm:flex-row gap-10">
            {/* Quick Links */}
            <div className="sm:w-1/2 text-left">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-1 text-base text-white/80">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="sm:w-1/2 text- translate-x-12">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="flex flex-col gap-3">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                      {item.icon}
                    <p className="text-white/80 text-base">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Icons centered below */}
          <div className="flex justify-center space-x-6 mt-6">
            {socialIcons.map((icon, idx) => (
              <a key={idx} href={icon.link} target="_blank" rel="noreferrer">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-7 h-7 hover:opacity-80 transition"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative bg-gradient-to-b from-transparent to-secondary">
          {/* Top line */}
  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-5/6 h-px bg-white"></div>


          {/* Main content */}
          <div className="w-5/6 mx-auto container flex flex-col sm:flex-col md:flex-row items-center justify-between py-4 text-xs text-white/80 space-y-2 md:space-y-0">
            {/* Left content */}
            <div className="flex items-center space-x-2 ml-6 lg:ml-0 md:ml-0 md:space-x-4 text-xs -translate-x-0.5 mt-4">
              <span>All rights reserved | Powered by</span>
              <img
                src={AIOHlogo}
                alt="Logo"
                className="w-11 h-auto inline-block align-middle -translate-x-3 -translate-y-[8%]"
              />
            </div>

            {/* Right content */}
            <div className="flex items-center space-x-8 text-xs translate-x-0.5 mt-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Services
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";

import logo from "../../assets/img/footer/sublogo.svg";
import bg from "../../assets/img/footer/bg.svg";
import mailsvg from "../../assets/img/footer/mail.svg";
import phonesvg from "../../assets/img/footer/call.svg";
import mapsvg from "../../assets/img/footer/location.svg";
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
    { icon: phonesvg, text: " +94 71 1000 700" },
    { icon: mapsvg, text: "400 D, New Kandy Road,Talangama, Sri Lanka" },
    { icon: mailsvg, text: "mpanagoda2002@yahoo.com" },
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
        <p className="max-w-5xl text-xl text-black font-light px-4">
          We provide 24/7 assistance, ensuring you can reach us any time of the
          day or night. Our dedicated staff is always available to guide you,
          answer your questions, or offer compassionate support.
        </p>
        <button className="px-12 py-3 text-lg bg-primary text-black rounded-lg mt-4 mb-6">
          Call Now
        </button>
      </div>
      <footer className="bg-black text-white">
        {/* Top Image */}
        <div>
          <img src={bg} alt="Footer" className="w-full" />
        </div>

        {/* Main Footer Content */}
        <div className="container py-12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left w-full md:w-[200px] lg:w-[400px]">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto object-contain w-full md:w-[390px]"
            />
            <p className="text-xl text-white font-light leading-[28px] lg:text-justify md:text-left text-justify md:px-0 px-4 ">
              Mahinda Panagoda Funeral Directors was inaugurated in 2000 with
              all Funeral services to cater the clients under one roof from
              basic Funeral to VIP Funerals and Funeral Parlour with 24 hour
              service.
            </p>
          </div>

          {/* Packages */}
          <div className="text-center md:text-left lg:translate-x-18 ">
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
          <div className="text-center md:text-left lg:mr-0 md:mr-18">
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
          <div className="text-center md:text-left lg:mr-0 md:mr-22">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-4 items-center sm:items-start">
              {contactInfo.map((item) => (
                <div className="flex items-center space-x-2">
                  <img src={item.icon} alt="icon" className="w-5 h-5" />
                  <p className="text-white/80 text-xl">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex space-x-6 mt-8 justify-center sm:justify-start mb-2">
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
        </div>
        {/* Bottom Bar */}
        <div className="relative bg-gradient-to-b from-transparent to-secondary">
          {/* Top line */}
          <div className="absolute top-4 left-1/24 w-11/12 h-px bg-white"></div>

          {/* Main content */}
          <div className="container mx-auto flex flex-col sm:flex-col md:flex-row items-center justify-between py-6 text-xs text-white/80 space-y-2 md:space-y-0">
            {/* Left content */}
            <div className="flex items-center space-x-2 md:space-x-4 text-xs -translate-x-13 mt-4">
              <span>All rights reserved | Powered by</span>
              <img
                src={AIOHlogo}
                alt="Logo"
                className="w-11 h-auto inline-block align-middle -translate-x-2"
              />
            </div>

            {/* Right content */}
            <div className="flex items-center space-x-8 text-xs translate-x-13 mt-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Services
              </a>
            </div>
          </div>

          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-white"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

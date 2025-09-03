import React from 'react'
import logo from "../assets/img/aboutUS/footerLogo.svg"
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import img from "../assets/img/aboutUS/footerTop.svg";

const Footer: React.FC = () => {
  return (
    <div className='w-full'>
      {/* footer top */}
      <div className="lg:w-5/6 md:w-11/12 mx-auto max-w-250 flex flex-col items-center justify-center gap-4 text-center py-10">
        <h1 className="text-primary font-[belda] font-semibold text-2xl md:text-4xl">
          We Are Always Here When You Need Us
        </h1>
        <p className="text-base md:text-xl leading-relaxed">
          We provide 24/7 assistance, ensuring you can reach us any time of the day or night. Our dedicated staff is always available to guide you, answer your questions, or offer compassionate support.
        </p>
        <a
          href="tel:+94711000700"
          className="bg-secondary hover:bg-secondary/90 text-black text-[20px] rounded-lg mt-5 px-4 py-3.5 flex items-center"
        >
          <span className="px-2 sm:px-4">Call Now</span>
        </a>
      </div>

      {/* footer image */}
      <img className="w-full bg-black" src={img} alt="footerTopImage" />

      {/* footer info */}
      <div className="bg-black text-white/70 bg-gradient-to-b justify-center">
        <div className="flex flex-col sm:flex-row flex-wrap lg:w-5/6 md:w-11/12 w-11/12 mx-auto justify-between gap-6 py-10 text-xl">
          
          {/* Logo & Description */}
          <div className="max-w-[370px]">
            <img className="h-16 md:h-20 mb-4" src={logo} alt="company Logo Image" />
            <p className="sm:text-base md:text-lg text-justify">
              Mahinda Panagoda Funeral Directors was inaugurated in 2000 with all Funeral services to cater the clients under one roof from basic Funeral to VIP Funerals and Funeral Parlour with 24 hour service.
            </p>
          </div>

          {/* Packages */}
          <div>
            <h2 className="mb-4 font-semibold text-white">Packages</h2>
            <ul className="space-y-2">
              <li><a href="#">VIP Platinum Package</a></li>
              <li><a href="#">VIP Gold Package</a></li>
              <li><a href="#">Superior Package</a></li>
              <li><a href="#">Standard Packages</a></li>
              <li><a href="#">Pre-Arrangements</a></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h2 className="mb-4 font-semibold text-white">Pages</h2>
            <ul className="space-y-2">
              <li><a href="home">Home</a></li>
              <li><a href="aboutUs">About us</a></li>
              <li><a href="packages">Packages</a></li>
              <li><a href="gallery">Gallery</a></li>
              <li><a href="contactUs">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-4 font-semibold text-white">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <IoCallOutline className="size-5 mr-2" /> +94 71 1000 700
              </li>
              <li className="flex items-center">
                <CiLocationOn className="size-5 mr-2 mt-1" /> 
                <span>400 D, New Kandy Road, <br /> Talangama, Sri Lanka</span>
              </li>
              <li className="flex items-center underline">
                <MdOutlineEmail className="size-5 mr-2" /> mpanagoda2002@yahoo.com
              </li>
              <li className="flex flex-row pt-5 gap-3">
                <a href='#'><RiInstagramFill className="size-6 sm:size-8" /></a>
                <a href='#'><AiFillFacebook className="size-6 sm:size-8" /></a>
                <a href='#'><FaSquareWhatsapp className="size-6 sm:size-8" /></a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='absolute w-full bg-gradient-to-b from-black to-green-800'>
          <div className="flex flex-col lg:flex-row lg:w-5/6 w-11/12 mx-auto items-center justify-between border-t border-white mt-5 pt-4 pb-6 text-xs">
          <p className='mb-2 lg:mb-0'>
            All rights reserved | Powered by All In One IT Solutions
          </p>
          <div className="flex flex-row gap-10">
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer

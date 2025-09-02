import React from 'react'
import logo from "../assets/img/aboutUS/footerLogo.svg"
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import img from "../assets/img/aboutUS/footerTop.svg";

const Footer:React.FC = () => {
  return (
    <>
    {/* footer top */}
    <div className='w-full h-20 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-red/100 to-red/0 text-center px-6 md:px-20 text-black'>
      <h1 className='text-primary font-[belda] font-semibold text-4xl'>We Are Always Here When You Need Us</h1>
      <p className='text-xl justify-between'>We provide 24/7 assistance, ensuring you can reach us any time of the day or night. Our dedicated staff is always <br/> available to guide you, answer your questions, or offer compassionate support.</p>
      <a
        href="tel:+94711000700"
        className="bg-secondary text-black font-lg font-semibold rounded-lg mt-5 px-6 py-3.5 flex items-center"
      >
        <span className='px-4'>Call Now</span>
      </a>
    </div>

    {/* footer image */}
    <img className="w-full bg-black mt-20" src={img} alt="footerTop"/>

    {/* footer info */}
    <div className="px-6 bg-black md:px-16 lg:px-24 xl:px-32 text-xl font-thin">
      <div className="flex flex-col md:flex-row sm:grid-cols-2 items-start justify-between py-15 text-gray-200">
        <div>
          <img className="h-23" src={logo} alt="companyLogo" />
          <p className="max-w-[410px] text-justify">Mahinda Panagoda Funeral Directors was inaugurated in 2000 with all Funeral services to cater the clients under one roof from basic Funeral to VIP Funerals and Funeral Parlour with 24 hour service.</p>
        </div>

        <div className='flex flex-row pt-3 md:flex-col lg:flex-row gap-30 md:gap-20 lg:gap-20 font-normal text-gray-300'>
          <div>
            <h2 className="mb-5 font-semibold text-gray-200">Pages</h2>
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Packages</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="mb-5 font-semibold text-gray-200">Packages</h2>
            <ul className="space-y-2">
              <li><a href="#">VIP Platinum Package</a></li>
              <li><a href="#">VIP Gold Package</a></li>
              <li><a href="#">Superior Package</a></li>
              <li><a href="#">Standard Packages</a></li>
              <li><a href="#">Pre-Arrangements</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 font-semibold text-gray-200">Contact Us</h2>
            <ul className="space-y-4">
              <li className='flex flex-row items-center'><IoCallOutline className='size-5 mr-2'/> +94 71 1000 700</li>
              <li className='flex flex-row items-center'><CiLocationOn className='size-5 mr-2'/> 400 D, New Kandy Road, <br/> Talangama, Sri Lanka</li>
              <li className='flex flex-row items-center underline'><MdOutlineEmail className='size-5 mr-2'/> mpanagoda2002@yahoo.com</li>
              <li className='flex flex-row pt-5'><RiInstagramFill className='size-8 mr-2'/> <AiFillFacebook className='size-8 mx-2'/> <FaSquareWhatsapp className='size-8 mx-2'/></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between gap-6 pt-1 border-t border-gray-200 bg-gradient-to-b from-red/100 to-red/0'>
        <p className="py-4 text-center text-sm md:text-base text-gray-200">
          All rights reserved | Powered by All In One IT Solutions
        </p>
        <div className='flex flex-row items-center gap-4 text-gray-200 text-sm md:text-base'>
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer

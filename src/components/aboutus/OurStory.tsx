import React from 'react'

import MPImage from "../../assets/img/aboutUs/MP.svg"; // Replace with your founder image
import MpImg from "../../assets/img/aboutUs/mp.webp"; // Replace with your founder image
import nafdLogo from "../../assets/img/aboutUs/logo.svg";

const OurStory: React.FC = () => {
  return (
    <section className="bg-white w-5/6 mx-auto">
      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="lg:text-sm text-[20px] leading-[32px] font-[belda] text-ternary/70 mb-4 uppercase tracking-wider">
          Who We Are
        </h1>
        <h1 className="md:text-5xl text-[25px] lg:leading-[41px] leading-[62px] font-[belda] font-semibold">
          What is Our Story
        </h1>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between  mt-12 text-ternary">
        {" "}
        {/* Text */}
        <div className="lg:w-2xl text-justify space-y-6 font-light">
          <p className="text-[22px]">
            Founded in 2000, Mahinda Panagoda Funeral Directors has been
            dedicated to providing complete funeral services under one roof.
            From basic to VIP funerals, we offer 24-hour support, modern
            parlours, traditional funeral pyres, and fresh flower arrangements
            ensuring every farewell is handled with dignity and care.
          </p>

          <p className="text-[22px]">
            Led by Mr. Mahinda Panagoda’s U.K. experience as a Funeral Director
            and Embalmer, and supported by Mrs. Radanika Panagoda’s expertise in
            floral design, we have earned a reputation for professional,
            compassionate, and affordable funeral care in Colombo.
          </p>
        </div>
        {/* Right Image */}
        <div className="relative lg:w-[550px] h-[260px] mt-8 lg:mt-0">
          {/* Gray Overlay*/}
          <div className="absolute -top-3.5 left-0 w-full h-[310px] bg-black/6 rounded-tl-[20px] rounded-br-[20px]"></div>

          {/* Image */}
          <img
            src={MpImg}
            alt="Mahinda Panagoda Funeral Directors"
            className="absolute top-3 right-8 w-full h-[320px] rounded-tl-[20px] rounded-br-[20px] grayscale-75"
          />
        </div>
      </div>

      {/* Founder Section */}
      <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between bg-black/8 p-6  rounded-lg">
        {/* Founder Image */}
        <div className="md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0 ">
          <img
            src={MPImage}
            alt="Mr. Mahinda Panagoda"
            className="w-40"
          />
        </div>

        {/* Founder Info */}
        <div className="md:w-2/3 space-y-2">
          <h3 className="font-semibold text-2xl">
            Mr. Mahinda Panagoda - Founder & Visionary Leader
          </h3>
          <ul className="list-disc list-inside text-lg">
            <li>Internationally trained Funeral Director & Embalmer</li>
            <li>Diploma in Human Resource Management (SL)</li>
            <li>MBA in Strategic Management & Leadership (UK)</li>
            <li>30+ years of funeral service expertise</li>
          </ul>
        </div>

        {/* NAFD Logo */}
        <div className="md:w-1/4 flex justify-center md:justify-end mt-4 md:mt-0">
          <img src={nafdLogo} alt="NAFD UK Logo" className="w-34" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;

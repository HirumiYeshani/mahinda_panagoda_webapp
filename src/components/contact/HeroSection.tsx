import React from "react";
import HeroImg from "../../assets/img/contactUs/hero.svg";

const HeroSection: React.FC = () => {
  return (
    <div>
      <div className="relative  h-[300px] sm:h-[400px] lg:h-[500px]">
        <img
          src={HeroImg}
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <div className="px-4 sm:px-8 lg:px-16 py-4 sm:py-6 space-y-2 sm:space-y-3">
            <h1 className="text-[28px] sm:text-[40px] lg:text-[50px] leading-[34px] sm:leading-[50px] lg:leading-[62px] font-bold font-[belda] text-white">
              Here To Support You,{" "}
              <span className="text-secondary">Anytime</span>
            </h1>
            <p className="text-[14px] sm:text-[16px] lg:text-[20px] leading-[18px] sm:leading-[20px] lg:leading-[24px] text-white pb-2 sm:pb-4">
              Our compassionate team is available anytime to guide you through
              arrangements with dignity and care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

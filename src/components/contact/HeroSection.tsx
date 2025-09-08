import React from "react";
import HeroImg from "../../assets/img/contactUs/hero.svg";

const HeroSection: React.FC = () => {
  return (
    <div>
      <div className="relative  h-[300px]  lg:h-[500px]">
        <img
          src={HeroImg}
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <div className="w-11/12 mx-auto px-4 lg:px-16 py-4 space-y-2">

            <h1 className="text-[28px]  lg:text-[50px] leading-[34px] lg:leading-[62px] font-bold font-belda text-white">
              Here To Support You,{" "}
              <span className="text-primary">Anytime</span>
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

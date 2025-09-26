import React from "react";
import Navbar from "../../assets/img/gallery/nav.svg";

import hero from "../../assets/img/publicfigures/hero.svg";

const HeroSection: React.FC = () => {
  return (
    <div>
      <div className="relative  h-[300px]  lg:h-[500px]">
        <div className="absolute top-0 left-0 w-full">
          <img src={Navbar} className="w-full" />
        </div>
        <img
          src={hero}
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <div className="w-11/12 md:w-5/6 mx-auto py-4 space-y-2">
            <h1 className="text-2xl lg:text-5xl leading-[34px] lg:leading-[62px] font-bold font-belda text-white">
              Memories Of{" "}
              <span className=" text-primary">Notable Personalities</span>
            </h1>

            <p className="text-[16px] lg:text-xl leading-5 lg:leading-6 text-white pb-2 sm:pb-4">
              Commemorating those who shaped our society through meaningfull
              lives and contributions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

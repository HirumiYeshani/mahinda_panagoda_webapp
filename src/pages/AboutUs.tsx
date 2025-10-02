import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/aboutus/HeroSection";

const AboutUs: React.FC = () => {
  return (
    <div>
      <section className="w-full">
        <Navbar/>
      </section>
       <section className="w-full lg:mb-30 mb-20">
        <HeroSection/>
      </section>
    </div>
  );
};

export default AboutUs;

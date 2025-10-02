import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/aboutus/HeroSection";
import VisionMission from "../components/aboutus/VisionMission";
import OurStory from "../components/aboutus/OurStory";

const AboutUs: React.FC = () => {
  return (
    <div className="font-[roboto]">
      <section className="w-full">
        <Navbar />
      </section>
      <section className="w-full lg:mb-30 mb-20">
        <HeroSection />
      </section>
      <section className="w-full lg:mb-30 mb-20">
       <OurStory/>
      </section>
      <section className="w-full lg:mb-30 mb-20">
        <VisionMission />
      </section>
    </div>
  );
};

export default AboutUs;

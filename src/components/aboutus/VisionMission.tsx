import React from 'react'
import LineArt from "../../assets/img/aboutUs/lineArt.svg";

const VisionMission: React.FC = () => {
  return (
<section className="bg-gradient-to-b from-black via-black/100 via-3/4 to-secondary py-28 px-6">
      <div className="w-5/6 mx-auto grid md:grid-cols-2 gap-10">
        {/* Vision Card */}
        <div className="bg-primary rounded-lg p-8 text-center md:text-left lg:h-[400px]">
          <p className="text-sm text-ternary/70 text-center font-[belda] uppercase mb-4 mt-6 tracking-wider">Our Vision</p>
          <h2 className="text-2xl md:text-4xl text-center font-[belda] font-semibold mb-4">Guiding Tomorrow</h2>
          <p className="text-ternery text-2xl font-light text-center mt-10 leading-normal">
            To be Sri Lanka’s most trusted and compassionate funeral partner, delivering peace of mind and dignified farewells for every family
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-[#E6E6E6] rounded-lg p-8 text-center md:text-left">
          <p className="text-sm text-ternary/70 text-center font-[belda] uppercase mb-4 mt-6 tracking-wider">Our Mission</p>
          <h2 className="text-2xl md:text-4xl text-center font-[belda] font-semibold mb-4">Serving Today</h2>
          <p className="text-ternery text-2xl font-light text-center mt-10 leading-normal w-xl">
            We are committed to guiding families with professional care, modern facilities, and heartfelt compassion, honoring traditions while meeting contemporary needs.
          </p>
          
          {/* Top Right Image */}
          
          <img
            src={LineArt}
            alt="Decorative"
            className="absolute bg-amber-600 right-0 w-50 md:w-50"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

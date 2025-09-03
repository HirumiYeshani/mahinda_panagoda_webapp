import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black via-black/90 to-green-900 py-25">
      <div className="lg:w-5/6 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
        
        {/* Vision Card */}
        <div className="bg-secondary rounded-lg py-15 px-10 text-center align-center">
          <h1 className="uppercase text-gray-500 font-medium text-sm mb-3 text-center">
            Our Vision
          </h1>
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Guiding Tomorrow
          </h2>
          <p className="text-black text-2xl font-thin leading- text-center">
            To be Sri Lanka's most trusted and compassionate funeral partner, delivering peace of mind and dignified farewells for every family
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white/90 rounded-lg py-15 px-10 text-center">
          <h1 className="uppercase tracking-widest text-gray-500 font-medium text-sm mb-3 text-center">
            Our Mission
          </h1>
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Serving Today
          </h2>
          <p className="text-black text-2xl font-thin leading-relaxed text-center">
            We are committed to guiding families with professional care, modern facilities, and heartfelt compassion, honoring traditions while meeting contemporary needs
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;

import React from "react";
import { Maximize2 } from "lucide-react";
import arrowsvg from "../../assets/img/gallery/arrow.svg";

import img1 from "../../assets/img/gallery/img1.jpg";
import img2 from "../../assets/img/gallery/img2.jpg";
import img3 from "../../assets/img/gallery/img3.jpg";
import img4 from "../../assets/img/gallery/img4.jpg";
import img5 from "../../assets/img/gallery/img5.jpg";
import img6 from "../../assets/img/gallery/img6.jpg";
import img7 from "../../assets/img/gallery/img7.jpg";
import img8 from "../../assets/img/gallery/img8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ImageCollection = () => {
  return (
    <div className="w-full mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="md:text-[14px] text-[18px] font-[belda] text-ternary/70 mb-2 tracking-wide uppercase">
          Captured Moments
        </h2>
        <h3 className="md:text-[36px] text-[26px] md:leading-[42px] leading-[32px] font-[belda] font-semibold">
          Image Collections
        </h3>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {/* Big left image */}
        <div className="relative md:row-span-2">
          <img
            src={images[0]}
            alt="Gallery"
            className="w-full h-full object-cover rounded-2xl "
          />

          <button className="absolute top-2 right-2 p-1.5 backdrop-blur-sm rounded-lg  border-2 border-primary text-primary">
            <Maximize2 size={18} />
          </button>
        </div>

        {/* Top-right two images */}
        <div className="col-span-3 grid grid-cols-2 gap-4">
          <div className="relative">
            <img
              src={images[1]}
              alt="Gallery"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <button className="absolute top-2 right-2 p-1.5 backdrop-blur-none rounded-lg  border-2 border-primary text-primary">
              <Maximize2 size={18} />
            </button>
          </div>
          <div className="relative">
            <img
              src={images[2]}
              alt="Gallery"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <button className="absolute top-2 right-2 p-1.5 backdrop-blur-none rounded-lg  border-2 border-primary text-primary">
              <Maximize2 size={18} />
            </button>
          </div>
        </div>

        {/* Middle three images */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
          <div className="relative">
            <img
              src={images[3]}
              alt="Gallery"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <button className="absolute top-2 right-2 p-1.5 backdrop-blur-none rounded-lg  border-2 border-primary text-primary">
              <Maximize2 size={18} />
            </button>
          </div>
          <div className="relative">
            <img
              src={images[4]}
              alt="Gallery"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <button className="absolute top-2 right-2 p-1.5 backdrop-blur-none rounded-lg  border-2 border-primary text-primary">
              <Maximize2 size={18} />
            </button>
          </div>
          <div className="relative">
            <img
              src={images[5]}
              alt="Gallery"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <button className="absolute top-2 right-2 p-1.5 backdrop-blur-none rounded-lg  border-2 border-primary text-primary">
              <Maximize2 size={18} />
            </button>
          </div>
        </div>

        {/* Bottom three images with gradient overlay */}
        <div className="col-span-4 grid grid-cols-3 gap-4 relative">
          <div className="relative">
            <img
              src={images[6]}
              alt="Gallery"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-white/5  rounded-b-2xl"></div>
            <button className="absolute top-2 right-2 p-1.5 backdrop-blur-none rounded-lg  border-2 border-primary text-primary">
              <Maximize2 size={18} />
            </button>
          </div>
          <div className="relative">
            <img
              src={images[7]}
              alt="Gallery"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <div className="absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-white to-white/5  rounded-b-2xl"></div>
            <button className="absolute top-2 right-2 p-1.5 backdrop-blur-none rounded-lg  border-2 border-primary text-primary">
              <Maximize2 size={18} />
            </button>
          </div>
          <div className="relative">
            <img
              src={images[0]}
              alt="Gallery"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <div className="absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-white to-white/5 rounded-b-2xl"></div>
            <button className="absolute top-2 right-2 p-1.5 backdrop-blur-sm rounded-lg  border-2 border-primary text-primary">
              <Maximize2 size={18} />
            </button>
          </div> 
          {/* Show More Images Button */}
          <div className="absolute bottom-0 top-0 h-72 w-full hidden md:flex items-end justify-center pointer-events-none">
            <button className="flex flex-col items-center group p-4 rounded-xl">
              <img
                src={arrowsvg}
                alt="Show more"
                className="w-8 h-8 group-hover:translate-y-1 transition-transform duration-300"
              />
              <span className="mt-2 text-black font-semibold tracking-wide">
                Show More Images
              </span>
            </button>
          </div>

          {/* copied froM AV */}
          {/* <div className="absolute bottom-0 h-72 w-full hidden md:flex items-end justify-center pointer-events-none">
            <div className="pointer-events-auto bg-gradient-to-t from-black via-black/50 to-transparent shadow-inner flex items-end justify-center w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]">
              <div className="flex flex-col items-center pb-6">
                <div className="bg-black p-3 rounded-full shadow-lg mb-2"></div>
                <p className="text-yellow-500 font-medium text-sm">
                  Show More Photos
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ImageCollection;

import { useState } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

import arrowsvg from "../../assets/img/gallery/arrow.svg";

import img1 from "../../assets/img/gallery/img1.jpg";
import img2 from "../../assets/img/gallery/img2.jpg";
import img3 from "../../assets/img/gallery/img3.jpg";
import img4 from "../../assets/img/gallery/img4.jpg";
import img5 from "../../assets/img/gallery/img5.jpg";
import img6 from "../../assets/img/gallery/img6.jpg";
import img7 from "../../assets/img/gallery/img7.jpg";
import img8 from "../../assets/img/gallery/img8.jpg";
import img9 from "../../assets/img/gallery/img8.jpg";
import img10 from "../../assets/img/gallery/img6.jpg";
import img11 from "../../assets/img/gallery/img7.jpg";
import img12 from "../../assets/img/gallery/img8.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img1,
  img2,
  img3,
  img4,
  img5,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img1,
  img2,
  img3,
  img4,
  img5,
];

const ImageCollection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const prevImage = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
    }
  };

  const nextImage = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % images.length);
    }
  };
  const INITIAL_VISIBLE = 9;
  const IMAGES_PER_ROW_DESKTOP = 4;
  const EXTRA_ROWS_INCREMENT = 2;
  const INITIAL_VISIBLE_MOBILE = 6;
  const IMAGES_PER_CLICK_MOBILE = 6;

  const [extraRowsShown, setExtraRowsShown] = useState(0);

  const totalVisibleImages =
    INITIAL_VISIBLE + extraRowsShown * IMAGES_PER_ROW_DESKTOP;

  const handleShowMore = () => {
    setExtraRowsShown((prev) => prev + EXTRA_ROWS_INCREMENT);
  };

  const handleShowLess = () => {
    setExtraRowsShown(0);
  };

  return (
    <div className="w-full mx-auto text-ternary">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-xs font-belda text-ternary/70 mb-2 uppercase tracking-wider">
          Captured Moments
        </h1>
        <h1 className="md:text-5xl text-3xl leading-[41px] md:leading-[62px]  font-belda font-semibold">
          Image Collections
        </h1>
      </div>

      {/* Desktop & Tablet Image Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-7 h-auto">
        {/* Left image */}
        <div
          className="relative md:row-span-2 cursor-pointer"
          onClick={() => openModal(0)}
        >
          <img
            src={images[0]}
            alt="Gallery"
            className="w-full h-full object-cover rounded-2xl grayscale-50"
          />
              <button className="absolute top-2 right-2 p-1.5 backdrop-blur-sm rounded-lg border-2 border-primary text-primary cursor-pointer">
            <Maximize2 size={18} />
          </button>
        </div>

        {/* Top-right two images */}
        <div className="col-span-3 grid grid-cols-2 gap-7">
          {images.slice(1, 3).map((img, i) => (
            <div
              key={i}
              className="relative cursor-pointer"
              onClick={() => openModal(i + 1)}
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-56 object-cover rounded-2xl grayscale-50"
              />

              {/* Expand button */}
              <button className="absolute top-2 right-2 p-1.5 backdrop-blur-sm rounded-lg border-2 border-primary text-primary cursor-pointer">
                <Maximize2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Middle three images */}
        <div className="col-span-3 grid grid-cols-3 gap-7">
          {images.slice(3, 6).map((img, i) => (
            <div
              key={i}
              className="relative cursor-pointer"
              onClick={() => openModal(i + 3)}
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-56 object-cover rounded-2xl grayscale-50"
              />
              <button className="absolute top-2 right-2 p-1.5 backdrop-blur-sm rounded-lg border-2 border-primary text-primary cursor-pointer">
                <Maximize2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom three images */}
        <div className="col-span-4 grid grid-cols-3 gap-7 relative">
          {images.slice(6, 9).map((img, i) => (
            <div
              key={i}
              className="relative cursor-pointer"
              onClick={() => openModal(i + 6)}
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-56 object-cover rounded-2xl grayscale-50"
              />
              <button className="absolute top-2 right-2 p-1.5 backdrop-blur-sm rounded-lg border-2 border-primary text-primary cursor-pointer">
                <Maximize2 size={18} />
              </button>
            </div>
          ))}

          {/* Fade overlay */}
          {extraRowsShown === 0 && (
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent rounded-b-2xl"></div>
          )}
        </div>

        {/* Extra images */}
        {images.slice(INITIAL_VISIBLE, totalVisibleImages).map((img, i) => (
          <div
            key={i}
            className="relative col-span-2 md:col-span-1 cursor-pointer"
            onClick={() => openModal(i + INITIAL_VISIBLE)}
          >
            <img
              src={img}
              alt="Gallery"
              className="w-full h-56 object-cover rounded-2xl grayscale-50"
            />
            <button className="absolute top-2 right-2 p-1.5 backdrop-blur-sm rounded-lg border-2 border-primary text-primary cursor-pointer">
              <Maximize2 size={18} />
            </button>
          </div>
        ))}

        {/* Show More / Show Less Buttons */}
        <div
          className={`hidden md:flex justify-center gap-16 col-span-4 ${
            extraRowsShown > 0 ? "mt-1 mb-6" : "-translate-y-8"
          }`}
        >
          {/* Show More button if there are still more images to reveal */}
          {totalVisibleImages < images.length && (
            <button
              className="flex flex-col items-center group cursor-pointer"
              onClick={handleShowMore}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={arrowsvg}
                  alt="Show More Images"
                  className="w-8 h-8 transition-transform duration-300 transform rotate-0"
                />
              </div>
              <span className="text-sm underline">Show More Images</span>
            </button>
          )}

          {/* Show Less button if any extra rows are shown */}
          {extraRowsShown > 0 && (
            <button
              className="flex flex-col items-center group cursor-pointer"
              onClick={handleShowLess}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={arrowsvg}
                  alt="Show Less Images"
                  className="w-8 h-8 transition-transform duration-300 transform rotate-180"
                />
              </div>
              <span className="text-sm underline">Show Less Images</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Only Grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {images
          .slice(
            0,
            INITIAL_VISIBLE_MOBILE + extraRowsShown * IMAGES_PER_CLICK_MOBILE
          )
          .map((img, i) => {
            // Show overlay only on last row when collapsed
            const showOverlay =
              extraRowsShown === 0 &&
              i >= INITIAL_VISIBLE_MOBILE - 2 &&
              i < INITIAL_VISIBLE_MOBILE;

            return (
              <div key={i} className="relative">
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-40 object-cover rounded-xl grayscale-50"
                  onClick={() => openModal(i + INITIAL_VISIBLE)}
                />

                {showOverlay && (
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent rounded-xl"></div>
                )}

                <button
                  onClick={() => openModal(i)}
                  className="absolute top-2 right-2 p-1 backdrop-blur-sm rounded-lg border-2 border-primary text-primary cursor-pointer"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            );
          })}
      </div>

      {/* Mobile Show More / Show Less Buttons */}
      {images.length > INITIAL_VISIBLE_MOBILE && (
        <div className="md:hidden flex justify-center gap-6 mt-4">
          {/* Show More */}
          {INITIAL_VISIBLE_MOBILE + extraRowsShown * IMAGES_PER_CLICK_MOBILE <
            images.length && (
            <button
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => setExtraRowsShown(extraRowsShown + 1)}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={arrowsvg}
                  alt="Show More Images"
                  className="w-8 h-8 transition-transform duration-300 transform rotate-0"
                />
              </div>
              <span className="text-sm underline">Show More Images</span>
            </button>
          )}

          {/* Show Less */}
          {extraRowsShown > 0 && (
            <button
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => setExtraRowsShown(0)}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={arrowsvg}
                  alt="Show Less Images"
                  className="w-8 h-8 transition-transform duration-300 transform rotate-180"
                />
              </div>
              <span className="text-sm underline">Show Less Images</span>
            </button>
          )}
        </div>
      )}

      {/* Modal Viewer */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white cursor-pointer"
          >
            <X size={32} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white cursor-pointer"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={images[activeIndex]}
            alt="Gallery"

            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg grayscale-50"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white cursor-pointer"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCollection;

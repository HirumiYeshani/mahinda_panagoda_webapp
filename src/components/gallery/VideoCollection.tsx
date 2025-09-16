import React, { useState } from "react";
import arrowsvg from "../../assets/img/gallery/downarrow.png";

const videos = [
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
  "https://www.youtube.com/embed/Wcpj_RHRKiI?si=uciJ2d_93lpRYxOg",
  "https://www.youtube.com/embed/Wcpj_RHRKiI?si=uciJ2d_93lpRYxOg",
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
  "https://www.youtube.com/embed/Wcpj_RHRKiI?si=uciJ2d_93lpRYxOg",
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
  "https://www.youtube.com/embed/Wcpj_RHRKiI?si=uciJ2d_93lpRYxOg",
];

const INITIAL_COUNT_DESKTOP = 6;
const INITIAL_COUNT_MOBILE = 6;
const VIDEOS_PER_CLICK_MOBILE = 6;

const VideoCollection: React.FC = () => {
  const [visibleCountDesktop, setVisibleCountDesktop] = useState(
    INITIAL_COUNT_DESKTOP
  );
  const [extraRowsShownMobile, setExtraRowsShownMobile] = useState(0);
  const [popupVideo, setPopupVideo] = useState<string | null>(null);

  const visibleCountMobile =
    INITIAL_COUNT_MOBILE + extraRowsShownMobile * VIDEOS_PER_CLICK_MOBILE;

  const openPopup = (video: string) => setPopupVideo(video);
  const closePopup = () => setPopupVideo(null);

  const handleShowMoreDesktop = () =>
    setVisibleCountDesktop(Math.min(visibleCountDesktop + 6, videos.length));
  const handleShowLessDesktop = () =>
    setVisibleCountDesktop(INITIAL_COUNT_DESKTOP);

  return (
    <div className="w-full mx-auto">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="lg:text-[14px] text-sm font-[belda] text-ternary/70 mb-2 uppercase">
          Stories in motion
        </h2>
        <h3 className="md:text-[36px] text-[25px] leading-[41px] sm:leading-[62px] font-[belda] font-semibold">
          Video Collections
        </h3>
      </div>

      {/* Desktop Video Grid */}
      <div className="hidden md:grid grid-cols-3 gap-3 md:gap-7">
        {videos.slice(0, visibleCountDesktop).map((video, i) => (
          <div
            key={i}
            className="relative aspect-video w-full overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openPopup(video)}
          >
            <iframe
              className="w-full h-full rounded-lg pointer-events-none"
              src={video}
              title={`YouTube video ${i + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Desktop Show More / Show Less Buttons */}
      <div className="hidden md:flex justify-center gap-6 mt-6 -translate-y-5">
        {visibleCountDesktop < videos.length && (
          <button
            className="flex flex-col items-center group"
            onClick={handleShowMoreDesktop}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={arrowsvg}
                alt="Show more"
                className="w-8 h-8 transition-transform duration-300 transform rotate-0"
              />
            </div>
            <span className="text-black text-sm">Show More Videos</span>
          </button>
        )}
        {visibleCountDesktop > INITIAL_COUNT_DESKTOP && (
          <button
            className="flex flex-col items-center group"
            onClick={handleShowLessDesktop}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={arrowsvg}
                alt="Show less"
                className="w-8 h-8 transition-transform duration-300 transform rotate-180"
              />
            </div>
            <span className="text-black text-sm">Show Less Videos</span>
          </button>
        )}
      </div>

      {/* Mobile Video Grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {videos.slice(0, visibleCountMobile).map((video, i) => {
          // Add overlay only on last row when collapsed
          const showOverlay =
            extraRowsShownMobile === 0 &&
            i >= INITIAL_COUNT_MOBILE - 2 &&
            i < INITIAL_COUNT_MOBILE;

          return (
            <div
              key={i}
              className="relative aspect-video w-full overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openPopup(video)}
            >
              <iframe
                className="w-full h-full rounded-lg pointer-events-none"
                src={video}
                title={`YouTube video ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {showOverlay && (
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white to-transparent rounded-b-lg"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Show More / Show Less Buttons */}
      <div className="md:hidden flex justify-center gap-6 mt-4">
        {visibleCountMobile < videos.length && (
          <button
            className="flex flex-col items-center group"
            onClick={() => setExtraRowsShownMobile(extraRowsShownMobile + 1)}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={arrowsvg}
                alt="Show more"
                className="w-8 h-8 transition-transform duration-300 transform rotate-0"
              />
            </div>
            <span className="text-black text-sm">Show More Videos</span>
          </button>
        )}
        {extraRowsShownMobile > 0 && (
          <button
            className="flex flex-col items-center group"
            onClick={() => setExtraRowsShownMobile(0)}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={arrowsvg}
                alt="Show less"
                className="w-8 h-8 transition-transform duration-300 transform rotate-180"
              />
            </div>
            <span className="text-black text-sm">Show Less Videos</span>
          </button>
        )}
      </div>

      {/* Popup Modal */}
      {popupVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closePopup}
        >
          {/* Close button outside the video */}
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={closePopup}
          >
            &times;
          </button>

          {/* Video container */}
          <div
            className="relative w-11/12 md:w-3/4 lg:w-1/2 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full rounded-lg"
              src={popupVideo + "?autoplay=1"}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCollection;

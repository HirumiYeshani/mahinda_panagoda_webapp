import React from "react";

const videos = [
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
  "https://www.youtube.com/embed/Wcpj_RHRKiI?si=uciJ2d_93lpRYxOg",
  "https://www.youtube.com/embed/Wcpj_RHRKiI?si=uciJ2d_93lpRYxOg",
  "https://www.youtube.com/embed/QpwpLjiCTO4?si=GSNHcFroMEx0FLMq",
  "https://www.youtube.com/embed/mG7z3k43RKg?si=4ZeewmzQ3LPRQWBJ",
];

const VideoCollection = () => {
  return (
    <div className="w-full mx-auto">

      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="md:text-[10px] text-[20px] font-[belda] text-ternary/70 mb-2">
          STORIES IN MOTION
        </h2>
        <h3 className="md:text-[36px] text-[25px] md:leading-[41px] leading-[62px] font-[belda] font-semibold">
          Video Collections
        </h3>
      </div>

      {/* Dynamic 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <div
            key={i}
            className="relative aspect-video w-full overflow-hidden rounded-lg"
          >
            <iframe
              className="w-full h-full rounded-lg"
              src={video}
              title={`YouTube video ${i + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Optional fade effect at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCollection;

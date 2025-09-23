import { useState } from "react";
import frame from "../../assets/img/publicfigures/frame.png";
import bg from "../../assets/img/publicfigures/back.png";
import person1 from "../../assets/img/publicfigures/person1.jpg";
import person2 from "../../assets/img/publicfigures/person2.jpg";
import person3 from "../../assets/img/publicfigures/person3.jpg";
import { Maximize2 } from "lucide-react";
import animationData from "../../assets/img/publicfigures/f.json";
import Lottie from "lottie-react";
import arrow from "../../assets/img/publicfigures/arrow.svg";

type Testimonial = {
  id: number;
  name: string;
  date: string;
  photo: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person1,
  },
  {
    id: 2,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
  },
  {
    id: 3,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
  },
  {
    id: 4,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person1,
  },
  {
    id: 5,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
  },
  {
    id: 6,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
  },
  {
    id: 7,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person1,
  },
  {
    id: 8,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
  },
  {
    id: 9,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
  },
  {
    id: 10,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
  },
  {
    id: 11,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
  },
  {
    id: 12,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person1,
  },
  {
    id: 13,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
  },
  {
    id: 14,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
  },
];

const PublicFigures = () => {
  const [selectedCard, setSelectedCard] = useState<Testimonial | null>(null);

  const [visibleCount, setVisibleCount] = useState(3 * 3);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleShowMore = () => {
    if (visibleCount >= testimonials.length) {
      setVisibleCount(3 * 3);
      setOverlayVisible(true);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, testimonials.length));
      setOverlayVisible(false);
    }
  };

  const isAllVisible = visibleCount >= testimonials.length;

  return (
    <>
      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-lg font-belda text-ternary/70 mb-2 uppercase tracking-wider">
          Testimonials
        </h1>
        <h1 className="md:text-5xl text-3xl leading-[41px] sm:leading-[62px] font-belda font-semibold">
          Public Figures
        </h1>
      </div>

      {/* Grid */}
      <div className="relative">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {testimonials.slice(0, visibleCount).map((item, idx) => {
            const itemsPerRow = 3;
            const totalVisible = visibleCount;
            const startOfLastRow =
              totalVisible - (totalVisible % itemsPerRow || itemsPerRow);
            const isLastRowItem = overlayVisible && idx >= startOfLastRow;

            return (
              <div
                key={item.id}
                className={`rounded-xl flex flex-col items-center text-center relative overflow-hidden ${
                  isLastRowItem ? "" : ""
                }`}
              >
                {/* Responsive aspect ratio wrapper */}
                <div
                  className="w-full relative 
                  aspect-[4/5] md:aspect-[4/5] sm:aspect-[5/6] xs:aspect-[1/1] pt-6"
                >
                  {/* Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${bg})` }}
                  ></div>

                  {/* Maximize icon */}
                  <button
                    onClick={() => setSelectedCard(item)}
                    className="absolute top-6 right-6 p-1.5 rounded-lg border-2 border-secondary text-secondary cursor-pointer z-50"
                  >
                    <Maximize2 size={18} />
                  </button>

                  {/* Foreground */}
                  <div className="relative z-10 flex flex-col items-center h-full p-5">
                    <div className="relative w-57 h-70 mb-4">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-[67%] h-[66%] object-cover rounded-full absolute grayscale-50 top-[12%] left-1/2 transform -translate-x-1/2"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none translate-y-17">
                        <Lottie
                          animationData={animationData}
                          loop
                          className="w-24 h-24"
                        />
                      </div>
                      <img
                        src={frame}
                        alt="frame"
                        className="absolute inset-0 w-full h-full pointer-events-none z-30"
                      />
                    </div>

                    <h3 className="text-xl">{item.name}</h3>
                    <p className="text-lg font-light mt-3">{item.date}</p>
                  </div>

                  {/* Overlay */}
                  {isLastRowItem && (
                    <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-white to-transparent pointer-events-none z-40"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Show more / less */}
      <div
        onClick={handleShowMore}
        className="flex flex-col items-center cursor-pointer"
      >
        <img src={arrow} alt="arrow" className="w-10 h-10" />
        <span className="text-lg underline">
          {isAllVisible ? "Show Less Images" : "Show More Images"}
        </span>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative w-11/12 max-w-lg rounded-xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale-50"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>

            <div className="relative z-10 p-6 flex flex-col items-center text-center">
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 cursor-pointer text-2xl font-bold text-black"
              >
                ×
              </button>

              <div className="relative w-72 h-80 mb-4">
                <img
                  src={selectedCard.photo}
                  alt={selectedCard.name}
                  className="w-[67%] h-[66%] object-cover rounded-full absolute top-[12%] left-1/2 transform -translate-x-1/2 grayscale-50"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none translate-y-20">
                  <Lottie
                    animationData={animationData}
                    loop
                    className="w-32 h-32"
                  />
                </div>
                <img
                  src={frame}
                  alt="frame"
                  className="absolute inset-0 w-full h-full pointer-events-none z-30"
                />
              </div>

              <h3 className="text-2xl text-black">{selectedCard.name}</h3>
              <p className="text-xl font-light mt-3 text-black">
                {selectedCard.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PublicFigures;

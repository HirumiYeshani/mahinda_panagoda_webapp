import { useState } from "react";
import frame from "../../assets/img/publicfigures/frame.png";
import bg from "../../assets/img/publicfigures/back.png";
import person1 from "../../assets/img/publicfigures/person1.jpg";
import person2 from "../../assets/img/publicfigures/person2.jpg";
import person3 from "../../assets/img/publicfigures/person3.jpg";
import { Maximize2 } from "lucide-react";
import flame from "../../assets/img/publicfigures/f.json";
import Lottie from "lottie-react";
import arrow from "../../assets/img/publicfigures/arrow.svg";

type Testimonial = {
  id: number;
  name: string;
  date: string;
  photo: string;
  birthDate: string;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person1,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 2,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 3,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 4,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person1,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 5,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 6,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 7,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person1,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 8,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 9,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 10,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 11,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 12,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person1,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 13,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person2,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
  {
    id: 14,
    name: "Late Mr. Mahilal Senevirathne (Press Secretary of Hon. Sajith Premadasa)",
    date: "27 September 2020",
    photo: person3,
    birthDate: "12 March 1950",
    feedback:
      "We are truly grateful for the compassionate and professional service provided during our most difficult time. The arrangements were handled with great care and dignity.",
  },
];

const PublicFigures = () => {
  const [selectedCard, setSelectedCard] = useState<Testimonial | null>(null);

  const [visibleCount, setVisibleCount] = useState(3 * 3);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const [mobileVisibleCount, setMobileVisibleCount] = useState(4);
  const [mobileOverlayVisible, setMobileOverlayVisible] = useState(true);

  const handleShowMoreDesktop = () => {
    if (visibleCount >= testimonials.length) {
      setVisibleCount(3 * 3);
      setOverlayVisible(true);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, testimonials.length));
      setOverlayVisible(false);
    }
  };

  const handleShowMoreMobile = () => {
    if (mobileVisibleCount >= testimonials.length) {
      setMobileVisibleCount(4);
      setMobileOverlayVisible(true); 
    } else {
      setMobileVisibleCount((prev) => Math.min(prev + 1, testimonials.length));
      setMobileOverlayVisible(false); 
    }
  };
  const isAllVisibleDesktop = visibleCount >= testimonials.length;
  const isAllVisibleMobile = mobileVisibleCount >= testimonials.length;

  return (
    <>
      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-sm font-belda text-ternary/70 mb-2 uppercase tracking-wider">
          Testimonials
        </h1>
        <h1 className="md:text-5xl text-3xl leading-[41px] sm:leading-[62px] font-belda font-semibold">
          Public Figures
        </h1>
      </div>

      {/* Desktop & Tablet Section */}
      <div className="hidden sm:block">
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
                onClick={() => setSelectedCard(item)}
                className={`rounded-xl flex flex-col items-center text-center relative overflow-hidden ${
                  isLastRowItem ? "" : ""
                }`}
              >
                <div className="w-full relative aspect-[5/4] md:aspect-[5/4] sm:aspect-[4/3] pt-1">
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
                  {/* Card */}
                  <div className="relative z-10 flex flex-col items-center h-full p-5">
                    <div className="relative w-50 h-60 mb-4 ">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-[67%] h-[66%] object-cover rounded-full absolute grayscale-50 top-[12%] left-1/2 transform -translate-x-1/2"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none translate-y-17">
                        <Lottie
                          animationData={flame}
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
                    <p className="text-lg font-light mt-3 mb-5">{item.date}</p>
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

        {/* Show more / less buttons in Desktop */}
        <div
          onClick={handleShowMoreDesktop}
          className="flex flex-col items-center cursor-pointer"
        >
          <img
            src={arrow}
            alt="arrow"
            className={`w-10 h-10 transition-transform duration-300 ${
              isAllVisibleDesktop ? "rotate-180" : ""
            }`}
          />
          <span className="text-lg underline">
            {isAllVisibleDesktop ? "Show Less Figures" : "Show More Figures"}
          </span>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="sm:hidden">
        <div className="grid grid-cols-1 gap-6 w-full">
          {testimonials.slice(0, mobileVisibleCount).map((item, idx) => {
            const isLastVisibleCardInitially =
              mobileOverlayVisible && idx === mobileVisibleCount - 1;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedCard(item)}
                className="rounded-xl flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="w-full relative aspect-[5/4] pt-1">
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

                  {/* Card */}
                  <div className="relative z-10 flex flex-col items-center h-full p-5">
                    <div className="relative w-57 h-70 mb-4">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-[67%] h-[66%] object-cover rounded-full absolute grayscale-50 top-[12%] left-1/2 transform -translate-x-1/2"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none translate-y-17">
                        <Lottie
                          animationData={flame}
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
                    <p className="text-lg font-light mt-3 mb-5">{item.date}</p>
                  </div>

                  {/* Overlay */}
                  {isLastVisibleCardInitially && (
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-40"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Less buttons for Mobile */}
        <div
          onClick={handleShowMoreMobile}
          className="flex flex-col items-center cursor-pointer mt-6"
        >
          <img
            src={arrow}
            alt="arrow"
            className={`w-10 h-10 transition-transform duration-300 ${
              isAllVisibleMobile ? "rotate-180" : ""
            }`}
          />
          <span className="text-lg underline">
            {isAllVisibleMobile ? "Show Less Figures" : "Show More Figures"}
          </span>
        </div>
      </div>

      {/* Desktop / Tablet Modal */}
      {selectedCard && (
        <div className="hidden sm:flex fixed inset-0 bg-black/50 items-center justify-center z-50">
          <div className="relative w-11/12 max-w-4xl rounded-xl overflow-hidden bg-white h-[480px]">
            {/* Content wrapper */}
            <div className="relative z-10 p-6 flex flex-col md:flex-row gap-6">
              {/* Close button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 cursor-pointer text-2xl font-bold text-black"
              >
                ×
              </button>

              {/* Left section */}
              <div className="flex justify-center items-center w-full md:w-1/2 relative mt-10 h-[360px]">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 rounded-xl"
                  style={{ backgroundImage: `url(${bg})` }}
                ></div>

                <div className="relative w-60 h-72">
                  <img
                    src={selectedCard.photo}
                    alt={selectedCard.name}
                    className="w-[67%] h-[66%] object-cover rounded-full absolute top-[12%] left-1/2 transform -translate-x-1/2 grayscale-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none translate-y-20">
                    <Lottie
                      animationData={flame}
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
              </div>

              {/* Right section */}
              <div className="flex flex-col justify-center w-full md:w-1/2 text-left">
                <h3 className="text-2xl mt-10">{selectedCard.name}</h3>
                <p className="text-lg mt-6">
                  <span className="font-semibold">Birth Date:</span>{" "}
                  {selectedCard.birthDate}
                </p>
                <p className="text-lg mt-6">
                  <span className="font-semibold">Death Date:</span>{" "}
                  {selectedCard.date}
                </p>
                <div className="mt-6">
                  <h4 className="text-xl">Family Feedback</h4>
                  <p className="leading-relaxed mt-6">
                    {selectedCard.feedback}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Modal */}
      {selectedCard && (
        <div className="sm:hidden fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative w-11/12 max-w-md rounded-xl overflow-hidden bg-white max-h-[120vh]">
            {/* Close button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 cursor-pointer text-2xl font-bold text-black z-50"
            >
              ×
            </button>

            {/* Mobile Layout */}
            <div className="p-4 flex flex-col items-center text-center overflow-y-auto">
              {/* Card Image */}
              <div className="relative w-52 h-60 mb-4 mt-4">
                <img
                  src={selectedCard.photo}
                  alt={selectedCard.name}
                  className="w-[70%] h-[65%] object-cover rounded-full absolute top-[12%] left-1/2 transform -translate-x-1/2 grayscale-50"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none translate-y-16">
                  <Lottie
                    animationData={flame}
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

              {/* Right Section */}
              <h3 className="text-xl">{selectedCard.name}</h3>
              <p className=" mt-4">
                <span>Birth:</span> {selectedCard.birthDate}
              </p>
              <p className="mt-4">
                <span>Death:</span> {selectedCard.date}
              </p>

              <div className="mt-4 text-center w-full">
                <h4 className="text-lg">Family Feedback</h4>
                <p className="leading-relaxed mt-4 mb-4">
                  {selectedCard.feedback}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PublicFigures;

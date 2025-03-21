"use client";
import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Central from "../assets/province/Central Province.png";
import Eastern from "../assets/province/Eastern Province.png";
import North_Central from "../assets/province/North Central.png";
import North_Western from "../assets/province/North Western.png";
import Sabaragamuwa from "../assets/province/Sabaragamuwa.png";
import Southern from "../assets/province/Southern Province.png";
import Uva from "../assets/province/Uva Province.png";
import Western from "../assets/province/Western Province.png";
import Northern from "../assets/province/Northern Province.png";
import { useRouter } from "next/navigation";

const provinces = [
  {
    id: 1,
    name: "Western",
    image: Western,
    description:
      "Economic hub with Colombo, bustling cities, coastal beauty, nightlife, and cultural landmarks.",
  },
  {
    id: 2,
    name: "Southern",
    image: Southern,
    description:
      "Pristine beaches, wildlife, colonial heritage, and vibrant fishing communities.",
  },
  {
    id: 3,
    name: "Central",
    image: Central,
    description:
      "Home to Kandy, tea plantations, mountains, and ancient temples.",
  },
  {
    id: 4,
    name: "Eastern",
    image: Eastern,
    description:
      "Stunning beaches, diverse communities, surfing hotspots, and Trincomalee’s harbor.",
  },
  {
    id: 5,
    name: "Northern",
    image: Northern,
    description: "Rich Tamil culture, Jaffna, Hindu temples, and war history.",
  },
  {
    id: 6,
    name: "North Central",
    image: North_Central,
    description: "Ancient ruins, Sigiriya, Anuradhapura, and vast dry plains.",
  },
  {
    id: 7,
    name: "Sabaragamuwa",
    image: Sabaragamuwa,
    description:
      "Gem mining, lush rainforests, waterfalls, and traditional culture.",
  },
  {
    id: 8,
    name: "North Western",
    image: North_Western,
    description:
      "Historic sites, coconut plantations, fishing, and industrial zones.",
  },
  {
    id: 9,
    name: "Uva",
    image: Uva,
    description:
      "The Uva Province is one of the nine provinces of Sri Lanka. You can explore all cities and destinations.",
  },
];

const ProvincePart = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const router = useRouter();

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === provinces.length - 1 ? 0 : prev + 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? provinces.length - 1 : prev - 1));
  };

  const getVisibleProvinces = () => {
    const prevIndex = (currentIndex - 1 + provinces.length) % provinces.length;
    const nextIndex = (currentIndex + 1) % provinces.length;
    return [
      provinces[prevIndex],
      provinces[currentIndex],
      provinces[nextIndex],
    ];
  };

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 bg-white text-black z-40">
      <h2 className="text-3xl font-extrabold text-center flex-1">
        EXPLORE ALL NINE REGIONS
      </h2>
      {/* Title & Description */}
      <div className="w-full flex items-center px-4 justify-between mt-3 pb-4">
        {/* Subtitle - Centered */}
        <p className="text-lg text-center w-full md:w-2/3 mx-auto pl-8">
          Sri Lanka comprises nine provinces, each offering unique landscapes
          and cultural experiences.
        </p>

        {/* Navigation Buttons - End */}
        <div className="space-x-2 justify-end hidden md:block">
          <button
            onClick={prevSlide}
            className="text-gray-400 p-2 rounded-full border border-gray-400"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-gray-400 p-2 rounded-full border border-gray-400"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* province Slider */}
      <div className="grid grid-cols-12 gap-2 w-full justify-center items-start px-2 lg:px-12">
        {getVisibleProvinces().map((province, idx) => (
          <div
            key={province.id}
            onClick={() => router.push(`/see-all?id=${province.id}`)}
            className={`flex flex-col justify-start items-center transition-all duration-500 
      ${
        idx === 1
          ? "md:col-span-6 col-span-12 w-full  h-[520px] flex justify-center"
          : "md:col-span-3 hidden md:flex h-[320px]"
      }`}
          >
            {/* Image & Text Container */}
            <div className="w-full h-full flex flex-col ">
              <div className="overflow-hidden">
                <Image
                  src={province.image}
                  alt={province.name}
                  width={500}
                  height={idx === 1 ? 420 : 320}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
                />
              </div>

              {/* Text Inside The Div */}
              <div className="p-2 text-start bg-white">
                <h3 className="text-lg font-extrabold">
                  {province.name} Province
                </h3>
                <p className="text-gray-600 text-sm font-semibold">
                  {province.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProvincePart;

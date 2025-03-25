"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
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
import ArrowProvince from "@/assets/svgs/ArrowProvince";
import ArrowLeft from "@/assets/svgs/ArrowLeft";
import ArrowRight from "@/assets/svgs/ArrowRight";
import ArrowLeftBlack from "@/assets/svgs/ArrowLeftBlack";
import ArrowRightBlack from "@/assets/svgs/ArrowRightBlack";
import FollowCursor from "./animation/FollowCursor";

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
  interface Province {
    id: number;
    name: string;
    image: StaticImageData;
    description: string;
  }

  const [selectedProvince, setSelectedProvince] = useState<Province | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(1);
  const router = useRouter();
  const [showFollowCursor, setShowFollowCursor] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? provinces.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === provinces.length - 1 ? 0 : prev + 1));
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

  const handleClickProvince = (province: any) => {
    if (province.id === 1) {
      setShowFollowCursor(true);
    } else {
      setShowFollowCursor(false);
    }

    window.location.href = `/see-all?id=${province.id}`;
  };

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 bg-white text-black z-40">
      <h2 className="text-4xl font-anton text-center flex-1">
        EXPLORE ALL NINE REGIONS
      </h2>
      {/* Title & Description */}
      <div className="w-full flex items-center px-4 justify-between mt-3 pb-4">
        {/* Subtitle - Centered */}
        <p className="text-base text-center w-full md:w-2/3 mx-auto md:marker:pl-8">
          Sri Lanka comprises nine provinces, each offering unique landscapes
          and cultural experiences: you can explore visiting ancient cities,
          highlands, beaches, and wildlife parks.
        </p>

        {/* Navigation Buttons - End */}
        <div className="space-x-2 justify-end hidden md:block ">
          <button onClick={prevSlide} className="text-black">
            <ArrowLeftBlack />
          </button>
          <button onClick={nextSlide} className="text-black">
            <ArrowRightBlack />
          </button>
        </div>
      </div>

      {/* province Slider */}
      <div className="grid grid-cols-12 gap-2 w-full justify-center items-start px-2 lg:px-12">
        {selectedProvince && (
          <div className="absolute inset-0 z-20 pointer-events-none">
            <FollowCursor
              offsetX={-10}
              cardWidth="50px"
              rotationFactor={40}
              enableTilt={true}
              animationConfig={{ mass: 5, tension: 350, friction: 40 }}
              wheelConfig={{ mass: 1, tension: 200, friction: 30 }}
            >
              {""}
            </FollowCursor>
          </div>
        )}

        {getVisibleProvinces().map((province, idx) => (
          <div
            key={province.id}
            className={`relative flex flex-col justify-start items-center transition-all duration-500
        ${
          idx === 1
            ? "md:col-span-6 col-span-12 w-full h-full flex justify-center"
            : "md:col-span-3 hidden md:flex h-full"
        }`}
            onMouseEnter={() => {
              if (idx === 1) {
                setShowFollowCursor(true);
                setSelectedProvince(province);
              }
            }}
            onMouseLeave={() => {
              if (idx === 1) {
                setShowFollowCursor(false);
                if (selectedProvince?.id === province.id) {
                  setSelectedProvince(null);
                }
              }
            }}
            onClick={() => {
              if (idx === 1) {
                window.location.href = `/see-all?id=${province.id}`;
              }
            }}
          >
            {/* Image & Text Container */}
            <div className="relative w-full h-full flex flex-col">
              <div className="overflow-hidden relative z-10">
                <Image
                  src={province.image}
                  alt={province.name}
                  className="w-full h-full object-cover transition-transform duration-[300ms] ease-in-out transform origin-center hover:scale-110"
                />
              </div>

              <div className="p-2 text-start bg-white flex justify-between items-center relative z-10">
                <div>
                  <h3 className="text-lg font-anton">
                    {province.name} Province
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {province.description}
                  </p>
                </div>
                {idx === 1 && <ArrowProvince />}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-x-2 justify-center block md:hidden mt-8">
        <button onClick={prevSlide} className="text-black ">
          <ArrowLeftBlack />
        </button>
        <button onClick={nextSlide} className="text-black ">
          <ArrowRightBlack />
        </button>
      </div>
    </div>
  );
};

export default ProvincePart;

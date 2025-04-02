"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Castle from "../assets/Categories/Castle.png";
import Adventure from "../assets/Categories/Adventure.png";
import Culture from "../assets/Categories/Culture.png";
import Hill from "../assets/Categories/Hill.png";
import Northern from "../assets/Categories/Northern.png";
import WildLife from "../assets/Categories/WildLife.png";
import BgImg from "../assets/BG Image.png";
import Navbar from "./Navbar";
import ArrowLeft from "@/assets/svgs/ArrowLeft";
import ArrowRight from "@/assets/svgs/ArrowRight";

const sliderData = [
  {
    image: Castle,
    title: "Coastal Region",
    description:
      "Sri Lanka’s beautiful coastline with beaches, surfing spots, and harbours.",
  },
  {
    image: Hill,
    title: "Hill Country",
    description:
      "Famous for its mountains, tea plantations, waterfalls, and cool climate.",
  },
  {
    image: WildLife,
    title: "Wildlife & Nature",
    description:
      "National parks, safaris, rainforests, and eco-tourism hotspots.",
  },
  {
    image: Northern,
    title: "Northern Region",
    description: "Rich in Tamil culture, history, and remote beaches.",
  },

  {
    image: Adventure,
    title: "Adventure & Eco-Tourism",
    description: "Best for adventure sports, trekking, and nature exploration.",
  },
  {
    image: Culture,
    title: "Cultural Triangle",
    description:
      "Ancient capitals, UNESCO heritage sites, and cultural landmarks.",
  },
];

const Hero = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollSpeed = 1;
  const [isUserHovering, setIsUserHovering] = useState(false);

  useEffect(() => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    slider.innerHTML += slider.innerHTML; // Duplicate content for smooth looping

    let animationFrame: number;

    const scrollSlider = () => {
      if (!isUserScrolling && !isUserHovering) {
        slider.scrollLeft += scrollSpeed;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollSlider);
    };

    animationFrame = requestAnimationFrame(scrollSlider);

    return () => cancelAnimationFrame(animationFrame);
  }, [isUserScrolling, isUserHovering]);

  const handleManualScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    setIsUserScrolling(true);

    const slider = sliderRef.current;
    const scrollAmount = direction === "left" ? -200 : 200;

    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(() => setIsUserScrolling(false), 1000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Image Section */}
      <div className="relative w-full h-[90vh] md:h-[75vh] ">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full bg-center overflow-hidden">
          <Image
            src={BgImg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          {/*  Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
        </div>

        {/* Navbar  */}
        <div className="absolute top-0 left-0 w-full ">
          <Navbar />
        </div>

        {/* Hero Content  */}
        <div className="relative z-30 flex flex-col justify-end items-start text-left text-white px-8 pb-10 h-full w-full scale-up">
          <h1 className="text-3xl md:text-6xl font-anton">EXPLORE SRI LANKA</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl font-light">
            Discover the breathtaking beauty and rich heritage of Sri Lanka, an
            island where adventure and tranquility go hand in hand. Whether
            you're drawn to sun-kissed beaches, the lush greenery of the hill
            country, or the timeless splendor of cultural landmarks, Sri Lanka
            offers something for every traveler.
          </p>

          {/* Search Input and Navigation Arrows */}
          <div className="flex justify-between w-full items-center mt-6 gap-2 md:gap-0">
            <input
              type="text"
              placeholder="Search Here"
              className="p-3 w-full md:w-1/2  rounded-full bg-transparent text-gray-400 border border-gray-400 placeholder-white focus:outline-none"
            />

            {/* Navigation Arrows */}
            <div className="flex justify-end items-center gap-3">
              <button onClick={() => handleManualScroll("left")}>
                <ArrowLeft />
              </button>
              <button onClick={() => handleManualScroll("right")}>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Section  */}
      <div
        ref={sliderRef}
        className="flex space-x-1 w-full h-[350px] overflow-hidden bg-black"
        onMouseEnter={() => setIsUserHovering(true)}
        onMouseLeave={() => setIsUserHovering(false)}
      >
        {sliderData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-[250px] flex-shrink-0 overflow-hidden relative"
          >
            <img
              src={item.image.src}
              alt={item.title}
              className="w-full h-[350px] transition-transform duration-[600ms] ease-in-out transform origin-center hover:scale-110"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent text-white p-4">
              <div>
                <h2 className="text-xl font-anton leading-tight font-semibold">{item.title}</h2>
                <p className="text-sm mt-2">
                  {/* {item.description} */}
                  {item.description.length > 65
                    ? `${item.description.slice(0, 65)}...`
                    : item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

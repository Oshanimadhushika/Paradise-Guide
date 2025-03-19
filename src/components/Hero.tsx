// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import Image, { StaticImageData } from "next/image";
// import type { FC } from "react";
// import Tiger_hed from "../assets/tiger_hed.jpeg";
// import Tea_plants from "../assets/tea_plants_hed.jpg";
// import Kandy_Perahara from "../assets/kandy-perahera-cover-1.jpg";
// import Trees from "../assets/about_2.jpeg";
// import Daladha_1_hed from "../assets/daladha_hed.png";
// import ParadiseGuideLogo from "../assets/Paradise Guide logo.png";
// import Link from "next/link";

// // Define types for images
// interface ImageAsset {
//   src: StaticImageData;
//   alt: string;
// }

// const Hero: FC = () => {
//   const [imageIndex, setImageIndex] = useState<number>(0);
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

//   const imageUrls: ImageAsset[] = useMemo(
//     () => [
//       { src: Tiger_hed, alt: "Tiger" },
//       { src: Tea_plants, alt: "Tea Plants" },
//       { src: Kandy_Perahara, alt: "Kandy Perahara" },
//       { src: Trees, alt: "Trees" },
//       { src: Daladha_1_hed, alt: "Daladha" },
//     ],
//     []
//   );

//   useEffect(() => {
//     const nextImage = () => {
//       setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
//     };

//     const intervalId = setInterval(nextImage, 3000);

//     return () => clearInterval(intervalId);
//   }, [imageUrls.length]);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src={imageUrls[imageIndex].src}
//           alt={imageUrls[imageIndex].alt}
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
//       </div>

//       {/* Navbar */}
//       <nav className="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent z-50">
//         <div>
//           <button onClick={() => (window.location.href = "/")}>
//             <Image
//               src={ParadiseGuideLogo}
//               alt="Paradise Guide Logo"
//               width={110}
//               height={50}
//             />
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8">
//           {["Home", "Destinations", "About", "Gallery", "Contact"].map(
//             (item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-white/90 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
//               >
//                 {item}
//               </a>
//             )
//           )}
//         </div>

//         <div className="hidden md:block">
//           <button className="px-4 py-2 border border-white/30 text-white hover:bg-white/10 transition-all duration-300 rounded-md text-sm">
//             Book Now
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-white md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
//           aria-label="Toggle menu"
//         >
//           <HiMenuAlt3 size={28} />
//         </button>

//         {/* Mobile Menu */}
//         <div
//           className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black/95 to-black/90 backdrop-blur-sm md:hidden transition-all duration-300 z-50 ${
//             isMenuOpen
//               ? "opacity-100 visible"
//               : "opacity-0 invisible pointer-events-none"
//           }`}
//         >
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="absolute top-7 right-8 text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
//             aria-label="Close menu"
//           >
//             <HiX size={28} />
//           </button>

//           <div className="absolute top-6 left-8">
//             <Link href="/">
//               <Image
//                 src={ParadiseGuideLogo}
//                 alt="Paradise Guide Logo"
//                 width={110}
//                 height={50}
//               />
//             </Link>
//           </div>

//           <div className="flex flex-col items-center justify-center h-full gap-8">
//             {["Home", "Destinations", "About", "Gallery", "Contact"].map(
//               (item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-white/90 hover:text-white transition-colors duration-300 text-lg uppercase tracking-wider"
//                 >
//                   {item}
//                 </a>
//               )
//             )}
//             <button className="px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition-all duration-300 rounded-md text-lg mt-4">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Title and description */}
//       <div className="absolute top-32 left-8 max-w-xl">
//         <h1 className="text-6xl font-playfair font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
//           Paradise Guide
//         </h1>
//         <p className="text-white text-xl mt-4 font-semibold leading-relaxed drop-shadow-xl">
//           Let us guide you through an unforgettable journey in this tropical
//           paradise.
//         </p>
//       </div>

//       {/* Social Media Icons */}
//       <div className="absolute left-8 bottom-8 flex flex-col gap-6">
//         {[
//           { Icon: FaFacebookF, href: "https://facebook.com" },
//           { Icon: FaInstagram, href: "https://instagram.com" },
//           { Icon: FaTwitter, href: "https://twitter.com" },
//           { Icon: FaYoutube, href: "https://youtube.com" },
//         ].map(({ Icon, href }) => (
//           <a
//             key={href}
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
//           >
//             <Icon size={24} />
//           </a>
//         ))}
//       </div>

//       {/* Slideshow dots */}
//       <div className="absolute md:right-8 bottom-8 md:top-1/2 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 flex flex-row md:flex-col gap-2">
//         {imageUrls.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setImageIndex(idx)}
//             className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
//               imageIndex === idx
//                 ? "bg-white scale-125"
//                 : "bg-white/50 hover:bg-white/75"
//             }`}
//             aria-label={`Go to slide ${idx + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Castle from "../assets/Categories/Castle.png";
import Adventure from "../assets/Categories/Adventure.png";
import Culture from "../assets/Categories/Culture.png";
import Hill from "../assets/Categories/Hill.png";
import Northern from "../assets/Categories/Northern.png";
import WildLife from "../assets/Categories/WildLife.png";
import BgImg from "../assets/BG Image.png";
import Navbar from "./Navbar";

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
  const scrollSpeed = 2;

  useEffect(() => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    slider.innerHTML += slider.innerHTML;

    let animationFrame: number;
    const scrollSlider = () => {
      if (!isUserScrolling) {
        slider.scrollLeft += scrollSpeed;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollSlider);
    };

    animationFrame = requestAnimationFrame(scrollSlider);
    return () => cancelAnimationFrame(animationFrame);
  }, [isUserScrolling]);

  const handleManualScroll = (direction: "left" | "right") => {
    setIsUserScrolling(true);

    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }

    setTimeout(() => setIsUserScrolling(false), 3000);
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
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Hero Content  */}
        <div className="relative z-50 flex flex-col justify-end items-start text-left text-white px-8 pb-10 h-full w-full  ">
          <h1 className="text-2xl md:text-6xl font-extrabold">
            EXPLORE SRI LANKA
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
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
              <button
                // onClick={scrollLeft}
                onClick={() => handleManualScroll("left")}
                className="text-white p-2 rounded-full border border-white"
              >
                <FaArrowLeft />
              </button>
              <button
                // onClick={scrollRight}
                onClick={() => handleManualScroll("right")}
                className="text-white p-2 rounded-full border border-white"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Section  */}
      <div
        ref={sliderRef}
        className="flex space-x-1 w-full h-[350px] overflow-hidden bg-black"
      >
        {sliderData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-[300px] flex-shrink-0 overflow-hidden relative"
          >
            <img
              src={item.image.src}
              alt={item.title}
              className="w-full h-[350px]"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent text-white p-4">
              <h2 className="text-2xl font-extrabold">{item.title}</h2>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

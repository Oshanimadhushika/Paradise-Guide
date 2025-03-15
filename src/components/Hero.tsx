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

import { useRef, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ParadiseGuideLogo from "../assets/Paradise Guide logo.png";
import CoconuntTree from "../assets/coconuntTree.png";
import Tea_plants from "../assets/tea_plants_hed.jpg";
import Kandy_Perahara from "../assets/kandy-perahera-cover-1.jpg";
import Trees from "../assets/about_2.jpeg";
import Daladha_1_hed from "../assets/daladha_hed.png";

const sliderData = [
  {
    image: CoconuntTree,
    title: "Coastal Region",
    description:
      "Sri Lanka’s beautiful coastline with beaches, surfing spots, and harbours.",
  },
  {
    image: Trees,
    title: "Hill Country",
    description:
      "Famous for its mountains, tea plantations, waterfalls, and cool climate.",
  },
  {
    image: Daladha_1_hed,
    title: "Wildlife & Nature",
    description:
      "National parks, safaris, rainforests, and eco-tourism hotspots.",
  },
  {
    image: Kandy_Perahara,
    title: "Northern Region",
    description: "Rich in Tamil culture, history, and remote beaches.",
  },

  {
    image: CoconuntTree,
    title: "Hill Country",
    description:
      "Famous for its mountains, tea plantations, waterfalls, and cool climate.",
  },
  {
    image: Daladha_1_hed,
    title: "Wildlife & Nature",
    description:
      "National parks, safaris, rainforests, and eco-tourism hotspots.",
  },
  {
    image: CoconuntTree,
    title: "Northern Region",
    description: "Rich in Tamil culture, history, and remote beaches.",
  },
];

const Hero = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex flex-col w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/shutterstock_397314796.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Section */}
      <div className="flex flex-col w-full h-full z-30">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 bg-transparent text-white w-full">
          <div>
            <Image
              src={ParadiseGuideLogo}
              alt="Paradise Guide Logo"
              width={100}
              height={100}
            />
          </div>
          <ul className="hidden md:flex space-x-5 ">
            {["Home", "Destinations", "Trips"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer px-4 py-2 transition-all hover:bg-slate-400 hover:rounded-full ${
                  active === item
                    ? "bg-gray-400 bg-opacity-30 rounded-full "
                    : ""
                }`}
                onClick={() => setActive(item)}
              >
                {item}
              </li>
            ))}
            <button className="text-2xl">☰</button>
          </ul>
        </nav>

        <div className="flex flex-col items-start justify-center text-left text-white p-3 w-full pl-8 pt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            EXPLORE SRI LANKA
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Discover the breathtaking beauty and rich heritage of Sri Lanka, an
            island where adventure and tranquility go hand in hand. Whether
            you're drawn to sun-kissed beaches, the lush greenery of the hill
            country, or the timeless splendor of cultural landmarks, Sri Lanka
            offers something for every traveler.
          </p>
          <input
            type="text"
            placeholder="Search Here"
            className="mt-6 p-3 w-2/3 md:w-1/3 rounded-full bg-transparent text-gray-400 border border-gray-400 placeholder-white focus:outline-none"
          />
        </div>
      </div>

      {/* Slider Section */}

      <div className="flex flex-col items-center mt-8  w-full z-30">
        {/* Navigation Arrows  */}
        <div className="flex justify-end w-full  px-4 py-2 gap-3">
          <button
            onClick={scrollLeft}
            className="text-white p-2 rounded-full border border-white"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className="text-white p-2 rounded-full border border-white"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Slider Section  */}

        <div ref={sliderRef} className="flex space-x-1 w-full overflow-hidden">
          {sliderData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-[300px] h-[480px] flex-shrink-0 rounded-lg overflow-hidden relative"
            >
              {/* Image without overlay */}
              <Image
                src={item.image}
                alt={item.title}
                width={360}
                height={480}
                className="w-full h-full"
              />

              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent text-white p-4">
                <h2 className="text-2xl font-extrabold">{item.title}</h2>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

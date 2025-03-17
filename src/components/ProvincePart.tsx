// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import { StaticImageData } from "next/image";
// import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
// import SeaGirl from "../assets/seaGirl.jpg";
// import Hikkaduwa from "../assets/hikkaduwa_swiming.png";
// import Dears from "../assets/dear_yala.png";
// import Temples from "../assets/temples.jpg";
// import Elephant from "../assets/elephant.jpeg";
// import Dancing from "../assets/udarata_dancing_hed.jpg";
// import Nallur from "../assets/nallur-kovil-jaffnamost.jpg";
// import Cycling from "../assets/cycling.png";

// interface Slide {
//   url: StaticImageData;
//   title: string;
//   desc: string;
// }

// const About: React.FC = () => {
//   // image
//   const slides: Slide[] = [
//     {
//       url: SeaGirl,
//       title: "Beach Paradise",
//       desc: "Experience the pristine beaches and crystal-clear waters of Sri Lanka's coastline.",
//     },
//     {
//       url: Hikkaduwa,
//       title: "Water Sports",
//       desc: "Dive into thrilling water adventures in Hikkaduwa's vibrant coral reefs.",
//     },
//     {
//       url: Dears,
//       title: "Wildlife Safari",
//       desc: "Encounter majestic wildlife in Yala National Park's natural habitat.",
//     },
//     {
//       url: Temples,
//       title: "Ancient Temples",
//       desc: "Discover the spiritual heritage in Sri Lanka's sacred Buddhist temples.",
//     },
//     {
//       url: Elephant,
//       title: "Gentle Giants",
//       desc: "Meet the magnificent elephants in their natural surroundings.",
//     },
//     {
//       url: Dancing,
//       title: "Cultural Dance",
//       desc: "Experience the vibrant Kandyan dance traditions of Sri Lanka.",
//     },
//     {
//       url: Nallur,
//       title: "Nallur Kovil",
//       desc: "Visit the historic Hindu temples of Northern Sri Lanka.",
//     },
//     {
//       url: Cycling,
//       title: "Adventure Cycling",
//       desc: "Explore scenic landscapes and rural villages on exciting cycling adventures.",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <Container fluid className="px-4 lg:px-8">
//         {/* Title Section */}
//         <Row className="mb-12">
//           <Col lg="6" className="ps-4">
//             <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gray-500">
//               Discover Sri Lanka
//             </h2>
//             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//               From ancient temples to pristine beaches, explore the diverse
//               beauty and rich culture of this tropical paradise.
//             </p>
//           </Col>
//         </Row>

//         {/* 3D Carousel Section */}
//         <div className="w-full max-w-6xl mx-auto">
//           <div className="fade-in min-h-[400px] flex flex-col justify-center rounded-lg">
//             <ThreeDPhotoCarousel images={slides} />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default About;

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import UvaImg from "../assets/uvaImg.png";

// const provinces = [
//   { id: 1, name: "Western", image: UvaImg },
//   { id: 2, name: "Southern", image: UvaImg },
//   { id: 3, name: "Central", image: UvaImg },
//   { id: 4, name: "Eastern", image: UvaImg },
//   { id: 5, name: "Northern", image: UvaImg },
//   { id: 6, name: "North Central", image: UvaImg },
//   { id: 7, name: "Sabaragamuwa", image: UvaImg },
//   { id: 8, name: "North Western", image: UvaImg },
//   { id: 9, name: "Uva", image: UvaImg },
// ];

// const ProvincePart = () => {
//   // const [activeIndex, setActiveIndex] = useState(1);

//   // const slideLeft = () => {
//   //   setActiveIndex((prev) => (prev === 0 ? provinces.length - 1 : prev - 1));
//   // };

//   // const slideRight = () => {
//   //   setActiveIndex((prev) => (prev === provinces.length - 1 ? 0 : prev + 1));
//   // };

//   const [currentIndex, setCurrentIndex] = useState(1);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? provinces.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === provinces.length - 1 ? 0 : prev + 1));
//   };

//   const getVisibleProvinces = () => {
//     const prevIndex = (currentIndex - 1 + provinces.length) % provinces.length;
//     const nextIndex = (currentIndex + 1) % provinces.length;
//     return [
//       provinces[prevIndex],
//       provinces[currentIndex],
//       provinces[nextIndex],
//     ];
//   };

//   return (
//     <div className="w-full flex flex-col items-center py-10 px-4">
//       <h2 className="text-3xl font-bold text-center">
//         EXPLORE ALL NINE REGIONS
//       </h2>

//       <div className="flex w-full flex-col ">
//         <p className="text-lg text-center mt-2 mb-6 w-2/3">
//           Sri Lanka comprises nine provinces, each offering unique landscapes
//           and cultural experiences: you can explore visiting ancient cities,
//           highlands, beaches, and wildlife parks.
//         </p>

//         <div className="flex justify-end w-full  px-4 py-2 gap-3">
//           <button
//             onClick={prevSlide}
//             className="text-white p-2 rounded-full border border-white"
//           >
//             <FaArrowLeft />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="text-white p-2 rounded-full border border-white"
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>

//       <div className="relative w-full max-w-6xl">

//         {/* <div className="grid grid-cols-12 gap-4 items-center">
//           {provinces.map((province, index) => {
//             const isActive = index === activeIndex;
//             const colSpan = isActive ? "col-span-5" : "col-span-3";
//             return (
//               <motion.div
//                 key={province.id}
//                 className={`relative ${colSpan} rounded-lg overflow-hidden`}
//                 layout
//                 transition={{ type: "spring", stiffness: 200, damping: 20 }}
//               >
//                 <Image
//                   src={province.image}
//                   alt={province.name}
//                   width={400}
//                   height={300}
//                   className="w-full h-auto rounded-lg"
//                 />
//                 <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
//                   <h3 className="text-xl font-bold">{province.name}</h3>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div> */}

//         <div className="flex w-full gap-4 justify-center">
//           {getVisibleProvinces().map((province, idx) => (
//             <div
//               key={province.id}
//               className={`flex flex-col ${idx === 1 ? "flex-[5]" : "flex-[3]"}`}
//             >
//               <Image
//                 src={province.image}
//                 alt={province.name}
//                 width={500}
//                 height={300}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//               <h3 className="text-xl font-bold text-center mt-2">
//                 {province.name}
//               </h3>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProvincePart;

"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import UvaImg from "../assets/uvaImg.png";

const provinces = [
  { id: 1, name: "Western", image: UvaImg },
  { id: 2, name: "Southern", image: UvaImg },
  { id: 3, name: "Central", image: UvaImg },
  { id: 4, name: "Eastern", image: UvaImg },
  { id: 5, name: "Northern", image: UvaImg },
  { id: 6, name: "North Central", image: UvaImg },
  { id: 7, name: "Sabaragamuwa", image: UvaImg },
  { id: 8, name: "North Western", image: UvaImg },
  { id: 9, name: "Uva", image: UvaImg },
];

const ProvincePart = () => {


  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    // setCurrentIndex((prev) => (prev === 0 ? provinces.length - 1 : prev - 1));
    setCurrentIndex((prev) => (prev === provinces.length - 1 ? 0 : prev + 1));
  };

  const nextSlide = () => {
    // setCurrentIndex((prev) => (prev === provinces.length - 1 ? 0 : prev + 1));
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
      <div className="w-full flex items-center px-4 justify-between mt-3">
        {/* Subtitle - Centered */}
        <p className="text-lg text-center w-full md:w-1/3 mx-auto pl-6">
          Sri Lanka comprises nine provinces, each offering unique landscapes
          and cultural experiences.
        </p>

        {/* Navigation Buttons - End */}
        <div className="space-x-2 justify-end hidden md:block">
          <button
            onClick={prevSlide}
            className="text-black p-2 rounded-full border border-black"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-black p-2 rounded-full border border-black"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Image Slider */}
      <div className="w-full flex items-center justify-center mt-10">
         <div className="grid  grid-cols-12 gap-4 w-full justify-center items-start mt-4 ">
           {getVisibleProvinces().map((province, idx) => (
          <div
            key={province.id}
            className={`flex flex-col justify-center items-center transition-all duration-500 mx-auto
              ${
                idx === 1
                  ? "md:col-span-5 col-span-10 h-[420px]"
                  : "md:col-span-3 hidden md:flex h-[320px]"
              }`}
          >
            <Image
              src={province.image}
              alt={province.name}
              width={400}
              height={idx === 1 ? 420 : 320}
              className="w-full h-full object-cover"
            />
            <h3 className="text-lg font-extrabold text-start mt-2">
              {province.name} Province
            </h3>
          </div>
        ))}
       
      </div>
      </div>
     

      <div className="space-x-2 justify-end block md:hidden">
          <button
            onClick={prevSlide}
            className="text-black p-2 rounded-full border border-black"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-black p-2 rounded-full border border-black"
          >
            <FaArrowRight />
          </button>
        </div>
    </div>
  );
};

export default ProvincePart;

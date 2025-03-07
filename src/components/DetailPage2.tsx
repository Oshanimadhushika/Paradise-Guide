"use client";
import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import DearYala from "../assets/dear_yala.png";
import AliceCarousel from "react-alice-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "react-alice-carousel/lib/alice-carousel.css";
import ParkingIcon from "@/assets/svgs/ParkingIcon";
import WashRoomIcon from "@/assets/svgs/WashRoomIcon";
import SafetyIcon from "@/assets/svgs/SafetyIcon";
import ShopIcon from "@/assets/svgs/ShopIcon";
import VisitorsIcon from "@/assets/svgs/VisitorsIcon";
import AppStore from "../assets/appleStore.png";
import PlayStore from "../assets/playStore.png";
import MobileImg from "../assets/mobileImg.png";
import QRCodeComponent from "./QRCodeComponent";
import ParadiseGuideLogo from "../assets/Paradise Guide logo.png";

interface DetailPageProps {
  location_code: any;
}

const attractions = [
  {
    title: "Old Galle Town",
    location: "Galle - Southern Province",
    imgUrl:
      "https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/shutterstock_397314796.jpg",
  },
  {
    title: "Fort Lighthouse",
    location: "Galle - Southern Province",
    imgUrl:
      "https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/shutterstock_397314796.jpg",
  },
];

const DetailPage2: React.FC<DetailPageProps> = ({ location_code }) => {
  const carouselRef = useRef<AliceCarousel>(null);
  const [year, setYear] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setIsMounted(true);
  }, []);

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  const items = attractions.map((item) => (
    <div key={item.title} className="p-2">
      <Image
        src={item.imgUrl}
        alt={item.title}
        width={400}
        height={250}
        priority
        className="rounded-lg"
      />
      <p className="text-black pl-2 bg-white text-sm font-semibold">
        {item.title}
      </p>
      <p className="text-gray-700 pl-2 bg-white text-[12px]">{item.location}</p>
    </div>
  ));

  const facilityData = [
    {
      icon: <ParkingIcon />,
      title: "Parking Facilities",
      description: "Available",
    },
    {
      icon: <WashRoomIcon />,
      title: "Washroom Facilities",
      description: "Available",
    },
    { icon: <SafetyIcon />, title: "Safety Level", description: "High" },
    {
      icon: <ShopIcon />,
      title: "Shops, Restaurants",
      description: "Available",
    },
    {
      icon: <VisitorsIcon />,
      title: "Daily Visitors",
      description: "500-1000",
    },
  ];

  const galleryImages = [
    { url: DearYala, span: "md:col-span-8 md:row-span-11" },
    { url: DearYala, span: "md:col-span-4 md:row-span-9" },
    { url: DearYala, span: "md:col-span-2 md:row-span-2" },
    { url: DearYala, span: "md:col-span-2 md:row-span-2" },
  ];

  const appStoreUrl = "https://apps.apple.com/app-url";
  const playStoreUrl = "https://play.google.com/store/app-url";

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className=" w-full h-screen">
        <div className="w-full inset-0">
          <Image
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/shutterstock_397314796.jpg"
            alt="Galle Dutch Fort"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
            className="w-full"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* logo */}
        <div className="absolute top-10 left-20 text-white">
          <Image src={ParadiseGuideLogo} alt="Logo" width={150} height={50} />
        </div>
        <div className="flex flex-row justify-between items-end pt-64">
          {/* Text Content */}
          <div className=" z-10 text-white p-10 w-1/3 ">
            <h1 className="text-4xl mt-32 font-bold leading-tight">
              Galle Dutch Fort
            </h1>
            <p className="mt-4 text-lg">
              Galle Fort in Sri Lanka, built by the Portuguese in 1588, is a
              UNESCO World Heritage Site...
            </p>
            <button className="mt-6 px-6 py-3 text-white border border-white font-semibold rounded-full shadow-lg hover:bg-gray-200">
              Read More
            </button>
          </div>

          {/* Attractions Nearby */}
          {isMounted && (
            <div className=" p-4 rounded-lg w-[500px]">
              <h3 className="flex justify-end text-white text-xl font-semibold mb-3">
                Attractions Nearby
              </h3>
              <div className="relative">
                <AliceCarousel
                  ref={carouselRef}
                  items={items}
                  disableDotsControls
                  disableButtonsControls
                  responsive={{
                    0: { items: 1 },
                    600: { items: 2 },
                    1024: { items: 3 },
                  }}
                  infinite
                  mouseTracking
                  controlsStrategy="responsive"
                />
                <div className="flex justify-end items-center gap-4">
                  <button
                    onClick={slidePrev}
                    className="p-3 border border-white rounded-full shadow-lg"
                  >
                    <FaArrowLeft className="text-gray-100" />
                  </button>
                  <button
                    onClick={slideNext}
                    className="p-3 border border-white rounded-full shadow-lg"
                  >
                    <FaArrowRight className="text-gray-100" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Facilities Section */}
      <div className="border-t border-b border-gray-300 py-4 mt-10 px-4 pl-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-start">
            {facilityData.map((facility, index) => (
              <div
                key={index}
                className="flex flex-row items-start gap-3 border-r border-gray-300"
              >
                <span className="text-3xl">{facility.icon}</span>
                <div className="flex flex-col items-start text-sm justify-start">
                  <p className=" text-gray-700 font-semibold mt-2">
                    {facility.title}
                  </p>
                  <p className="text-gray-700 flex items-start justify-start">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="p-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-500 px-20">
          Gallery
        </h2>
        <div className="grid grid-cols-12 grid-rows-12 gap-1 px-20">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl ${image.span} group cursor-pointer`}
            >
              <Image
                src={image.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* mobile part */}
      <div className="px-4 md:px-20 pt-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-2 text-black">
          Unlock More with Our Mobile App!
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Looking for more nearby locations, exciting events, top facilities,
          and fun activities? Our mobile app brings you an enhanced experience
          with exclusive features tailored just for you.
        </p>

        {/* Grid Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          {/* Left QR Code */}
          <div className="flex flex-col items-center">
            <div>
              <QRCodeComponent value={appStoreUrl} />
            </div>

            {/* App Store Button */}
            <div>
              <Image
                src={AppStore}
                alt="Download on the App Store"
                width={150}
                height={50}
              />
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="w-60 md:w-72">
            <Image
              src={MobileImg}
              alt="Download on the App Store"
              width={150}
              height={50}
            />
          </div>

          {/* Google Play Button */}
          <div className="flex flex-col items-center">
            <div>
              <QRCodeComponent value={playStoreUrl} />
            </div>

            {/* App Store Button */}
            <div>
              <Image
                src={PlayStore}
                alt="Download on the App Store"
                width={150}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="text-center text-gray-500 text-sm mt-8">
          © 2025 Paradise Guide |{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Cookies Policy
          </a>
        </div> */}
      </div>

      {/* Footer */}
      <footer className="flex flex-row gap-96 px-24 bg-black text-white text-center py-4">
        <p>Paradise Guide © {year ?? "..."}</p>
        <p>Paradise Guide © {year ?? "..."}</p>
        <p>Paradise Guide © {year ?? "..."}</p>
      </footer>
    </div>
  );
};

export default DetailPage2;

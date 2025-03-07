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
import { Divider } from "antd";
import axios from "axios";

interface DetailPageProps {
  location_code: any;
}

interface PlaceDetails {
  id: number;
  location_id: string;
  location_code: string;
  district: string;
  location_name: string;
  description: string;
  ticket_availability: number;
  latitude: string;
  longitude: string;
  distance: number;
  duration: number;
  warning_data: string;
  contact_number: string;
  gallery: {
    image_path: string;
    credit_by: string;
    image_type: number;
  }[];
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

  {
    title: "Galle Beach",
    location: "Galle - Southern Province",
    imgUrl:
      "https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/shutterstock_397314796.jpg",
  },
];

const DetailPage2: React.FC<DetailPageProps> = ({ location_code }) => {
  const carouselRef = useRef<AliceCarousel>(null);
  const [year, setYear] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [detailData, setDetailData] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      if (!location_code) return;

      try {
        const apiUrl = `https://paradise.aventureit.com/api/location/data`;
        const response = await axios.post(apiUrl, {
          location_id: 0,
          location_code: location_code,
        });

        if (response.data.success) {
          setDetailData(response.data.output);
        } else {
          console.error("Failed!:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaceDetails();
  }, [location_code]);

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
    { url: DearYala, span: " col-span-12 md:col-span-8 md:row-span-11" },
    { url: DearYala, span: "col-span-12 md:col-span-4 md:row-span-9" },
    { url: DearYala, span: " col-span-6 md:col-span-2 md:row-span-2" },
    { url: DearYala, span: "col-span-6 md:col-span-2 md:row-span-2" },
    { url: DearYala, span: "col-span-6 md:col-span-2 md:row-span-2" },
    { url: DearYala, span: "col-span-6 md:col-span-2 md:row-span-2" },
    { url: DearYala, span: "col-span-6 md:col-span-2 md:row-span-2" },
  ];

  const appStoreUrl = "https://apps.apple.com/app-url";
  const playStoreUrl = "https://play.google.com/store/app-url";

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}

      <section
        className="w-full h-full md:h-screen bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/shutterstock_397314796.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="w-full h-full bg-black/40 flex flex-col">
          {/* Logo */}
          <div className="w-full flex justify-center md:justify-start p-6 md:p-10">
            <Image
              src={ParadiseGuideLogo}
              alt="Paradise Guide Logo"
              width={110}
              height={50}
            />
          </div>

          {/* Content & Carousel */}
          <div className="flex flex-col md:flex-row justify-between items-end px-6  gap-6 w-full mt-20 md:mt-72">
            {/* Text Content */}
            <div className="text-white p-6 w-full md:w-1/2">
              <h1 className="text-4xl font-bold leading-tight">
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

            {/* Attractions Carousel */}
            {isMounted && (
              <div className="p-4 w-full md:w-1/2">
                <h3 className="text-white text-xl font-semibold mb-3 text-right">
                  Attractions Nearby
                </h3>
                <div className="">
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
                  />
                </div>

                <div className="flex justify-end items-center gap-4 mt-4">
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
            )}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <div className=" px-10 mt-10  ">
        <Divider className="my-2 bg-gray-300 mb-3" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-start p-4">
            {facilityData.map((facility, index) => (
              <div
                key={index}
                className="flex flex-row items-start  gap-3 border-r border-gray-300 px-2"
              >
                <span className="text-3xl text-center">{facility.icon}</span>
                <div className="flex flex-col items-start justify-start text-sm ">
                  <p className=" text-gray-700 font-semibold mt-2">
                    {facility.title}
                  </p>
                  <p className="text-gray-700 flex items-start justify-start ">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider className="my-2 bg-gray-300 mb-3" />
      </div>

      {/* Gallery Section */}
      <div className="p-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-500 px-20">
          Gallery
        </h2>
        <Divider className="my-2 bg-gray-300 mb-3" />

        <div className="flex flex-wrap gap-4 justify-center pb-5">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 transition-transform transform group`}
            >
              <Image
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105 group-hover:rotate-3 group-hover:opacity-80"
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
          <div className="flex flex-col items-center w-[180px] order-1 md:order-none">
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
          <div className="w-60 md:w-[295px] h-auto flex justify-center order-3 md:order-none">
            <Image
              src={MobileImg}
              alt="Download on the App Store"
              className="w-full"
              // width={150}
              // height={50}
            />
          </div>

          {/* Google Play Button */}
          <div className="flex flex-col items-center  w-[180px] order-2 md:order-none">
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
      </div>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row gap-10 px-24 bg-black text-white items-center py-4 text-center md:text-start">
        <p className="md:text-start w-full">Paradise Guide © {year ?? "..."}</p>
        <p className="md:text-center w-full">
          Paradise Guide © {year ?? "..."}
        </p>
        <p className="md:text-end w-full">Paradise Guide © {year ?? "..."}</p>
      </footer>
    </div>
  );
};

export default DetailPage2;

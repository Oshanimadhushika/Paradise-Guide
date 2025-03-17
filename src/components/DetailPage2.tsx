"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
// import QRCodeComponent from "./QRCodeComponent";
import ParadiseGuideLogo from "../assets/Paradise Guide logo.png";
import { Divider } from "antd";
import axios from "axios";
import { IoMdShare } from "react-icons/io";
import ShareModal from "./ShareModal";
// import Link from "next/link";
import { trackEvent } from "@/lib/gtag";
import AppStoreQr from "@/assets/svgs/AppStoreQr";
import PlayStoreQr from "@/assets/svgs/PlayStoreQr";

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
  washroom_availability: any;
  parking_availability: any;
  shops_availability: any;
  safety_level: any;
  daily_visitors: any;
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);
  const appStoreUrl = "https://apps.apple.com/app-url";
  const playStoreUrl = "https://play.google.com/store/app-url";

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

  const items = attractions.map((item, index) => (
    <div
      key={item.title}
      className=" w-full md:w-[200px] md:min-w-[200px] flex-shrink-0 "
    >
      <Image
        src={item.imgUrl}
        alt={item.title}
        width={200}
        height={200}
        className="w-full md:w-[200px] h-[200px]   object-cover"
        priority
      />
      <div className="bg-white p-2 text-start h-[50px]">
        <p className="text-gray-600 text-sm font-semibold">{item.title}</p>
        <p className="text-gray-500 text-xs">{item.location}</p>
      </div>
    </div>
  ));

  const parkingAvailability = detailData?.parking_availability || [];

  const parkingDescription =
    parkingAvailability.length > 0 ? "Available" : "Unavailable";

  const facilityData = [
    {
      icon: <ParkingIcon />,
      title: "Parking Facilities",
      description: parkingDescription,
    },
    {
      icon: <WashRoomIcon />,
      title: "Washroom Facilities",
      description:
        detailData?.washroom_availability === 1
          ? "Undefined"
          : detailData?.washroom_availability === 2
          ? "Available"
          : "Not Available",
    },
    {
      icon: <SafetyIcon />,
      title: "Safety Level",
      description: detailData?.safety_level || "Not mentioned",
    },
    {
      icon: <ShopIcon />,
      title: "Shops, Restaurants",
      description:
        detailData?.shops_availability === 1
          ? "Undefined"
          : detailData?.shops_availability === 2
          ? "Available"
          : "Not Available",
    },
    {
      icon: <VisitorsIcon />,
      title: "Daily Visitors",
      description: detailData?.daily_visitors || "Not mentioned",
    },
  ];

  const scrollToSection = () => {
    const section = document.getElementById("mobileAppSection");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    trackEvent(
      "read_more_attraction",
      "User Interaction",
      "Read More Button Click"
    );
  };

  const rawDescription = detailData?.description || "";

  const cleanDescription = () => {
    return rawDescription.replace(/^#[^\n]*\n/, "").trim();
  };

  const finalDescription = cleanDescription().slice(0, 350);

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}

      <section
        className="relative w-full h-full lg:h-screen bg-cover bg-center "
        style={{
          backgroundImage: detailData?.gallery?.[0]?.image_path
            ? `url("${detailData.gallery[0].image_path}")`
            : `url("https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/shutterstock_397314796.jpg")`,
        }}
      >
        <div className="w-full h-full flex flex-col">
          <div className="w-full flex justify-between items-center p-5 ">
            {/* Logo */}
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <button onClick={() => (window.location.href = "/")}>
                <Image
                  src={ParadiseGuideLogo}
                  alt="Paradise Guide Logo"
                  width={110}
                  height={50}
                />
              </button>
            </div>

            {/* Share Button */}
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <button
                onClick={() => {
                  trackEvent(
                    "share_attraction",
                    "User Interaction",
                    detailData?.location_name
                  );
                  showModal();
                }}
                className="border-2 border-white text-white font-bold px-4 py-2 flex items-center space-x-2  hover:text-gray-400 hover:border-gray-400 transition-all rounded-full"
              >
                <IoMdShare className="w-5 h-5 mr-2" />
                <span className="hidden md:inline">Share</span>
              </button>

              <ShareModal
                detailData={detailData}
                visible={isModalVisible}
                onClose={handleCancel}
              />
            </div>
          </div>

          {/* Content & Carousel */}
          <div className="w-full flex justify-center bg-black/40 p-3 mt-auto">
            <div className="flex flex-col lg:flex-row items-end px-5 gap-5 md:gap-2 lg:gap-5 w-full pb-1 lg:pb-10 h-fit">
              {/* Text Content */}
              <div className="text-white p-6 lg:p-2 w-full lg:w-1/2">
                <h1 className="text-[48px] font-extrabold leading-tight">
                  {detailData?.location_name}
                </h1>

                <Divider className="my-2 bg-gray-200 mb-3" />

                <div className="mt-4 text-lg">
                  {finalDescription.split("\n").map((line, index) => (
                    <span key={index}>{line}</span>
                  ))}
                  {cleanDescription().length > 350 && "...."}
                </div>

                <button
                  onClick={scrollToSection}
                  className="mt-4 px-6 py-2 text-white border border-white font-semibold rounded-full shadow-lg hover:text-gray-400 hover:border-gray-400"
                >
                  Read More
                </button>
              </div>

              {/* Attractions Carousel */}
              {isMounted && (
                <div className="p-2 w-full lg:w-1/2">
                  <h3 className="text-white text-2xl font-bold mb-3 text-center md:text-right pr-0 md:pr-9">
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
                        600: { items: 3 },
                        1024: { items: 2 },
                        1440: { items: 3 },
                      }}
                      infinite
                      mouseTracking
                    />
                  </div>

                  <div className="flex justify-end items-center gap-4 mt-4 pr-0 md:pr-9">
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
        </div>
      </section>

      {/* Facilities Section */}
      <div className=" px-10 mt-10  ">
        <Divider className="my-2 bg-dividerGrayColour mb-3" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 text-start p-4">
            {facilityData.map((facility, index) => (
              <div
                key={index}
                className="flex items-center justify-center md:justify-start gap-3 px-4"
              >
                <span className="text-3xl">{facility.icon}</span>

                <div className="flex flex-col ">
                  <p className="text-gray-400 text-base  whitespace-normal xl:whitespace-nowrap">
                    {facility.title}
                  </p>
                  <p className="text-gray-400 font-semibold text-lg  whitespace-normal xl:whitespace-nowrap">
                    {facility.description}
                  </p>
                </div>
                {index !== facilityData.length - 1 && (
                  <span className=" hidden md:block w-px bg-gray-300 border border-gray-300 h-full ml-2 justify-end"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        <Divider className="my-2 bg-dividerGrayColour mb-3" />
      </div>

      {/* Gallery Section */}
      <div className="p-10">
        <h2 className="text-[48px] font-bold mb-4 text-gray-500 px-20 ">
          Gallery
        </h2>
        <Divider className="my-2 bg-dividerGrayColour mb-3" />

        <div className="flex flex-wrap gap-4 justify-center pb-5">
          {detailData?.gallery?.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 transition-transform transform group`}
            >
              <Image
                src={item.image_path}
                alt={`Gallery image ${item.credit_by}`}
                className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105 group-hover:rotate-3 group-hover:opacity-80"
                width={300}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>

      {/* mobile part */}
      <div id="mobileAppSection" className="px-4 md:px-20 pt-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-2 text-black">
          Unlock More with Our Mobile App!
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Looking for more nearby locations, exciting events, top facilities,
          and fun activities? Our mobile app brings you an enhanced experience
          with exclusive features tailored just for you. Stay updated with
          real-time recommendations, discover hidden gems, and explore
          everything around you effortlessly.
        </p>

        {/* Grid Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          {/* Left QR Code */}
          <div className="flex flex-col items-center w-[202px] order-1 md:order-none">
            <div>
              {/* <QRCodeComponent value={appStoreUrl} /> */}
              <AppStoreQr />
            </div>

            {/* App Store Button */}
            <div>
              <Image
                src={AppStore}
                alt="Download on the App Store"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="w-60 md:w-[295px] h-auto flex justify-center order-3 md:order-none">
            <Image
              src={MobileImg}
              alt="Download on the App Store"
              className="w-full"
            />
          </div>

          {/* Google Play Button */}
          <div className="flex flex-col items-center  w-[202px] order-2 md:order-none">
            <div>
              {/* <QRCodeComponent value={playStoreUrl} /> */}
              <PlayStoreQr />
            </div>

            {/* App Store Button */}
            <div>
              <Image
                src={PlayStore}
                alt="Download on the App Store"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row gap-10 px-24 bg-black text-white items-center py-4 text-center md:text-start text-sm">
        <p className="md:text-start w-full">PARADISE GUIDE © {year ?? "..."}</p>
        <p className="md:text-center w-full">PRIVACY POLICY</p>
        <p className="md:text-end w-full">COOKIES POLICY</p>
      </footer>
    </div>
  );
};

export default DetailPage2;

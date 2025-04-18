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
import MobileImg from "../assets/mobileImg.png";
import ParadiseGuideLogo from "../assets/Paradise Guide logo.png";
import { Divider } from "antd";
import axios from "axios";
import { IoMdShare } from "react-icons/io";
import ShareModal from "./ShareModal";
import { trackEvent } from "@/lib/gtag";
import AppStoreQr from "@/assets/svgs/AppStoreQr";
import PlayStoreQr from "@/assets/svgs/PlayStoreQr";
import Footer from "./Footer";
import { ScrollAnimations } from "./animation/ScrollAnimations";
import AppStoreBlack from "../assets/AppStore.png";
import PlayStoreBlack from "../assets/GooglePlay.png";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const carouselRefDesktop = useRef<AliceCarousel>(null);
  const carouselRefMobile = useRef<AliceCarousel>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [detailData, setDetailData] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

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
    setIsMounted(true);
  }, []);

  const slidePrevDesktop = () => {
    carouselRefDesktop.current?.slidePrev();
  };

  const slideNextDesktop = () => {
    carouselRefDesktop.current?.slideNext();
  };

  const slidePrevMobile = () => {
    carouselRefMobile.current?.slidePrev();
  };

  const slideNextMobile = () => {
    carouselRefMobile.current?.slideNext();
  };

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

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <ScrollAnimations />

      <section className="relative w-full h-[100vh] lg:h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={
              detailData?.gallery?.[0]?.image_path ||
              "https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/shutterstock_397314796.jpg"
            }
            alt={detailData?.location_name || "Location"}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="relative w-full h-full flex flex-col z-10">
          {/* Header */}
          <div className="w-full flex justify-between items-center p-5">
            {/* Logo */}
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <Link href="/" passHref>
                <Image
                  src={ParadiseGuideLogo}
                  alt="Paradise Guide Logo"
                  width={110}
                  height={50}
                  className="cursor-pointer"
                  onClick={handleLogoClick}
                />
              </Link>
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
                className="border-2 border-white text-white font-bold px-4 py-2 flex items-center space-x-2 hover:text-gray-400 hover:border-gray-400 transition-all rounded-full"
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
          <div className="w-full justify-center bg-black/40 p-3 mt-auto hidden lg:block ">
            <div className="flex flex-col lg:flex-row items-end px-5 gap-5 md:gap-2 lg:gap-5 w-full pb-1 lg:pb-10 h-fit">
              {/* Text Content */}
              <div className="text-white p-6 lg:p-2 w-full lg:w-1/2 scale-up">
                <h1 className="text-3xl md:text-[48px] font-anton leading-tight">
                  {detailData?.location_name}
                </h1>

                <Divider className="my-2 bg-gray-200 mb-3" />

                <div className="mt-4 text-sm md:text-lg">
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

              {/* slider sec */}
              {/* {isMounted && (
                <div className="p-2 w-full lg:w-1/2">
                  <h3 className="text-white text-2xl font-anton mb-3 text-center md:text-right pr-0 md:pr-9">
                    Attractions Nearby
                  </h3>
                  <div className="">
                    <AliceCarousel
                      ref={carouselRefDesktop}
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
                      onClick={slidePrevDesktop}
                      className="p-3 border border-white rounded-full shadow-lg"
                    >
                      <FaArrowLeft className="text-gray-100" />
                    </button>
                    <button
                      onClick={slideNextDesktop}
                      className="p-3 border border-white rounded-full shadow-lg"
                    >
                      <FaArrowRight className="text-gray-100" />
                    </button>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>

        {/* Gradient Overlay for Mobile */}
        <div className="absolute block lg:hidden inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
      </section>

      {/* mobile Content & Carousel */}
      <div className="w-full justify-center bg-black p-3 mt-auto block lg:hidden">
        <div className="flex flex-col lg:flex-row items-end px-5 gap-5 md:gap-2 lg:gap-5 w-full pb-1 lg:pb-10 h-fit">
          <div className="text-white p-6 lg:p-2 w-full lg:w-1/2 scale-up">
            <h1 className="text-[20px] md:text-[48px] font-anton leading-tight">
              {detailData?.location_name}
            </h1>

            <Divider className="my-2 bg-gray-200 mb-3" />

            <div className="mt-4 text-sm md:text-lg">
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

          {/* slider sec */}
          {/* {isMounted && (
              <div className="p-2 w-full lg:w-1/2">
                <h3 className="text-white text-2xl font-anton mb-3 text-center md:text-right pr-0 md:pr-9">
                  Attractions Nearby
                </h3>
                <div className="">
                  <AliceCarousel
                    ref={carouselRefMobile}
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
                    onClick={slidePrevMobile}
                    className="p-3 border border-white rounded-full shadow-lg"
                  >
                    <FaArrowLeft className="text-gray-100" />
                  </button>
                  <button
                    onClick={slideNextMobile}
                    className="p-3 border border-white rounded-full shadow-lg"
                  >
                    <FaArrowRight className="text-gray-100" />
                  </button>
                </div>
              </div>
            )} */}
        </div>
      </div>

      {/* Facilities Section */}
      <div className=" px-10 mt-10 fade-in ">
        <Divider className="my-2 bg-dividerGrayColour mb-3" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5 text-start p-4">
            {facilityData.map((facility, index) => (
              <div
                key={index}
                className="flex flex-row items-center  justify-start gap-3 px-4 relative"
              >
                {/* Icon */}
                <span className="text-3xl flex-shrink-0">{facility.icon}</span>

                {/* Text Content */}
                <div className="flex flex-col text-start">
                  <p className="text-gray-400 text-md lg:text-base whitespace-normal xl:whitespace-nowrap">
                    {facility.title}
                  </p>
                  <p className="text-gray-400 font-semibold text:sm lg:text-lg whitespace-normal xl:whitespace-nowrap">
                    {facility.description}
                  </p>
                </div>

                {/* Vertical Separator (Only on md+ screens) */}
                {index !== facilityData.length - 1 && (
                  <span className="hidden md:block absolute top-0 right-0 w-px bg-gray-300 h-full"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        <Divider className="my-2 bg-dividerGrayColour mb-3" />
      </div>

      {/* Gallery Section */}
      <div className="p-10 fade-in">
        <h2 className="text-[48px] font-anton mb-4 text-gray-500 px-20 ">
          Gallery
        </h2>
        <Divider className="my-2 bg-dividerGrayColour mb-3" />

        <div className="flex flex-wrap gap-4 justify-center pb-5  overflow-hidden">
          {detailData?.gallery?.slice(0, 8).map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 "
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src={item.image_path}
                alt={`Gallery image ${item.credit_by}`}
                className="w-full h-full object-cover rounded-lg transition-transform duration-[600ms] ease-in-out transform origin-center hover:scale-110"
                width={300}
                height={200}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* mobile part */}
      <div id="mobileAppSection" className="px-4 md:px-20 pt-10 fade-in">
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
            <div className="p-3">
              <AppStoreQr />
            </div>

            {/* App Store Button */}
            <div className="w-full px-2">
              <Image
                src={AppStoreBlack}
                alt="Download on the App Store"
                className="w-full h-[50px]"
              />
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="w-60 md:w-[298px] h-auto flex justify-center order-3 md:order-none">
            <Image
              src={MobileImg}
              alt="Download on the App Store"
              className="w-full"
            />
          </div>

          {/* Google Play Button */}
          <div className="flex flex-col items-center  w-[202px] order-2 md:order-none">
            <div className="p-3">
              <PlayStoreQr />
            </div>

            {/* App Store Button */}
            <div className="w-full px-2">
              <Image
                src={PlayStoreBlack}
                alt="Download on the App Store"
                className="w-full h-[50px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DetailPage2;

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image, { StaticImageData } from "next/image";
import "antd/dist/reset.css";

import BgImg from "../../assets/bgImgSeeAll.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppStoreBlack from "@/assets/AppStoreBlack.png";
import PlayStoreBlack from "@/assets/PlayStoreBlack.png";
import MobileImg from "@/assets/mobileImg.png";
import AppStoreQr from "@/assets/svgs/AppStoreQr";
import PlayStoreQr from "@/assets/svgs/PlayStoreQr";
import ParadiseGuideLogo from "@/assets/Paradise Guide logo.png";
import InfiniteScroll from "react-infinite-scroll-component";

import Central from "@/assets/province/Central Province.png";
import Eastern from "@/assets/province/Eastern Province.png";
import North_Central from "@/assets/province/North Central.png";
import North_Western from "@/assets/province/North Western.png";
import Sabaragamuwa from "@/assets/province/Sabaragamuwa.png";
import Southern from "@/assets/province/Southern Province.png";
import Uva from "@/assets/province/Uva Province.png";
import Western from "@/assets/province/Western Province.png";
import Northern from "@/assets/province/Northern Province.png";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const provinceImages: Record<number, StaticImageData> = {
  1: Western,
  2: Southern,
  3: Central,
  4: Eastern,
  5: Northern,
  6: North_Central,
  7: Sabaragamuwa,
  8: North_Western,
  9: Uva,
};

const SeeAllPage = () => {
  const [allPlaces, setAllPlaces] = useState<any[]>([]);
  const [places, setPlaces] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setId(params.get("id"));
    }
  }, []);

  const fetchLimit = 10;

  const fetchLocations = async (page: number) => {
    if (!id) return;
    setLoading(true);

    try {
      const response = await axios.post(
        "https://paradise.aventureit.com/api/location/all",
        { province_id: id, city_id: 0, status: 3, page, limit: fetchLimit }
      );

      if (response.data.success) {
        const newPlaces = response.data.output || [];

        setAllPlaces((prev) =>
          page === 1 ? newPlaces : [...prev, ...newPlaces]
        );
        setPlaces((prev) => (page === 1 ? newPlaces : [...prev, ...newPlaces]));

        setHasMore(newPlaces.length === fetchLimit);
        setCurrentPage(page);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      setAllPlaces([]);
      setPlaces([]);
      setHasMore(true);
      fetchLocations(1);
    }
  }, [id]);

  // Search function
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allPlaces.filter(
        (place) =>
          place.location_name.toLowerCase().includes(searchQuery) ||
          place.city.toLowerCase().includes(searchQuery)
      );
      setPlaces(filtered);
      setHasMore(false);
    } else {
      setPlaces(allPlaces);
      setHasMore(true);
    }
  }, [searchQuery, allPlaces]);

  const numericId = Number(id);
  const selectedImage =
    provinceImages[numericId as keyof typeof provinceImages] || BgImg;

  return (
    <div className="bg-white ">
      <ScrollAnimations />
      <div className="relative w-full h-[90vh] md:h-[75vh] ">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full bg-center overflow-hidden">
          <Image
            src={selectedImage}
            alt="Background"
            className="object-cover w-full h-full"
          />
          {/*  Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
        </div>

        {/* Navbar  */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Hero Content  */}
        <div className="relative z-50 flex flex-col justify-end items-start text-left text-white px-8 pb-10 h-full w-full fade-in">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            {places[0]?.province}
          </h1>
          <p className="mt-1 text-sm md:text-xl max-w-2xl">
            {id === "1"
              ? " Sri Lanka's Western Province pulsates with life, offering a vibrant blend of history, culture, and modern attractions. Explore the bustling capital Colombo, delve into ancient temples and colonial architecture, or witness the captivating Rainbow Kite Festival. This dynamic region is the perfect starting point for your Sri Lankan adventure."
              : id === "2"
              ? "Discover the sun-kissed shores and vibrant culture of the Southern Province. Explore the historic Galle Fort, a UNESCO World Heritage Site, and marvel at the iconic stilt fishermen. Witness the diverse wildlife of Yala National Park, or relax on pristine beaches like Mirissa and Weligama. The Southern Province offers a captivating blend of history, nature, and beach bliss. "
              : id === "3"
              ? " Immerse yourself in the heart of Sri Lanka's history and culture in the Central Province. Explore the sacred city of Kandy, home to the revered Temple of the Tooth Relic, and wander through lush tea plantations, the source of Ceylon's famed brew. Discover the breathtaking landscapes of the Knuckles Mountains and witness the vibrant Perahera procession, a dazzling display of tradition. "
              : id === "4"
              ? "Discover the vibrant tapestry of the Eastern Province, where pristine beaches meet ancient temples and wildlife roams free. Explore the historic city of Trincomalee, relax on the golden sands of Arugam Bay, or witness the diverse wildlife of Kumana National Park. The Eastern Province offers a unique blend of culture, nature, and adventure."
              : id === "5"
              ? "Discover the vibrant cultural tapestry of the Northern Province, where ancient temples, stunning beaches, and a unique blend of Tamil culture await. Explore the bustling city of Jaffna, with its historic Dutch Fort and vibrant markets. Witness the architectural marvels of Nallur Kovil and other Hindu temples, or embark on a serene journey to the sacred island of Nagadeepa. Relax on pristine beaches like Casuarina, or venture further to the idyllic islands of Delft and Neduntheevu. Immerse yourself in the warmth and hospitality of the local people and experience the rich heritage of the Northern Province."
              : id === "6"
              ? " Step back in time and explore the ancient wonders of the North Central Province. Anuradhapura, the provincial capital, boasts a rich history as a flourishing kingdom, with awe-inspiring ruins like the Sri Maha Bodhi tree and the colossal Ruwanweliseya stupa. Witness the grandeur of the Polonnaruwa Kingdom at its former capital, Polonnaruwa, with its intricate temples and royal palaces. Immerse yourself in the spiritual heart of Sri Lanka and discover the fascinating legacy of ancient civilizations. "
              : id === "7"
              ? "Discover the heart of Sri Lankan nature and adventure in the Sabaragamuwa Province. Renowned for its lush landscapes, the province boasts the breathtaking Sinharaja Rainforest, a UNESCO World Heritage Site, and the diverse wildlife of Udawalawe National Park. Witness the majestic elephants at the Pinnawala Elephant Orphanage and embark on a challenging climb to the sacred peak of Adam's Peak. Sabaragamuwa offers a unique blend of natural beauty, cultural treasures, and thrilling experiences.  "
              : id === "8"
              ? " Discover the vibrant heartland of Sri Lanka in the North Western Province. Explore the historic city of Kurunegala, once a flourishing kingdom, and wander through endless stretches of lush coconut plantations. Witness the diverse wildlife of Wilpattu National Park or relax on the pristine beaches of Kalpitiya. The North Western Province offers a unique blend of history, nature, and coastal charm.  "
              : id === "9"
              ? "Discover the scenic beauty and natural wonders of Uva Province. Explore lush tea plantations, witness cascading waterfalls like Dunhinda and Diyaluma, and embark on challenging hikes to stunning viewpoints like Ella Rock. Immerse yourself in the vibrant culture of Badulla, the provincial capital, and experience the thrill of wildlife encounters at Yala National Park, a haven for elephants and leopards. Uva Province offers a captivating blend of nature, adventure, and cultural charm."
              : "Discover the breathtaking beauty and rich heritage of Sri Lanka..."}
          </p>
          <input
            type="text"
            placeholder="Search Here"
            className="p-3 w-full md:w-1/2  rounded-full bg-transparent text-gray-400 border border-gray-400 placeholder-white focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      <div className="mt-6 p-5">
        <InfiniteScroll
          dataLength={places.length}
          next={() => fetchLocations(currentPage + 1)}
          hasMore={hasMore}
          loader={
            <p className="text-center font-bold text-black text-lg mt-3">
              Loading more...
            </p>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            {places.map((place) => (
              <div
                key={place.location_id}
                className="bg-white transition-all duration-300 h-[570px]"
              >
                <a
                  href={`/place/${place.location_code}`}
                  className="flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[456px] overflow-hidden">
                    <Image
                      src={place.thumbnail_path}
                      alt={place.location_name}
                      layout="fill"
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-125"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-extrabold text-black mb-1">
                      {place.location_name.length > 20
                        ? `${place.location_name.slice(0, 20)}...`
                        : place.location_name}
                    </h3>
                    <p className="text-gray-600">{place.city}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>

      <div className="fade-in">
        <div id="mobileAppSection" className="px-4 md:px-20 pt-10">
          <div className="flex justify-center mb-4">
            <Image
              src={ParadiseGuideLogo}
              alt="Paradise Guide Logo"
              width={100}
              height={100}
            />
          </div>
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
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-8">
            {/* Left QR Code */}
            <div className="flex flex-col items-center w-[202px] order-1 lg:order-none">
              <div className="p-3">
                <AppStoreQr />
              </div>

              {/* App Store Button */}
              <div className="w-full px-2">
                <Image
                  src={AppStoreBlack}
                  alt="Download on the App Store"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="w-60 md:w-[295px] h-auto flex justify-center order-3 lg:order-none">
              <Image
                src={MobileImg}
                alt="Download on the App Store"
                className="w-full"
              />
            </div>

            {/* Google Play Button */}
            <div className="flex flex-col items-center  w-[202px] order-2 lg:order-none">
              <div className="p-3">
                <PlayStoreQr />
              </div>

              {/* App Store Button */}
              <div className="w-full px-2">
                <Image
                  src={PlayStoreBlack}
                  alt="Download on the App Store"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeeAllPage;

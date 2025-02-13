"use client";

import React, { useEffect, useState } from "react";
import { Star, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Gallery from "./Gallery";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { IoMdShare } from "react-icons/io";
import axios from "axios";
import ShareModal from "./ShareModal";

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
}

// interface DetailPageProps {
//   place: PlaceDetails;
// }

const DetailPage: React.FC= () => {

  const { location_id, location_code } = useParams();

  console.log("detail page",location_id, location_code);
  
  console.log("Params from useParams:", location_id, location_code);  
  console.log("Current URL:", window.location.href); 

  // const { locationSlug } = useParams();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const placeData = queryParams.get("place")
  //   ? JSON.parse(decodeURIComponent(queryParams.get("place")!))
  //   : null;

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("gallery");

  const [detailData, setDetailData] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  // const locationSlug = place.location_code
  //   .toLowerCase()
  //   .replace(/\s+/g, "-")
  //   .replace(/[^a-z0-9-]/g, "");


  const url = `  https://paradiseguide.netlify.app/detail/${location_id}/${location_code}`;


  // const url = `https://paradiseguide.netlify.app/detail/${location_code}`;
  // const url = `https://paradiseguide.netlify.app/detail/${locationSlug}?place=${encodeURIComponent(
  //   JSON.stringify(placeData)
  // )}`;
  const title = "Check out this amazing page!";
  const imageUrl = "";

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      if (!location_code ) return;

      try {
        const apiUrl = `https://paradise.aventureit.com/api/location/data`;
        const response = await axios.post(apiUrl, {
          location_id: location_id,
          location_code: location_code,
        });

        if (response.data.success) {
          setDetailData(response.data.output);
        }else{
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

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollAnimations />
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-white mb-4 hover:opacity-80"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold">{detailData?.district}</h1>
                <h2 className="text-4xl font-bold mt-2 font-playfair">
                  {detailData?.location_name}
                </h2>
              </div>
              <div className="text-right">
                {/* <div className="flex items-center justify-end">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="text-xl font-bold ml-1">{detailData?.district}</span>
                  <span className="text-sm ml-1">({detailData?.district})</span>
                </div> */}
                {/* <div className="text-2xl font-bold mt-1">
                  ${detailData?.district}
                  <span className="text-sm font-normal">/Person</span>
                </div> */}

                <div className="mt-2">
                  <button className="flex items-center text-white hover:text-gray-800" onClick={showModal}>
                    <IoMdShare className="w-10 h-10 mr-2" />
                  </button>

                  <ShareModal
                  detailData={detailData}
                    visible={isModalVisible}
                    onClose={handleCancel}
                    url={url}
                    title={title}
                    imageUrl={imageUrl}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          {/* <div className="slide-left relative max-w-xl mx-auto mt-8">
            <input
              type="text"
              placeholder="Search places in Sri Lanka..."
              className="w-full px-6 py-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div> */}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="slide-right border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            {["gallery", "about", "important", "route"].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === "gallery" && (
          <div className="scale-up">
            <Gallery />
          </div>
        )}
        {activeTab === "about" && (
          <div className="fade-in prose max-w-none">
            <p className=" text-gray-600 font-serif">
              {detailData?.description}
            </p>
          </div>
        )}
        {activeTab === "important" && (
          <div className="slide-left prose max-w-none whitespace-pre-line">
            <p className="text-black font-serif">
              📌{}
              {detailData?.warning_data}
            </p>
            <p className="text-black font-serif">
              📌{}Contact Number:{" "}
              <span className="ml-2">{detailData?.contact_number}</span>
            </p>
            <p className="text-black font-serif">
              📌{}Tickets:{detailData?.ticket_availability}
            </p>
            <p className="text-black font-serif">
              📌{}Tickets:{detailData?.ticket_availability}
            </p>
          </div>
        )}
        {activeTab === "route" && (
          <div className="slide-right prose max-w-none">
            <p className="text-gray-600">
              <span className="font-semibold">📍{}Latitude:</span>{" "}
              {detailData?.latitude}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">📍{}Longitude:</span>{" "}
              {detailData?.longitude}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">📍{}Distance:</span>{" "}
              {detailData?.distance} km
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">📍{}Duration:</span>{" "}
              {detailData?.duration} hours
            </p>
          </div>
        )}
      </div>

      {/* Book Now Button */}
      <div className="fade-in fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-center">
          <button className="w-1/3 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

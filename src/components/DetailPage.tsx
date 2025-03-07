"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { IoMdShare } from "react-icons/io";
import axios from "axios";
// import Link from "next/link";
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
  gallery: {
    image_path: string;
    credit_by: string;
    image_type: number;
  }[];
}

interface DetailPageProps {
  location_code: any;
  // detailData: PlaceDetails | null;
}

const DetailPage: React.FC<DetailPageProps> = ({
  // location_id,
  location_code,
  // detailData,
}) => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("gallery");

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

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollAnimations />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in">
            <a href="/see-all" className="flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </a>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold">{detailData?.district}</h1>
                <h2 className="text-4xl font-bold mt-2 font-playfair">
                  {detailData?.location_name}
                </h2>
              </div>
              <div className="text-right">
                <div className="mt-2">
                  <button
                    className="flex items-center text-white hover:text-gray-800"
                    onClick={showModal}
                  >
                    <IoMdShare className="w-10 h-10 mr-2" />
                  </button>
                  <ShareModal
                    detailData={detailData}
                    visible={isModalVisible}
                    onClose={handleCancel}
                  />
                </div>
              </div>
            </div>
          </div>
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
        {activeTab === "gallery" && detailData?.gallery && (
          <div className="scale-up">
            <div className="relative mb-4 text-center">
              <h3 className="text-gray-500 font-bold text-2xl font-playfair">
                Gallery Shots Collection
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Explore the breathtaking beauty through our curated collection
                of stunning visuals and immersive moments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pb-5">
              {detailData.gallery.map((item, index) => (
                <div
                  key={index}
                  className={`relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 transition-transform transform group`}
                >
                  <img
                    src={item.image_path}
                    alt={`Gallery image ${item.credit_by}`}
                    className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105 group-hover:rotate-3 group-hover:opacity-80"
                  />
                </div>
              ))}
            </div>
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
              📌{}Contact Number:{" "}
              <span className="ml-2">{detailData?.contact_number}</span>
            </p>
            <p className="text-black font-serif">
              📌{}Tickets: {detailData?.ticket_availability}
            </p>
            <p className="text-black font-serif">
              📌{}Tickets: {detailData?.ticket_availability}
            </p>
            <p className="text-black font-serif">
              📌{} {detailData?.warning_data}
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

      {/* Fixed Book Now Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-50">
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

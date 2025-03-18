// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container } from "reactstrap";
// import Image from "next/image";
// import { Search, ArrowLeft } from "lucide-react";
// import { Pagination } from "antd";
// import "antd/dist/reset.css";
// import { ScrollAnimations } from "@/components/ScrollAnimations";
// import Link from "next/link";

// type Category =
//   | "all"
//   | "beaches"
//   | "mountains"
//   | "heritage"
//   | "wildlife"
//   | "adventure";

// const SeeAllPage = () => {
//   const [places, setPlaces] = useState<any[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeCategory, setActiveCategory] = useState<Category>("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const itemsPerPage = 10;
//   const fetchLimit = 50;

//   const categories = [
//     { id: "all", label: "All Places" },
//     { id: "beaches", label: "Beaches" },
//     { id: "mountains", label: "Mountains" },
//     { id: "heritage", label: "Heritage" },
//     { id: "adventure", label: "Adventure" },
//     { id: "park", label: "Park" },
//   ];

//   const categoryMapping: { [key: string]: string } = {
//     Beach: "beaches",
//     Mountain: "mountains",
//     "Heritage Site": "heritage",
//     "Adventure Park": "adventure",
//     "Religious Site": "heritage",
//     Waterfall: "adventure",
//     "Historical Landmark": "heritage",
//     Park: "park",
//     "National Park": "park",
//     Lake: "heritage",
//     Museum: "heritage",
//   };

//   const fetchLocations = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://paradise.aventureit.com/api/location/all",
//         {
//           province_id: 0,
//           city_id: 0,
//           status: 3,
//           page: 1,
//           limit: fetchLimit,
//         }
//       );
//       if (response.data.success) {
//         setPlaces(response.data.output);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLocations();
//   }, []);

//   // **Fix Search Function**
//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };

//   // **Filter Places by Search and Category**
//   const filteredPlaces = places.filter((place) => {
//     const matchesSearch =
//       place.location_name.toLowerCase().includes(searchQuery) ||
//       place.city.toLowerCase().includes(searchQuery);

//     const categoryFromTag = categoryMapping[place.tag] || "all";

//     const matchesCategory =
//       activeCategory === "all" || categoryFromTag === activeCategory;

//     return matchesSearch && matchesCategory;
//   });

//   // **Paginate Filtered Data**
//   const paginatedPlaces = filteredPlaces.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const onPageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <ScrollAnimations />
//       <Container className="max-w-7xl mx-auto px-4">
//         <div>
//           <button
//             onClick={() => (window.location.href = "/")}
//             className="flex items-center text-black"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back
//           </button>
//         </div>

//         <h1 className="text-3xl font-bold text-gray-800 mb-2">
//           Discover Sri Lanka
//         </h1>
//         <p className="text-gray-600">
//           Explore the paradise island's most beautiful destinations
//         </p>

//         {/* Search Input */}
//         <div className="mb-8 space-y-4">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search places..."
//               className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//           </div>

//           {/* Category Filter */}
//           <div className="flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id as Category)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                   activeCategory === category.id
//                     ? "bg-blue-500 text-white"
//                     : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
//                 }`}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Places Grid */}
//         {loading ? (
//           <div className="text-center text-gray-500">Loading...</div>
//         ) : paginatedPlaces.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {paginatedPlaces.map((place) => (
//               <button key={place.location_id}>
//                 <a
//                   href={`/place/${place.location_code}`}
//                   className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 >
//                   <div className="relative h-48">
//                     <Image
//                       src={place.thumbnail_path}
//                       alt={place.location_name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-bold text-gray-800 mb-1">
//                       {place.location_name}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-2 font-playfair">
//                       {place.city}
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-600 text-sm">{place.tag}</span>
//                       <span className="text-blue-600 font-semibold">
//                         {place.distance}m away
//                       </span>
//                     </div>
//                   </div>
//                 </a>
//               </button>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-gray-600">
//               No places found matching your search criteria.
//             </p>
//           </div>
//         )}

//         {/* Pagination */}
//         <div className="flex justify-center mt-8">
//           <Pagination
//             current={currentPage}
//             pageSize={itemsPerPage}
//             total={filteredPlaces.length}
//             onChange={onPageChange}
//             showSizeChanger={false}
//           />
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default SeeAllPage;

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Pagination } from "antd";
import "antd/dist/reset.css";

import BgImg from "../../assets/bgImgSeeAll.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppStore from "@/assets/appleStore.png";
import PlayStore from "@/assets/playStore.png";
import MobileImg from "@/assets/mobileImg.png";
import AppStoreQr from "@/assets/svgs/AppStoreQr";
import PlayStoreQr from "@/assets/svgs/PlayStoreQr";
import ParadiseGuideLogo from "@/assets/Paradise Guide logo.png";

type Category =
  | "all"
  | "beaches"
  | "mountains"
  | "heritage"
  | "wildlife"
  | "adventure";

const SeeAllPage = () => {
  const [places, setPlaces] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 10;
  const fetchLimit = 50;

  const categories = [
    { id: "all", label: "All Places" },
    { id: "beaches", label: "Beaches" },
    { id: "mountains", label: "Mountains" },
    { id: "heritage", label: "Heritage" },
    { id: "adventure", label: "Adventure" },
    { id: "park", label: "Park" },
  ];

  const categoryMapping: { [key: string]: string } = {
    Beach: "beaches",
    Mountain: "mountains",
    "Heritage Site": "heritage",
    "Adventure Park": "adventure",
    "Religious Site": "heritage",
    Waterfall: "adventure",
    "Historical Landmark": "heritage",
    Park: "park",
    "National Park": "park",
    Lake: "heritage",
    Museum: "heritage",
  };

  const fetchLocations = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://paradise.aventureit.com/api/location/all",
        {
          province_id: 0,
          city_id: 0,
          status: 3,
          page: 1,
          limit: fetchLimit,
        }
      );
      if (response.data.success) {
        setPlaces(response.data.output);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  // **Fix Search Function**
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // **Filter Places by Search and Category**
  const filteredPlaces = places.filter((place) => {
    const matchesSearch =
      place.location_name.toLowerCase().includes(searchQuery) ||
      place.city.toLowerCase().includes(searchQuery);

    const categoryFromTag = categoryMapping[place.tag] || "all";

    const matchesCategory =
      activeCategory === "all" || categoryFromTag === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // **Paginate Filtered Data**
  const paginatedPlaces = filteredPlaces.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white ">
      <div className="relative w-full h-[90vh] md:h-[75vh] pb-5">
        {/* Background Image & Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-center overflow-hidden">
          <Image
            src={BgImg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>{" "}
        </div>

        {/* Hero Section */}
        <div className="flex flex-col w-full z-50 relative ">
          <Navbar />

          {/* Hero Content*/}
          <div className="absolute top-20 md:top-50 lg:top-52 left-0 w-full flex flex-col items-start text-left text-white px-8">
            <h1 className="text-2xl md:text-6xl font-extrabold">
              EXPLORE SRI LANKA
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Discover the breathtaking beauty and rich heritage of Sri Lanka,
              an island where adventure and tranquility go hand in hand. Whether
              you're drawn to sun-kissed beaches, the lush greenery of the hill
              country, or the timeless splendor of cultural landmarks, Sri Lanka
              offers something for every traveler.
            </p>

            <input
              // onClick={handleSearch}
              type="text"
              placeholder="Search Here"
              className="mt-6 p-3 w-1/3 rounded-full bg-transparent text-gray-400 border border-gray-400 placeholder-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 p-4">
        {/* Places Grid */}
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : paginatedPlaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedPlaces.map((place) => (
              <button key={place.location_id}>
                <a
                  href={`/place/${place.location_code}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48">
                    <Image
                      src={place.thumbnail_path}
                      alt={place.location_name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {place.location_name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 font-playfair">
                      {place.city}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">{place.tag}</span>
                      <span className="text-blue-600 font-semibold">
                        {place.distance}m away
                      </span>
                    </div>
                  </div>
                </a>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No places found matching your search criteria.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 mb-6">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={filteredPlaces.length}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      </div>

      <div>
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            {/* Left QR Code */}
            <div className="flex flex-col items-center w-[202px] order-1 md:order-none">
              <div>
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
      </div>

      <Footer />
    </div>
  );
};

export default SeeAllPage;

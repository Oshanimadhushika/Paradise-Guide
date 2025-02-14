import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import Image from "next/image";
import { Search, ArrowLeft } from "lucide-react";
import { Pagination } from "antd";
import "antd/dist/reset.css";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { useRouter } from "next/navigation";

type Category =
  | "all"
  | "beaches"
  | "mountains"
  | "heritage"
  | "wildlife"
  | "adventure";

const SeeAllPage = () => {
  const router = useRouter();
  // const navigate = useNavigate();
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

  const handlePlaceClick = (place: any) => {
    router.push(`/detail/${place.location_id}/${place.location_code}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <ScrollAnimations />
      <Container className="max-w-7xl mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center text-black mb-4 hover:opacity-80"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Discover Sri Lanka
        </h1>
        <p className="text-gray-600">
          Explore the paradise island's most beautiful destinations
        </p>

        {/* Search Input */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search places..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Places Grid */}
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : paginatedPlaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedPlaces.map((place) => {
              return (
                <div
                  key={place.location_id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  // onClick={() =>
                  //   navigate(`/detail/${locationSlug}`, { state: { place } })
                  // }

                  onClick={() => handlePlaceClick(place)}
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
                    <p className="text-gray-600 text-sm mb-2">{place.city}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">{place.tag}</span>
                      <span className="text-blue-600 font-semibold">
                        {place.distance}m away
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No places found matching your search criteria.
            </p>
          </div>
        )}

        {/* {selectedPlace && (
        <DetailPage
        location_id={selectedPlace.location_id}
        location_code={selectedPlace.location_code}
        />
      )} */}

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <Pagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={filteredPlaces.length}
            onChange={onPageChange}
            showSizeChanger={false}
          />
        </div>
      </Container>
    </div>
  );
};

export default SeeAllPage;

import React, { useState } from 'react';
import { Container } from "reactstrap";
import Image from "next/image";
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { places, Place } from './PlaceData'; 
import { ArrowLeft } from 'lucide-react';


type Category = 'all' | 'beaches' | 'mountains' | 'heritage' | 'wildlife' | 'adventure';

const SeeAllPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories = [
    { id: 'all', label: 'All Places' },
    { id: 'beaches', label: 'Beaches' },
    { id: 'mountains', label: 'Mountains' },
    { id: 'heritage', label: 'Heritage' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'adventure', label: 'Adventure' }
  ];

  const filteredPlaces = places.filter((place: Place) => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || place.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container className="max-w-7xl mx-auto px-4">
      <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-black mb-4 hover:opacity-80"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>


        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Discover Sri Lanka
          </h1>
          <p className="text-gray-600">
            Explore the paradise island's most beautiful destinations
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search places..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => navigate('/detail', { state: { place } })}
            >
              <div className="relative h-48">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {place.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {place.location}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">{place.rating}</span>
                    <span className="text-gray-400 text-sm ml-1">
                      ({place.reviews} reviews)
                    </span>
                  </div>
                  <span className="text-blue-600 font-semibold">
                    ${place.pricePerPerson}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No places found matching your search criteria.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default SeeAllPage;
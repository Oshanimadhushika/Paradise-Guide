"use client";

import React, { useState } from 'react';
import { Star, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Gallery from './Gallery';
import { ScrollAnimations } from '@/components/ScrollAnimations';

interface PlaceDetails {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  pricePerPerson: number;
  description: string;
  about: string;
  budget: string;
  route: string;
}

interface DetailPageProps {
  place: PlaceDetails;
}

const DetailPage: React.FC<DetailPageProps> = ({ place }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('gallery');
  const [searchQuery, setSearchQuery] = useState('');

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
                <h1 className="text-2xl font-bold">{place.location}</h1>
                <h2 className="text-4xl font-bold mt-2 font-playfair">{place.name}</h2>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="text-xl font-bold ml-1">{place.rating}</span>
                  <span className="text-sm ml-1">({place.reviews})</span>
                </div>
                <div className="text-2xl font-bold mt-1">
                  ${place.pricePerPerson}
                  <span className="text-sm font-normal">/Person</span>
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
            {['gallery', 'about', 'budget', 'route'].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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
        {activeTab === 'gallery' && (
          <div className="scale-up">
            <Gallery />
          </div>
        )}
        {activeTab === 'about' && (
          <div className="fade-in prose max-w-none">
            <p className=" text-gray-600">{place.about}</p>
          </div>
        )}
        {activeTab === 'budget' && (
          <div className="slide-left prose max-w-none whitespace-pre-line">
            <p className="text-gray-600">{place.budget}</p>
          </div>
        )}
        {activeTab === 'route' && (
          <div className="slide-right prose max-w-none">
            <p className="text-gray-600">{place.route}</p>
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
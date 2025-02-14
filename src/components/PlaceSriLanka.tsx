import React, { useState } from "react";
import { Container } from "reactstrap";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import Sigiriya from "../assets/sigiriya.jpeg";
import Temple from "../assets/kandy.png";
import NineArch from "../assets/Nine_Arch_Bridge.jpg";
import Galle from "../assets/seaGirl.jpg";
import Kandy from "../assets/kandyLake.jpeg";
import Yala from "../assets/dear_yala.png";
import SriPadaya from "../assets/sripadaya.jpeg";
import { useNavigate } from 'react-router-dom';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';


interface Place {
  id: number;
  name: string;
  image: StaticImageData;
  tours: string;
  location: string;
  rating: number;
  reviews: number;
  pricePerPerson: number;
  description: string;
  about: string;
  budget: string;
  route: string;
}

const PlaceSriLanka: React.FC = () => {
  const router = useRouter();

  const goToSeeAll = () => {
    router.push('/see-all');
  };

  const places: Place[] = [
    {
      id: 1,
      name: "Sigiriya Rock",
      image: Sigiriya,
      tours: "50+ Tours",
      location: "Dambulla",
      rating: 4.8,
      reviews: 228,
      pricePerPerson: 99,
      description: "Ancient palace and fortress complex, UNESCO World Heritage site",
      about: "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 metres (590 ft) high.",
      budget: "Entry fees: $30 for foreigners\nGuide: $20-30\nTransportation: $15-25",
      route: "From Colombo: Take the A6 highway towards Dambulla. The journey takes about 4-5 hours."
    },
    {
      id: 2,
      name: "Temple of Tooth",
      image: Temple,
      tours: "40+ Tours",
      location: "Kandy",
      rating: 4.7,
      reviews: 180,
      pricePerPerson: 80,
      description: "A sacred site for Buddhists, housing the tooth of the Buddha",
      about: "The Temple of the Sacred Tooth Relic is a Buddhist temple in Kandy, Sri Lanka. It is located in the royal palace complex which houses the relic of the tooth of Buddha.",
      budget: "Entry fees: $25 for foreigners\nGuide: $15-25\nOfferings: $10-20",
      route: "From Colombo: Take the A1 highway to Kandy. The journey takes about 3-4 hours."
    },
    {
      id: 3,
      name: "Nine Arch Bridge",
      image: NineArch,
      tours: "30+ Tours",
      location: "Ella",
      rating: 4.6,
      reviews: 120,
      pricePerPerson: 70,
      description: "A bridge over the Mahaweli River, known for its unique arches",
      about: "The Nine Arch Bridge in Ella is one of the best examples of colonial-era railway construction in the country. The bridge is built entirely from rock, brick and cement with no steel.",
      budget: "Entry: Free\nGuide: $15-20\nTransportation: $10-15",
      route: "From Ella town: 15-minute tuk-tuk ride or 30-minute walk through tea plantations"
    },
    {
      id: 4,
      name: "Galle Fort",
      image: Galle,
      tours: "45+ Tours",
      location: "Galle",
      rating: 4.9,
      reviews: 300,
      pricePerPerson: 100,
      description: "A Dutch fort built in the 17th century, now a UNESCO World Heritage site",
      about: "Galle Fort, built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century. It's a historical, archaeological and architectural heritage monument.",
      budget: "Entry: Free\nGuided Tour: $25-35\nLocal Transport: $20-30",
      route: "From Colombo: Take the Southern Expressway to Galle. Journey time approximately 2 hours."
    },
    {
      id: 5,
      name: "Kandy Lake",
      image: Kandy,
      tours: "35+ Tours",
      location: "Kandy",
      rating: 4.5,
      reviews: 150,
      pricePerPerson: 70,
      description: "A beautiful lake surrounded by lush greenery",
      about: "Kandy Lake, also known as Kiri Muhuda or the Sea of Milk, is an artificial lake in the heart of the hill city of Kandy, Sri Lanka. It was created in 1807 by the last ruler of the kingdom of Kandy.",
      budget: "Entry: Free\nBoat Ride: $10-15\nGuided Walk: $20-25",
      route: "Located in central Kandy city. Easily accessible by foot from Temple of Tooth Relic."
    },
    {
      id: 6,
      name: "Yala National Park",
      image: Yala,
      tours: "25+ Tours",
      location: "Yala",
      rating: 4.7,
      reviews: 200,
      pricePerPerson: 120,
      description: "A wildlife sanctuary known for its diverse fauna and flora",
      about: "Yala National Park is Sri Lanka's most popular wildlife sanctuary. The park is home to 44 varieties of mammals and 215 bird species. It has one of the highest leopard densities in the world.",
      budget: "Entry: $40\nSafari Jeep: $50-70\nGuide: $25-30\nFull Day Tour: $100-150",
      route: "From Colombo: Take the Southern Expressway and then A2 highway. Journey takes about 5-6 hours."
    },
    {
      id: 7,
      name: "Sri Padaya",
      image: SriPadaya,
      tours: "10+ Tours",
      location: "Ratnapura",
      rating: 4.4,
      reviews: 80,
      pricePerPerson: 50,
      description: "A sacred mountain peak with Buddha's footprint",
      about: "Sri Pada (Adam's Peak) is a 2,243m tall conical mountain in central Sri Lanka. It is well known for the Sri Pada, i.e., 'sacred footprint', a 1.8m rock formation near the summit.",
      budget: "Entry: Free\nAccommodation nearby: $30-50\nGuide (recommended): $25-35",
      route: "Best accessed from Hatton or Ratnapura. The climb usually starts at night to reach summit by sunrise."
    },
  ];

  // const handlePlaceClick = (place: Place) => {
  //   navigate('/detail', { 
  //     state: { place },
  //     replace: false
  //   });
  // };

  return (
    <section className="py-12 bg-gray-50">
      <Container className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Top Attractions Of Sri Lanka
          </h2>
          <button
            // onClick={() => navigate('/see-all')}
            onClick={goToSeeAll}
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            See all
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {places.map((place) => (
            <div
              key={place.id}
              className="flex items-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:shadow-gray-200 cursor-pointer"
              // onClick={() => handlePlaceClick(place)}
            >
              <div className="flex-shrink-0 relative w-24 h-24">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover rounded-l-lg"
                  sizes="(max-width: 96px) 100vw, 96px"
                />
              </div>
              <div className="flex-grow p-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 font-mono">
                  {place.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{place.tours}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default dynamic(() => Promise.resolve(PlaceSriLanka), {
  ssr: false
});

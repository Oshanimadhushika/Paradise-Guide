import React from "react";
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

interface Place {
  name: string;
  image: StaticImageData;
  tours: string;
}

const PlaceSriLanka: React.FC = () => {
  const places: Place[] = [
    {
      name: "Sigiriya Rock",
      image: Sigiriya,
      tours: "50+ Tours",
    },
    {
      name: "Temple of Tooth",
      image: Temple,
      tours: "40+ Tours",
    },
    {
      name: "Nine Arch Bridge",
      image: NineArch,
      tours: "30+ Tours",
    },
    {
      name: "Galle Fort",
      image: Galle,
      tours: "45+ Tours",
    },
    {
      name: "Kandy Lake",
      image: Kandy,
      tours: "35+ Tours",
    },
    {
      name: "Yala National Park",
      image: Yala,
      tours: "25+ Tours",
    },
    {
      name: "Sri Padaya",
      image: SriPadaya,
      tours: "10+ Tours",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <Container className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Top Attractions Of Sri Lanka
          </h2>
          <Link
            href="/all-places"
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            See all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {places.map((place, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:shadow-gray-200"
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

export default PlaceSriLanka;

import React from "react";
import AppStore from "../assets/appleStore.png";
import PlayStore from "../assets/playStore.png";
import Image from "next/image";
import DearYala from "../assets/dear_yala.png";

interface DetailPageProps {
  location_code: any;
}

const DetailPage2: React.FC<DetailPageProps> = ({ location_code }) => {
  const galleryImages = [
    {
      url: DearYala,
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      url: DearYala,
      span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
    },
    { url: DearYala, span: "md:col-span-1 md:row-span-2" },
    { url: DearYala, span: "md:col-span-1 md:row-span-2" },
    { url: DearYala, span: "md:col-span-1 md:row-span-2" },
    {
      url: DearYala,
      span: "md:col-span-2 md:row-span-1",
    },
  ];

  const facilities = [
    { icon: "🚗", name: "Parking Facilities", status: "Available" },
    { icon: "🚻", name: "Washroom Facilities", status: "Available" },
    { icon: "🛍️", name: "Nearby shops, groceries...", status: "Available" },
    { icon: "🛡️", name: "Safety level for visitors", status: "High" },
    { icon: "👥", name: "Average daily visitors", status: "100-200" },
  ];

  return (
    <div className="w-full bg-white">
      <section className="relative w-full h-[600px]">
        {/* Background Image */}
        <img
          src="https://th.bing.com/th/id/OIP.rqHFYUsE5c8Cv3JS6nZBFQHaEK?rs=1&pid=ImgDetMain"
          alt="Galle Dutch Fort"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute top-10 right-10 w-[350px] bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Galle Dutch Fort</h2>
          <p className="text-gray-600">📍 Galle, Southern Province</p>
          <p className="mt-3 text-gray-800">
            Galle Fort in Sri Lanka, located on the southwestern coast, is a
            historic treasure. Built by the Portuguese in the late 16th century
            and fortified by the Dutch in the 17th century, it is a UNESCO World
            Heritage Site...
          </p>
        </div>

        {/* Download App Section */}
        <div className="absolute bottom-10 right-10 w-[350px] flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg mt-4">
          <img src="/qr-code.png" alt="QR Code" className="w-20 h-20" />
          <div>
            <p className="text-sm text-black">Download Paradise Guide App</p>
            <div className="flex gap-2 mt-2">
              <Image src={AppStore} alt="App Store" className="h-8" />
              <Image src={PlayStore} alt="Google Play" className="h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="p-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-500 px-20">
          Gallery
        </h2>
        <div className="grid grid-cols-3 gap-2 auto-rows-[150px] px-20">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl ${image.span} group cursor-pointer`}
            >
              <Image
                src={image.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Facilities Section */}
      <div className="p-10 px-20">
        <h2 className="text-xl font-semibold mb-4 text-gray-400">Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border p-4 rounded-lg shadow-xl"
            >
              <div className="text-2xl text-blue-500">{facility.icon}</div>
              <div>
                <p className="text-sm font-semibold">{facility.name}</p>
                <p className="text-gray-600">{facility.status}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-blue-500 mt-4 text-center cursor-pointer">
          More Facilities on Paradise Guide
        </p>
      </div>
    </div>
  );
};

export default DetailPage2;

// "use client"

// import React, { useState, useEffect } from "react";
// import { Container } from "reactstrap";
// import Image, { StaticImageData } from "next/image";
// import dynamic from 'next/dynamic';
// import MobileImg from "../assets/mobile-pic.png";
// import AppStore from "../assets/appleStore.png";
// import PlayStore from "../assets/playStore.png";

// const QRCode = dynamic(() => import('antd').then(mod => mod.QRCode), {
//   ssr: false,
//   loading: () => <div className="w-20 h-20 bg-gray-100 rounded-lg" />
// });

// interface StoreLink {
//   url: string;
//   image: StaticImageData;
//   alt: string;
// }

// interface Feature {
//   emoji: string;
//   text: string;
// }

// const MobilePart: React.FC = () => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const appStoreUrl = "https://apps.apple.com/app-url";
//   const playStoreUrl = "https://play.google.com/store/app-url";

//   const storeLinks: StoreLink[] = [
//     {
//       url: appStoreUrl,
//       image: AppStore,
//       alt: "Download on App Store",
//     },
//     {
//       url: playStoreUrl,
//       image: PlayStore,
//       alt: "Get it on Google Play",
//     },
//   ];

//   const features: Feature[] = [
//     {
//       emoji: "🗺️",
//       text: "Interactive maps and offline navigation",
//     },
//     {
//       emoji: "🎫",
//       text: "Easy tour and activity bookings",
//     },
//     {
//       emoji: "📍",
//       text: "Nearby attractions and hidden gems",
//     },
//     {
//       emoji: "🌟",
//       text: "Local tips and travel guides",
//     },
//   ];

//   if (!isMounted) {
//     return null; // or a loading placeholder
//   }

//   return (
//     <section className="py-16 bg-gradient-to-br from-blue-100 via-green-50 to-emerald-100 overflow-hidden relative">
//       {/* Background overlay gradients */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-green-200/30"></div>
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-blue-100/20"></div>

//       <Container className="max-w-7xl mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Left Column - Text and Download */}
//           <div className="space-y-8">
//             <div className="text-center lg:text-left">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight font-playfair">
//                 Explore Sri Lanka
//                 <br />
//                 With Our Mobile App
//               </h2>

//               <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mt-4">
//                 Paradise Guide helps you discover the best of Sri Lanka right
//                 from your phone. Plan your trips, find attractions, book tours,
//                 and navigate like a local—all in one app.
//               </p>
//             </div>

//             <div className="space-y-8">
//               <div className="flex flex-col space-y-4 max-w-xl mx-auto lg:mx-0">
//                 <h3 className="text-xl font-semibold text-gray-700 text-center lg:text-left">
//                   Key Features:
//                 </h3>
//                 <ul className="space-y-3 text-gray-600">
//                   {features.map((feature, index) => (
//                     <li key={index} className="flex items-center">
//                       <span className="mr-2">{feature.emoji}</span>
//                       {feature.text}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="flex justify-start space-x-8">
//                 {storeLinks.map((store, index) => (
//                   <div key={index} className="flex flex-col items-center space-y-3">
//                     <div className="relative h-10 w-32">
//                       <Image
//                         src={store.image}
//                         alt={store.alt}
//                         fill
//                         className="cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105 object-contain"
//                       />
//                     </div>
//                     <QRCode
//                       value={store.url}
//                       color="#000000"
//                       style={{ background: "white" }}
//                       bordered={false}
//                       className="shadow-md rounded-lg p-2 bg-white/90"
//                       size={80}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Mobile Image */}
//           <div className="relative lg:h-[700px] flex items-center justify-center lg:justify-end">
//             <div className="relative w-[350px] md:w-[500px] aspect-square flex items-center justify-center">
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-green-300/20 rounded-full"></div>
//               <div className="relative w-[90%] h-[90%]">
//                 <Image
//                   src={MobileImg}
//                   alt="Paradise Guide Mobile App"
//                   fill
//                   className="object-contain relative z-10 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default dynamic(() => Promise.resolve(MobilePart), {
//   ssr: false
// });

"use client";

import React from "react";
import { Container } from "reactstrap";
import Image, { StaticImageData } from "next/image";
import MobileImg from "../assets/mobile-pic.png";
import AppStore from "../assets/appleStore.png";
import PlayStore from "../assets/playStore.png";
import QRCodeComponent from "./QRCodeComponent";

interface StoreLink {
  url: string;
  image: StaticImageData;
  alt: string;
}

interface Feature {
  emoji: string;
  text: string;
}

const MobilePart: React.FC = () => {
  const appStoreUrl = "https://apps.apple.com/app-url";
  const playStoreUrl = "https://play.google.com/store/app-url";

  const storeLinks: StoreLink[] = [
    {
      url: appStoreUrl,
      image: AppStore,
      alt: "Download on App Store",
    },
    {
      url: playStoreUrl,
      image: PlayStore,
      alt: "Get it on Google Play",
    },
  ];

  const features: Feature[] = [
    {
      emoji: "🗺️",
      text: "Interactive maps and offline navigation",
    },
    {
      emoji: "🎫",
      text: "Easy tour and activity bookings",
    },
    {
      emoji: "📍",
      text: "Nearby attractions and hidden gems",
    },
    {
      emoji: "🌟",
      text: "Local tips and travel guides",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-green-50 to-emerald-100 overflow-hidden relative">
      {/* Background overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-green-200/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-blue-100/20"></div>

      <Container className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text and Download */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight font-playfair">
                Explore Sri Lanka
                <br />
                With Our Mobile App
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mt-4">
                Paradise Guide helps you discover the best of Sri Lanka right
                from your phone. Plan your trips, find attractions, book tours,
                and navigate like a local—all in one app.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col space-y-4 max-w-xl mx-auto lg:mx-0">
                <h3 className="text-xl font-semibold text-gray-700 text-center lg:text-left">
                  Key Features:
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">{feature.emoji}</span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-start space-x-8">
                {storeLinks.map((store, index) => (
                  <div key={index} className="flex flex-col items-center space-y-3">
                    <div className="relative h-10 w-32">
                      <Image
                        src={store.image}
                        alt={store.alt}
                        fill
                        className="cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105 object-contain"
                      />
                    </div>
                    <QRCodeComponent value={store.url} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Mobile Image */}
          <div className="relative lg:h-[700px] flex items-center justify-center lg:justify-end">
            <div className="relative w-[350px] md:w-[500px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-green-300/20 rounded-full"></div>
              <div className="relative w-[90%] h-[90%]">
                <Image
                  src={MobileImg}
                  alt="Paradise Guide Mobile App"
                  fill
                  className="object-contain relative z-10 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MobilePart;

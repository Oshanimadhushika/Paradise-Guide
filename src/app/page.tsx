// "use client";

// import Hero from "../components/Hero";
// import About from "@/components/About";
// import PlaceSriLanka from "@/components/PlaceSriLanka";
// import MobilePart from "@/components/MobilePart";
// import Contact from "@/components/Contact";
// // import Gallery from "@/components/Gallery";
// import { ScrollAnimations } from "@/components/ScrollAnimations";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";

// interface MediaItem {
//   id: number;
//   type: "image" | "video";
//   title: string;
//   desc: string;
//   url: string;
//   span: string;
// }

// const mediaItems: MediaItem[] = [
//   {
//     id: 1,
//     type: "image",
//     title: "Sigiriya Rock Fortress",
//     desc: "Ancient palace and fortress complex, UNESCO World Heritage site",
//     url: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2013/10/Sigiriya1.jpg?fit=917,1024&ssl=1",
//     span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
//   },
//   {
//     id: 2,
//     type: "video",
//     title: "Coastal Paradise",
//     desc: "Pristine beaches and crystal-clear waters of Sri Lanka",
//     url: "https://videos.pexels.com/video-files/1409899/1409899-uhd_2560_1440_25fps.mp4",
//     span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
//   },
//   {
//     id: 3,
//     type: "image",
//     title: "Temple of the Tooth",
//     desc: "Sacred Buddhist temple in Kandy",
//     url: "https://th.bing.com/th/id/OIP.gTeVrxLPP9CffgmTk0cvugHaE7?rs=1&pid=ImgDetMain",
//     span: "md:col-span-1 md:row-span-2",
//   },
//   {
//     id: 4,
//     type: "image",
//     title: "Tea Plantations",
//     desc: "Rolling hills of Ceylon tea estates",
//     url: "https://th.bing.com/th/id/OIP.eR0OlQmlRqIHrl8Ne2OVWQAAAA?rs=1&pid=ImgDetMain",
//     span: "md:col-span-1 md:row-span-1",
//   },
//   {
//     id: 5,
//     type: "video",
//     title: "Wildlife Safari",
//     desc: "Explore Yala National Park's diverse wildlife",
//     url: "https://videos.pexels.com/video-files/30371226/13016534_1920_1080_60fps.mp4",
//     span: "md:col-span-2 md:row-span-2",
//   },
//   {
//     id: 6,
//     type: "image",
//     title: "Galle Fort",
//     desc: "Historic Dutch colonial fortress",
//     url: "https://th.bing.com/th/id/R.863acde532d18b62849391e1847a6a78?rik=LGk%2by1K%2b5Zuulw&pid=ImgRaw&r=0",
//     span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
//   },
//   {
//     id: 7,
//     type: "image",
//     title: "Traditional Culture",
//     desc: "Kandyan dance and cultural performances",
//     url: "https://chariot.tours/wp-content/uploads/2023/07/50179148886_56663493af_o-1-1024x683.jpg",
//     span: "md:col-span-2 md:row-span-1 sm:col-span-1 sm:row-span-1",
//   },
// ];

// const usePageTracking = () => {
//   const pathname = usePathname();

//   useEffect(() => {
//     if (typeof window !== "undefined" && (window as any).gtag) {
//       (window as any).gtag("event", "page_view", {
//         page_path: pathname,
//       });
//     }
//   }, [pathname]);
// };

// export default function Home() {
//   usePageTracking();
//   return (
//     <div>
//       <ScrollAnimations />
//       <div className="flex flex-col min-h-screen">
//         <main className="">
//           <div className=" w-full h-screen">
//             <Hero />
//           </div>
//           {/* <div className="slide-left w-full">
//             <About />
//           </div> */}
//           {/* <div className="slide-right w-full">
//             <PlaceSriLanka />
//           </div> */}
//           {/* <div className="fade-in w-full min-h-screen">
//             <MobilePart />
//           </div> */}
//           {/* <div className="scale-up w-full">
//             <Gallery mediaItems={mediaItems} />
//           </div> */}
//           {/* <div className="fade-in w-full min-h-[50vh]">
//             <Contact />
//           </div> */}
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";

import Hero from "../components/Hero";
import About from "@/components/About";
import PlaceSriLanka from "@/components/PlaceSriLanka";
import MobilePart from "@/components/MobilePart";
import Contact from "@/components/Contact";
// import Gallery from "@/components/Gallery";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface MediaItem {
  id: number;
  type: "image" | "video";
  title: string;
  desc: string;
  url: string;
  span: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    title: "Sigiriya Rock Fortress",
    desc: "Ancient palace and fortress complex, UNESCO World Heritage site",
    url: "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2013/10/Sigiriya1.jpg?fit=917,1024&ssl=1",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Coastal Paradise",
    desc: "Pristine beaches and crystal-clear waters of Sri Lanka",
    url: "https://videos.pexels.com/video-files/1409899/1409899-uhd_2560_1440_25fps.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Temple of the Tooth",
    desc: "Sacred Buddhist temple in Kandy",
    url: "https://th.bing.com/th/id/OIP.gTeVrxLPP9CffgmTk0cvugHaE7?rs=1&pid=ImgDetMain",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Tea Plantations",
    desc: "Rolling hills of Ceylon tea estates",
    url: "https://th.bing.com/th/id/OIP.eR0OlQmlRqIHrl8Ne2OVWQAAAA?rs=1&pid=ImgDetMain",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    type: "video",
    title: "Wildlife Safari",
    desc: "Explore Yala National Park's diverse wildlife",
    url: "https://videos.pexels.com/video-files/30371226/13016534_1920_1080_60fps.mp4",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "Galle Fort",
    desc: "Historic Dutch colonial fortress",
    url: "https://th.bing.com/th/id/R.863acde532d18b62849391e1847a6a78?rik=LGk%2by1K%2b5Zuulw&pid=ImgRaw&r=0",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 7,
    type: "image",
    title: "Traditional Culture",
    desc: "Kandyan dance and cultural performances",
    url: "https://chariot.tours/wp-content/uploads/2023/07/50179148886_56663493af_o-1-1024x683.jpg",
    span: "md:col-span-2 md:row-span-1 sm:col-span-1 sm:row-span-1",
  },
];

const usePageTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "page_view", {
        page_path: pathname,
      });
    }
  }, [pathname]);
};

export default function Home() {
  usePageTracking();
  return (
    <div>
      <ScrollAnimations />
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <main className="">
          <div className="">
            <Hero />
          </div>
         
        </main>
      </div>
    </div>
  );
}

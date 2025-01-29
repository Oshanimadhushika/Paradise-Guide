import React from 'react';
import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";

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
    url: "https://1.bp.blogspot.com/-FVuy9Ba4DHI/X2Rh5QjWxMI/AAAAAAAAAYw/tXe-u-wA9sIsVpOzrGEUUjJWr_IQYhecQCPcBGAYYCw/s1280/L6791-5--1597140535705258.jpg",
    span: "md:col-span-2 md:row-span-1 sm:col-span-1 sm:row-span-1",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="h-[900px] overflow-y-auto">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Gallery Shots Collection"
        description="Explore the breathtaking beauty of Sri Lanka through our curated collection of stunning visuals and immersive moments."
      />
    </div>
  );
};

export default Gallery;
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryModal from '../GalleryModal';

interface MediaItem {
  id: number;
  type: "image" | "video";
  title: string;
  desc: string;
  url: string;
  span: string;
}

interface InteractiveBentoGalleryProps {
  mediaItems: MediaItem[];
  title: string;
  description: string;
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({
  mediaItems,
  title,
  description,
}) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-4 max-w-6xl">
      <div className="mb-3 text-center">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-2 text-sm sm:text-base text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
      </div>
      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[120px]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {mediaItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative overflow-hidden rounded-xl ${item.span} group cursor-pointer`}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                  delay: index * 0.05
                }
              }
            }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedItem(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            ) : mounted ? (
              <video
                src={item.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gray-800" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={!!selectedItem}
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            mediaItems={mediaItems}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveBentoGallery; 
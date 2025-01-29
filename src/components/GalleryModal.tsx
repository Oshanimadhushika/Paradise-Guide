"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MediaItem {
  id: number;
  type: "image" | "video";
  title: string;
  desc: string;
  url: string;
  span: string;
}

interface GalleryModalProps {
  selectedItem: MediaItem;
  isOpen: boolean;
  onClose: () => void;
  setSelectedItem: (item: MediaItem | null) => void;
  mediaItems: MediaItem[];
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  selectedItem,
  isOpen,
  onClose,
  setSelectedItem,
  mediaItems,
}) => {
  const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });

  if (!isOpen) return null;

  return (
    <>
      {/* Main Modal */}
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="fixed inset-0 w-full min-h-screen sm:h-[90vh] md:h-[600px] backdrop-blur-lg 
                  rounded-none sm:rounded-lg md:rounded-xl overflow-hidden z-50"
      >
        {/* Main Content */}
        <div className="h-full flex flex-col">
          <div className="flex-1 p-2 sm:p-3 md:p-4 flex items-center justify-center bg-gray-50/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                className="relative w-full aspect-[16/9] max-w-[95%] sm:max-w-[85%] md:max-w-3xl 
                         h-auto max-h-[70vh] rounded-lg overflow-hidden shadow-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
              >
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.url}
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain"
                  />
                )}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 
                              bg-gradient-to-t from-black/50 to-transparent"
                >
                  <h3 className="text-white text-xl font-semibold">
                    {selectedItem.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">
                    {selectedItem.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          className="absolute top-3 right-3 p-2 rounded-full bg-gray-200/80 
                    text-gray-700 hover:bg-gray-300/80"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-5 h-5" />
        </motion.button>

        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 
                    bg-black/20 backdrop-blur-lg rounded-full"
        >
          {mediaItems.map((item) => (
            <motion.div
              key={item.id}
              className={`w-12 h-12 rounded-full overflow-hidden cursor-pointer
                        ${
                          selectedItem.id === item.id ? "ring-2 ring-white" : ""
                        }`}
              onClick={() => setSelectedItem(item)}
              whileHover={{ scale: 1.1 }}
            >
              {item.type === "video" ? (
                <video
                  src={item.url}
                  className="w-full h-full object-cover"
                  muted
                />
              ) : (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default GalleryModal;

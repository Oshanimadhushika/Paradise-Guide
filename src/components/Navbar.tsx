"use client";
import Image from "next/image";
import React, { useState } from "react";
import ParadiseGuideLogo from "../assets/Paradise Guide logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "HOME", url: "/" },
    // { label: "DESTINATIONS", url: "/destinations" },
    // { label: "TRIPS", url: "/trips" },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <nav className="relative flex justify-between items-center px-4 py-2 bg-transparent text-white w-full  z-50 ">
      <div>
        <Link href="/" passHref>
          <Image
            src={ParadiseGuideLogo}
            alt="Paradise Guide Logo"
            width={110}
            height={50}
            className="cursor-pointer"
            onClick={handleLogoClick}
            priority
          />
        </Link>
      </div>

      <ul className="flex space-x-5 ">
        {menuItems.map((item) => (
          <li key={item.label} className="relative hidden md:block">
            <Link
              href={item.url}
              className={`cursor-pointer px-4 py-2 transition-all hover:bg-gray-400 hover:rounded-full hover:bg-opacity-30 block ${
                pathname === item.url
                  ? "bg-gray-400 bg-opacity-30 rounded-full"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = item.url;
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}

        <button
          className="w-10 h-10  hover:bg-gray-400 hover:rounded-full hover:bg-opacity-30 p-2 block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </ul>

      {isOpen && (
        <div className="absolute top-20 right-5 w-48 bg-white shadow-lg rounded-lg block md:hidden">
          <ul className="py-2 text-black">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <li className="px-4 py-3 hover:bg-gray-200">Home</li>
            </Link>
            {/* <Link href="/" onClick={() => setIsOpen(false)}>
              <li className="px-4 py-3 hover:bg-gray-200">Destination</li>
            </Link>
            <Link href="/" onClick={() => setIsOpen(false)}>
              <li className="px-4 py-3 hover:bg-gray-200">Trips</li>
            </Link> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

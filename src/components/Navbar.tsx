"use client";
import Image from "next/image";
import React from "react";
import ParadiseGuideLogo from "../assets/Paradise Guide logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: "HOME", url: "/" },
    { label: "DESTINATIONS", url: "/destinations" },
    { label: "TRIPS", url: "/trips" },
  ];

  // const handleNavigation = (url: string) => {
  //   router.push(url);
  //   window.location.reload();
  // };

  return (
    <nav className="relative flex justify-between items-center px-4 py-2 bg-transparent text-white w-full  z-50 ">
      <div>
        <Link href="/">
          <Image
            src={ParadiseGuideLogo}
            alt="Paradise Guide Logo"
            width={110}
            height={50}
            className="cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* <ul className="hidden md:flex items-center space-x-5">
        {menuItems.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => handleNavigation(item.url)}
              className={`cursor-pointer px-4 py-2 transition-all duration-300 hover:bg-gray-400 hover:rounded-full hover:bg-opacity-50 ${
                pathname === item.url
                  ? "bg-gray-500 bg-opacity-50 rounded-full"
                  : ""
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
        <button className="text-2xl ml-4">☰</button>
      </ul> */}

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
        <button className="text-2xl hover:bg-gray-400 hover:rounded-full hover:bg-opacity-30 p-2 ">☰</button>
      </ul>
    </nav>
  );
};

export default Navbar;

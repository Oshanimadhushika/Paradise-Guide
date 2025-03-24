import Image from "next/image";
import React, { useState } from "react";
import ParadiseGuideLogo from "../assets/Paradise Guide logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(pathname);
  const menuItems = [
    { label: "HOME", url: "/" },
    { label: "DESTINATIONS", url: "/destinations" },
    { label: "TRIPS", url: "/trips" },
  ];

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-transparent text-white w-full relative z-50">
      <div>
        
        <Link href="/" passHref>
          <Image
            src={ParadiseGuideLogo}
            alt="Paradise Guide Logo"
            width={110}
            height={50}
            className="cursor-pointer"
          />
        </Link>
      </div>
      {/* <ul className="hidden md:flex space-x-5">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`cursor-pointer px-4 py-2 transition-all hover:bg-gray-400 hover:rounded-full hover:bg-opacity-30 ${
              active === item.url
                ? "bg-gray-400 bg-opacity-30 rounded-full"
                : ""
            }`}
            onClick={() => {
              setActive(item.url);
              router.push(item.url);
            }}
          >
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
        <button className="text-2xl">☰</button>
      </ul> */}

<ul className="hidden md:flex space-x-5">
      {menuItems.map((item) => (
        <li key={item.label} className="relative">
          <Link href={item.url}>
            <span
              className={`cursor-pointer px-4 py-2 transition-all hover:bg-gray-400 hover:rounded-full hover:bg-opacity-30 block ${
                active === item.url
                  ? "bg-gray-400 bg-opacity-30 rounded-full"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault(); 
                setActive(item.url);
                router.push(item.url);
              }}
            >
              {item.label}
            </span>
          </Link>
        </li>
      ))}
      <button className="text-2xl">☰</button>
    </ul>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import React, { useState } from "react";
import ParadiseGuideLogo from "../assets/Paradise Guide logo.png";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-transparent text-white w-full relative z-50">
      <div>
        {/* <button onClick={() => (window.location.href = "/")}>
          <Image
            src={ParadiseGuideLogo}
            alt="Paradise Guide Logo"
            width={110}
            height={50}
          />
        </button> */}
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
      <ul className="hidden md:flex space-x-5">
        {["HOME", "DESTINATIONS", "TRIPS"].map((item) => (
          <li
            key={item}
            className={`cursor-pointer px-4 py-2 transition-all hover:bg-slate-400 hover:rounded-full ${
              active === item ? "bg-gray-400 bg-opacity-30 rounded-full " : ""
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
        <button className="text-2xl">☰</button>
      </ul>
    </nav>
  );
};

export default Navbar;

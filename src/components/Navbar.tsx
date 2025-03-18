import Image from "next/image";
import React, { useState } from "react";
import ParadiseGuideLogo from "../assets/Paradise Guide logo.png";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-transparent text-white w-full relative z-50">
      <div>
        <Image
          src={ParadiseGuideLogo}
          alt="Paradise Guide Logo"
          width={100}
          height={100}
        />
      </div>
      <ul className="hidden md:flex space-x-5">
        {["Home", "Destinations", "Trips"].map((item) => (
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

import React, { useEffect, useState } from "react";


const Footer = () => {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="flex flex-col md:flex-row gap-10 px-24 bg-black text-white items-center py-4 text-center md:text-start text-sm">
      <p className="md:text-start w-full">PARADISE GUIDE © {year ?? "..."}</p>
      <p className="md:text-center w-full">PRIVACY POLICY</p>
      <p className="md:text-end w-full">COOKIES POLICY</p>
    </footer>
  );
};

export default Footer;

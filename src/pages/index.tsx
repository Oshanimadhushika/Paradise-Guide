import { Geist, Geist_Mono } from "next/font/google";
import Hero from "../components/Hero";
import About from "@/components/About";
import PlaceSriLanka from "@/components/PlaceSriLanka";
import MobilePart from "@/components/MobilePart";
import Contact from "@/components/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <main>
        <Hero />
        <About />
        <PlaceSriLanka />
        <MobilePart />
        <Contact />
      </main>
    </div>
  );
}

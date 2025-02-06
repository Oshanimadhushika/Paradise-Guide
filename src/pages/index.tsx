import { Geist, Geist_Mono } from "next/font/google";
import Hero from "../components/Hero";
import About from "@/components/About";
import PlaceSriLanka from "@/components/PlaceSriLanka";
import MobilePart from "@/components/MobilePart";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import { ScrollAnimations } from '@/components/ScrollAnimations';

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
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans overflow-hidden`}>
      <ScrollAnimations />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow relative">
          <div className="scale-up w-full h-screen">
            <Hero />
          </div>
          <div className="slide-left w-full">
            <About/>
          </div>
          <div className="slide-right w-full">
            <PlaceSriLanka/>
          </div>
          <div className="fade-in w-full min-h-screen">
            <MobilePart />
          </div>
          <div className="scale-up w-full">
            <Gallery/>
          </div>
          <div className="fade-in w-full min-h-[50vh]">
            <Contact/>
          </div>
        </main>
      </div>
    </div>
  );
}

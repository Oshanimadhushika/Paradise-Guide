import React from "react";
import { Container, Row, Col } from "reactstrap";
import { StaticImageData } from "next/image";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import SeaGirl from "../assets/seaGirl.jpg";
import Hikkaduwa from "../assets/hikkaduwa_swiming.png";
import Dears from "../assets/dear_yala.png";
import Temples from "../assets/temples.jpg";
import Elephant from "../assets/elephant.jpeg";
import Dancing from "../assets/udarata_dancing_hed.jpg";
import Nallur from "../assets/nallur-kovil-jaffnamost.jpg";
import Cycling from "../assets/cycling.png";

interface Slide {
  url: StaticImageData;
  title: string;
  desc: string;
}

const About: React.FC = () => {
  // image
  const slides: Slide[] = [
    {
      url: SeaGirl,
      title: "Beach Paradise",
      desc: "Experience the pristine beaches and crystal-clear waters of Sri Lanka's coastline.",
    },
    {
      url: Hikkaduwa,
      title: "Water Sports",
      desc: "Dive into thrilling water adventures in Hikkaduwa's vibrant coral reefs.",
    },
    {
      url: Dears,
      title: "Wildlife Safari",
      desc: "Encounter majestic wildlife in Yala National Park's natural habitat.",
    },
    {
      url: Temples,
      title: "Ancient Temples",
      desc: "Discover the spiritual heritage in Sri Lanka's sacred Buddhist temples.",
    },
    {
      url: Elephant,
      title: "Gentle Giants",
      desc: "Meet the magnificent elephants in their natural surroundings.",
    },
    {
      url: Dancing,
      title: "Cultural Dance",
      desc: "Experience the vibrant Kandyan dance traditions of Sri Lanka.",
    },
    {
      url: Nallur,
      title: "Nallur Kovil",
      desc: "Visit the historic Hindu temples of Northern Sri Lanka.",
    },
    {
      url: Cycling,
      title: "Adventure Cycling",
      desc: "Explore scenic landscapes and rural villages on exciting cycling adventures.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container fluid className="px-4 lg:px-8">
        {/* Title Section */}
        <Row className="mb-12">
          <Col lg="6" className="ps-4">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gray-500">
              Discover Sri Lanka
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From ancient temples to pristine beaches, explore the diverse
              beauty and rich culture of this tropical paradise.
            </p>
          </Col>
        </Row>

        {/* 3D Carousel Section */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="min-h-[400px] flex flex-col justify-center rounded-lg">
            <ThreeDPhotoCarousel images={slides} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

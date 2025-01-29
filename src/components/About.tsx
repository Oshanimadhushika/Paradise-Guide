import React from "react";
import { Container, Row, Col } from "reactstrap";
import AliceCarousel, { Responsive } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { StaticImageData } from "next/image";
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

  const responsive: Responsive = {
    0: { items: 1 },
    768: { items: 3 },
    1024: { items: 5, itemsFit: "contain" },
  };

  const renderSlideItem = (slide: Slide, index: number) => (
    <div key={index} className="relative group px-2">
      <div
        className="image-container relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        style={{
          width: "100%",
          paddingTop: "133.33%",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.url.src}
          alt={slide.title}
          className="absolute top-0 left-0 w-100 h-100 object-cover transition-transform duration-500 group-hover:scale-110"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center">
            <h3 className="text-white font-semibold text-lg mb-2">
              {slide.title}
            </h3>
            <p className="text-white/90 text-sm line-clamp-3">
              {slide.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

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

        {/* Slider Section */}
        <Row>
          <Col>
            <div
              className="carousel-wrapper"
              style={{ maxWidth: "1800px", margin: "0 auto" }}
            >
              <AliceCarousel
                mouseTracking
                items={slides.map((slide, index) => renderSlideItem(slide, index))}
                responsive={responsive}
                autoPlay={true}
                autoPlayInterval={3500}
                autoPlayDirection="ltr"
                disableDotsControls={false}
                disableButtonsControls={false}
                infinite={true}
                controlsStrategy="alternate"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

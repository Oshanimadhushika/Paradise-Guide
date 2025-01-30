import { StaticImageData } from 'next/image';
import Sigiriya from "../assets/sigiriya.jpeg";
import Temple from "../assets/kandy.png";
import NineArch from "../assets/Nine_Arch_Bridge.jpg";
import Galle from "../assets/seaGirl.jpg";
import Kandy from "../assets/kandyLake.jpeg";
import Yala from "../assets/dear_yala.png";
import SriPadaya from "../assets/sripadaya.jpeg";
import GalleFort from "../assets/galleFort.jpg";

export interface Place {
  id: number;
  name: string;
  image: StaticImageData;
  tours: string;
  location: string;
  rating: number;
  reviews: number;
  pricePerPerson: number;
  description: string;
  about: string;
  budget: string;
  route: string;
  category: 'beaches' | 'mountains' | 'heritage' | 'wildlife' | 'adventure';
}

export const places: Place[] = [
  {
    id: 1,
    name: "Sigiriya Rock",
    image: Sigiriya,
    tours: "50+ Tours",
    location: "Dambulla",
    rating: 4.8,
    reviews: 228,
    pricePerPerson: 99,
    description: "Ancient palace and fortress complex, UNESCO World Heritage site",
    about: "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
    budget: "Entry fees: $30 for foreigners\nGuide: $20-30\nTransportation: $15-25",
    route: "From Colombo: Take the A6 highway towards Dambulla. The journey takes about 4-5 hours.",
    category: "heritage"
  },
  {
    id: 2,
    name: "Temple of Tooth",
    image: Temple,
    tours: "40+ Tours",
    location: "Kandy",
    rating: 4.7,
    reviews: 180,
    pricePerPerson: 80,
    description: "Sacred Buddhist temple housing Buddha's tooth relic",
    about: "The Temple of the Sacred Tooth Relic is a Buddhist temple in Kandy, Sri Lanka.",
    budget: "Entry fees: $25 for foreigners\nGuide: $15-25\nOfferings: $10-20",
    route: "From Colombo: Take the A1 highway to Kandy. The journey takes about 3-4 hours.",
    category: "heritage"
  },
  {
    id: 3,
    name: "Nine Arch Bridge",
    image: NineArch,
    tours: "30+ Tours",
    location: "Ella",
    rating: 4.6,
    reviews: 120,
    pricePerPerson: 70,
    description: "Iconic colonial-era railway bridge",
    about: "The Nine Arch Bridge in Ella is one of the best examples of colonial-era railway construction in the country.",
    budget: "Entry: Free\nGuide: $15-20\nTransportation: $10-15",
    route: "From Ella town: 15-minute tuk-tuk ride or 30-minute walk through tea plantations",
    category: "adventure"
  },
  {
    id: 4,
    name: "Galle Fort",
    image: GalleFort,
    tours: "45+ Tours",
    location: "Galle",
    rating: 4.9,
    reviews: 300,
    pricePerPerson: 85,
    description: "Historic Dutch colonial fortress with charming streets",
    about: "Galle Fort, built in 1588 by the Portuguese and fortified by the Dutch, is a UNESCO World Heritage site combining European architecture with South Asian traditions.",
    budget: "Entry: Free\nGuided Tour: $25-35\nLocal Transport: $20-30",
    route: "From Colombo: Take the Southern Expressway to Galle. Journey time approximately 2 hours.",
    category: "heritage"
  },
  {
    id: 5,
    name: "Unawatuna Beach",
    image: Galle,
    tours: "35+ Tours",
    location: "Unawatuna",
    rating: 4.7,
    reviews: 250,
    pricePerPerson: 60,
    description: "Picturesque beach known for swimming and snorkeling",
    about: "Unawatuna is a major tourist attraction in Sri Lanka and famous for its beautiful beach and corals. It's often rated as one of the best beaches in the world.",
    budget: "Beach Entry: Free\nWater Sports: $30-50\nSnorkeling: $25-40",
    route: "From Galle: 15-minute drive south along the coastal road.",
    category: "beaches"
  },
  {
    id: 6,
    name: "Yala National Park",
    image: Yala,
    tours: "40+ Tours",
    location: "Yala",
    rating: 4.8,
    reviews: 420,
    pricePerPerson: 120,
    description: "Largest wildlife sanctuary famous for leopards",
    about: "Yala National Park is Sri Lanka's most popular wildlife sanctuary. The park is home to 44 varieties of mammals and 215 bird species. It has one of the highest leopard densities in the world.",
    budget: "Entry: $40\nSafari Jeep: $50-70\nGuide: $25-30",
    route: "From Colombo: Take the Southern Expressway and then A2 highway. Journey takes about 5-6 hours.",
    category: "wildlife"
  },
  {
    id: 7,
    name: "Adam's Peak",
    image: SriPadaya,
    tours: "25+ Tours",
    location: "Nallathanniya",
    rating: 4.6,
    reviews: 180,
    pricePerPerson: 45,
    description: "Sacred mountain peak with stunning sunrise views",
    about: "Adam's Peak is a 2,243m tall mountain in central Sri Lanka, famous for the Sri Pada (sacred footprint). It's a pilgrimage site for multiple religions.",
    budget: "Entry: Free\nGuide: $20-30\nAccommodation: $30-50",
    route: "Best accessed from Hatton or Ratnapura. The climb usually starts at night to reach summit by sunrise.",
    category: "mountains"
  },
  {
    id: 8,
    name: "Arugam Bay",
    image: Galle,
    tours: "30+ Tours",
    location: "Arugam Bay",
    rating: 4.7,
    reviews: 290,
    pricePerPerson: 75,
    description: "World-famous surfing destination",
    about: "Arugam Bay is a moon-shaped curl of soft sand, famous internationally for its world-class surf breaks. It's the most popular surfing spot in Sri Lanka.",
    budget: "Surf Board Rental: $10-15\nSurf Lessons: $25-40\nBeach Activities: $20-30",
    route: "From Colombo: Take A4 highway via Ratnapura. Journey takes about 7-8 hours.",
    category: "adventure"
  },
  {
    id: 9,
    name: "Horton Plains",
    image: Kandy,
    tours: "20+ Tours",
    location: "Nuwara Eliya",
    rating: 4.5,
    reviews: 150,
    pricePerPerson: 65,
    description: "Scenic plateau with World's End viewpoint",
    about: "Horton Plains National Park is a protected area in the central highlands, famous for World's End, a stunning escarpment with a 880m drop.",
    budget: "Entry: $30\nGuide: $25\nTransport: $40",
    route: "From Nuwara Eliya: 1-hour drive. Start early morning for best weather conditions.",
    category: "mountains"
  },
  {
    id: 10,
    name: "Mirissa Beach",
    image: Galle,
    tours: "35+ Tours",
    location: "Mirissa",
    rating: 4.8,
    reviews: 320,
    pricePerPerson: 90,
    description: "Popular beach for whale watching and surfing",
    about: "Mirissa is famous for its stunning beach, whale watching opportunities, and vibrant nightlife. It's one of the best places to spot blue whales and dolphins.",
    budget: "Whale Watching: $45-60\nSurf Lessons: $30-40\nBeach Activities: $20-30",
    route: "From Colombo: Take Southern Expressway to Matara, then coastal road to Mirissa. Journey takes about 3 hours.",
    category: "beaches"
  }
]; 
import React, { FormEvent } from "react";
import { Container } from "reactstrap";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

interface SocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}

interface NavigationLinks {
  about: string;
  services: string;
  destinations: string;
  contact: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  bgColor: string;
  iconColor: string;
}

const Contact: React.FC = () => {
  // Social media URLs
  const socialLinks: SocialLinks = {
    facebook: "https://facebook.com/paradiseguide",
    twitter: "https://twitter.com/paradiseguide",
    instagram: "https://instagram.com/paradiseguide",
    linkedin: "https://linkedin.com/company/paradiseguide",
  };

  // Navigation URLs
  const navigationLinks: NavigationLinks = {
    about: "/about",
    services: "/services",
    destinations: "/destinations",
    contact: "/contact",
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      details: ["+94 77 123 4567", "+94 71 987 6543"],
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      details: ["info@paradiseguide.lk", "support@paradiseguide.lk"],
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      details: ["123 Temple Road,", "Colombo 07, Sri Lanka"],
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your newsletter submission logic here
  };

  return (
    <>
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <Container className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about Paradise Guide? We're here to help. Send us a
              message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${info.bgColor} p-3 rounded-full`}>
                    <div className={info.iconColor}>{info.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Message subject"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <Container className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Paradise Guide
              </h3>
              <p className="text-gray-400 mb-4">
                Your ultimate travel companion for exploring the beauty of Sri
                Lanka.
              </p>
              <div className="flex space-x-4">
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label={`Visit our ${platform} page`}
                  >
                    {platform === 'facebook' && <FaFacebook className="text-xl" />}
                    {platform === 'twitter' && <FaTwitter className="text-xl" />}
                    {platform === 'instagram' && <FaInstagram className="text-xl" />}
                    {platform === 'linkedin' && <FaLinkedin className="text-xl" />}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {Object.entries(navigationLinks).map(([key, path]) => (
                  <li key={key}>
                    <Link
                      href={path}
                      className="hover:text-white transition-colors"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Popular Destinations
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "Sigiriya", path: "/destinations/sigiriya" },
                  { name: "Kandy", path: "/destinations/kandy" },
                  { name: "Galle Fort", path: "/destinations/galle-fort" },
                  { name: "Ella", path: "/destinations/ella" },
                ].map((destination) => (
                  <li key={destination.path}>
                    <Link
                      href={destination.path}
                      className="hover:text-white transition-colors"
                    >
                      {destination.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Newsletter
              </h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for travel tips and updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 py-6 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Paradise Guide. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Contact;

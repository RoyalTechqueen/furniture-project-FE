import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-black">Classic Interiors</h3>
            <p className="text-gray-600">© 2024. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-black">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="#ome" className="text-gray-600 hover:text-black">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-black">
              About
            </a>
            <a href="#collectiions" className="text-gray-600 hover:text-black">
              Collections
            </a>
            <a href="#contact" className="text-gray-600 hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

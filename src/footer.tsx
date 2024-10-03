import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-200 text-green-600 py-12">
      <div className="max-w-screen-2xl w-full  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Classic Interiors</h3>
            <ul>
              <li className="mb-2">
                <Link to="/about">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/shop">Shop Now</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Shipping & Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social handles</h3>
            <ul>
              <li className="mb-2">
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-gray-400"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <span className="font-semibold text-black">Facebook</span>
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-gray-400"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <span className="font-semibold text-black">Instagram</span>
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="hover:text-gray-400"
                  >
                    <FaXTwitter size={24} />
                  </a>
                  <span className="font-semibold text-black">Twitter</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-gray-400"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <span className="font-semibold text-black">LinkedIn</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; 2024 Classic Interiors. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:underline">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

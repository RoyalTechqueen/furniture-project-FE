import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { FaArrowLeft } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCartStore } from "./store";

const AboutPage: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { getCartItemCount } = useCartStore((state) => ({
    getCartItemCount: state.getCartItemCount,
  }));

  const cartItemCount = getCartItemCount();

  return (
    <div className="container mx-auto bg-green-50 min-h-screen">
      <header className="w-full z-10 bg-white">
        <div className="mx-auto flex max-w-screen-2xl px-4 py-6 sm:px-6 justify-between items-center space-x-5">
          <div className="flex items-center">
            <img src="/logo2.png" alt="logo" className="h-16 rounded-xl" />
          </div>
          <nav className="hidden sm:flex space-x-8 items-center mr-8 text-xl">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="flex items-center relative">
            <Link to="/cart">
              <IoCartOutline className="w-8 h-8 text-green-600 ml-48" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -end-2 bg-yellow-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
          <button
            className="block sm:hidden ml-4"
            aria-label="Toggle Menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
        <div
          className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-2xl"
              aria-label="Close Menu"
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-6">
            <img src="/logo2.png" alt="logo" className="h-20 mb-4" />
            <Link
              to="/"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
          </nav>
        </div>
      </header>
      <Link to="/">
        <button className="flex items-center ml-4 text-gray-700">
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </button>
      </Link>

      <div className="container mx-auto mt-4 px-6 text-center ">
        <h1 className="text-4xl font-bold  text-gray-900 mb-4">
          About Classic Interiors
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At Classic Interiors, we blend timeless design with modern
          sophistication to bring your dream spaces to life. Our mission is to
          create stylish and functional interiors that reflect your unique taste
          and enhance your living experience.
        </p>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-700">
                Founded in 2010, Classic Interiors started with a vision to
                transform ordinary spaces into extraordinary environments. With
                over a decade of experience, our team of designers and craftsmen
                are dedicated to delivering exceptional quality and unparalleled
                service. We believe that great design should be accessible and
                that every home deserves a touch of elegance.
              </p>
            </div>
            <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
              <img
                src="/avatar.jpeg"
                alt="Our Story"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/avatar.jpeg"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Jane Doe
                </h3>
                <p className="text-gray-600">Lead Designer</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/avatar.jpeg"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  John Smith
                </h3>
                <p className="text-gray-600">Interior Architect</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/avatar.jpeg"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Emily Johnson
                </h3>
                <p className="text-gray-600">Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
            Our Values
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Quality
                </h3>
                <p className="text-gray-600">
                  We are committed to delivering the highest quality in every
                  project, using premium materials and skilled craftsmanship.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Our designs are fresh and innovative, incorporating the latest
                  trends and technologies to create unique spaces.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-300 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Customer Satisfaction
                </h3>
                <p className="text-gray-600">
                  We prioritize our clients' needs and work closely with them to
                  ensure their vision is realized with utmost satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Discover Our Collections
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore our curated selection of furniture and decor, designed to
            elevate your home with style and sophistication. Whether you're
            looking for a statement piece or complete room transformation, we
            have everything you need to create your dream home.
          </p>
          <Link to="/shop">
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;

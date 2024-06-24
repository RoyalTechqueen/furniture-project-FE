import "./index.css";
import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="mx-auto h-full w-full overflow-auto">
      <header className="fixed top-0 left-0 bg-green-100 shadow-md z-10 w-full">
        <div className=" mx-auto flex max-w-screen-2xl px-4 py-6 sm:px-6 justify-between items-center space-x-5">
          <div className="flex items-center">
            <img src="./logo.png" alt="logo" className="h-12" />
          </div>
          <nav className="hidden sm:flex space-x-8 items-center text-md ">
            <a href="#home">Home</a>
            <a href="">About Us</a>
            <a href="">Collections</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
            <button className="px-3 py-2 bg-green-300 rounded-md hover:bg-green-500">
              <a
                href="#"
                className="inline-flex items-center justify-center  text-base font-medium text-center  hover:text-white "
              >
                Shop Now
              </a>
            </button>
          </nav>
          <button
            className="block sm:hidden ml-4"
            aria-label="Toggle Menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-2xl" />
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
            <a
              href="#home"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              About Us
            </a>
            <a
              href="#collection"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Collection
            </a>
            <a
              href="#testimonials"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </a>
            <button className="px-3 py-2 bg-green-300 hover:bg-green-500 rounded-md">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black rounded-lg hover:text-white"
                onClick={() => setShowMenu(false)}
              >
                Shop Now
              </a>
            </button>
          </nav>
        </div>
      </header>
     
      <section
        id="Home"
        className="flex  items-center justify-center min-h-screen"
      >
        <div className="flex flex-col md:flex-row items-center justify-between  p-8 mt-20">
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h1 className="md:text-4xl text-xl font-bold text-gray-800 leading-light mb-4">
              Create Your Dream Home With Our
              <span className="block text-center font-extrabold">Sophisticated Designs</span>
            </h1>
            <p className="md:text-lg text-md text-gray-600 mb-6">
              Discover stylish solutions for every room in your home.Browse our
              curated collection of furniture and decor to find the perfect
              pieces that reflect your personal style andvenhance your living
              space.
            </p>
            <div className="flex justify-center items-center">
              <button className="px-8 py-2 md:py-3 bg-green-200 rounded-md hover:bg-green-800">
                <a
                  href="#"
                  className="inline-flex items-center justify-center font-medium text-center hover:text-white text-base rounded-1g"
                >
                  {" "}
                  Get Inspired
                </a>
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="./img5.jpg"
              alt="Stylish Interior"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
       
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default App;

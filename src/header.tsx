import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useCartStore } from "./store";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const { getCartItemCount } = useCartStore((state) => ({
    getCartItemCount: state.getCartItemCount,
  }));

  const cartItemCount = getCartItemCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-green-50" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-8xl px-4 py-6 sm:px-6 justify-between items-center space-x-5">
        <div className="flex items-center">
          <img src="/logo2.png" alt="Logo" className="h-20 rounded-xl" />
        </div>
        <nav className="hidden lg:flex space-x-8 items-center text-xl">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <form className="flex items-center space-x-2 hidden sm:flex">
          <input
            type="search"
            id="default-search"
            className="block w-full px-4 py-2 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            placeholder="Search Products"
            required
          />
          <button
            type="submit"
            className="text-white bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </form>
        <div className="flex items-center space-x-5">
          <div className="relative hidden lg:flex">
            <button
              onClick={() => setShowAccountMenu(!showAccountMenu)}
              className="flex items-center space-x-2 bg-green-600 px-2 py-1 md:px-4 py-2 text-white rounded-md"
              aria-label="Account Menu"
            >
              <BsPerson className="w-8 h-8" />
              <span className="flex items-center">Account</span>
              {showAccountMenu ? (
                <AiOutlineUp className="ml-1 w-4 h-4" />
              ) : (
                <AiOutlineDown className="ml-1 w-4 h-4" />
              )}
            </button>
            {showAccountMenu && (
              <div className="absolute top-full  mt-2 w-60 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="flex flex-col p-2">
                  <Link to="/signup" onClick={() => setShowAccountMenu(false)}>
                    <span className="block px-4 py-2 text-center rounded-md bg-green-600 text-white hover:bg-green-800 mb-2">
                      Get Started
                    </span>
                  </Link>
                  <Link to="/login" onClick={() => setShowAccountMenu(false)}>
                    <span className="block px-4 py-2 text-center rounded-md bg-gray-200 hover:bg-gray-300">
                      Login
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* Cart icon for larger screens */}
          <div className="flex items-center relative hidden lg:flex">
            <Link to="/cart">
              <div className="flex items-center gap-2 ">
                <IoCartOutline className="w-8 h-8 text-green-600" />
                <span>Cart</span>
              </div>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
        {/* Hamburger menu and Cart icon for small screens */}
        <div className="block lg:hidden flex items-center space-x-4">
          <Link to="/cart">
            <div className="flex items-center relative">
              <IoCartOutline className="w-8 h-8 text-green-600" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>
          <button
            className="ml-4"
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
          <img src="/logo2.png" alt="Logo" className="h-20 mb-4" />
          <a
            href="#home"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            Home
          </a>
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
          <a
            href="#contact"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </a>
        </nav>
        <Link to="/login">
          <span className="block w-full rounded-full px-4 py-3 text-center bg-gray-200 hover:bg-gray-300 border">
            Login
          </span>
        </Link>
        <Link to="/signup">
          <span className="mt-4 block w-full px-4 py-3 text-center rounded-full bg-green-600 text-white hover:bg-green-800">
            Get Started
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

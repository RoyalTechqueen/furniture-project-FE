import React from "react";
import { useState } from "react";
import NewsletterSection from "./newsletter";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useCartStore } from "./store";
import { IoLocationOutline } from "react-icons/io5";
import Footer from "./footer";

const Contact: React.FC = () => {
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

      {/* Banner Section */}
      <div
        className="text-black text-center py-4"
        style={{
          backgroundImage: "url(./bg1.jpg)",
        }}
      >
        <h1 className="text-6xl p-12 font-bold  rounded-md">Contact Us</h1>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row ">
          <div className="w-full md:w-1/3  border border-3 border-black mt-12 rounded-md">
            <div className="flex flex-col gap-8 items-start justify-between  px-4 py-12 md:py-20">
              <div className="flex items-center gap-4 ">
                <FaPhoneAlt className="w-8 h-8 " />
                <p className="font-medium">+234 123 456 789</p>
              </div>
              <div className="flex items-center gap-4">
                <MdEmail className="w-8 h-8" />
                <p className="font-medium">example@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <IoLocationOutline className="w-8 h-8" />
                <p className="font-medium">Nigeria</p>
              </div>
              <div className="w-full mt-4">
                <iframe
                  className="w-full h-48 rounded-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.3759152909174!2d4.51461647406125!3d8.462776097597132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036535862842335%3A0xa65446257aa4c452!2sTanik%20Foods!5e0!3m2!1sen!2sng!4v1717868448272!5m2!1sen!2sng"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-primary text-2xl font-medium uppercase tracking-wider mt-12">
              Get in touch
            </h2>
            <div className="relative">
              <form className="grid grid-cols-1 gap-y-6 text-left sm:grid-cols-2 sm:gap-x-8 px-4 rounded-2xl py-8 mx-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className=" w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className=" w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-md border border-input bg-background px-3 py-2 text-sm w-full"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <div className="mt-1 ">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm "
                      required
                    />
                  </div>
                </div>
                <div className=" w-full flex flex-col items-center justify-center text-center sm:col-span-2">
                  <button
                    type="submit"
                    className=" block w-full transition-color relative inline-flex items-center justify-center  bg-green-500 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-green-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <NewsletterSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

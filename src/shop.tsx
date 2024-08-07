import React, { useState } from "react";
import { furnitures } from "./furnituredata";
import { useCartStore } from "./store";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Footer from "./footer";

const Shop: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  const { getCartItemCount } = useCartStore((state) => ({
    getCartItemCount: state.getCartItemCount,
  }));

  const cartItemCount = getCartItemCount();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = furnitures.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(furnitures.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Format price with commas
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  return (
    <div className="container mx-auto bg-green-50 min-h-screen">
      <header className="w-full z-10 transition-colors duration-300 bg-white">
        <div className="mx-auto flex max-w-screen-2xl px-4 py-6 sm:px-6 justify-between items-center space-x-5">
          <div className="flex items-center">
            <img src="/logo2.png" alt="logo" className="h-16 rounded-xl" />
          </div>
          <nav className="hidden sm:flex space-x-8 items-center mr-8 text-xl">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="flex items-center space-x-5">
            <form className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center p-3 md:p-5 pointer-events-none">
                  <FaSearch className="w-4 h-4" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full px-12 py-2 md:py-3 text-sm text-black border border-gray-300 rounded-3xl bg-gray-50 focus:outline-none"
                  placeholder="Search Products"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2 bottom-2 md:end-2.5 md:bottom-2 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-xl text-sm px-3 md:px-5 md:py-1 py-1/2"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="flex items-center relative">
              <Link to="/cart">
                <IoCartOutline className="w-8 h-8 text-green-600" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -end-2 bg-yellow-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
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

      <h1 className="text-2xl text-center font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 max-w-6xl mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {currentItems.map((furniture) => (
          <div
            key={furniture.id}
            className="product-card flex flex-col sm:flex-row md:flex-col items-center bg-white shadow-md rounded-lg p-4"
          >
            <img
              src={furniture.image}
              alt={furniture.title}
              className="product-image w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex-grow sm:pl-4 md:pl-0">
              <h2 className="product-title text-xl font-bold">
                {furniture.title}
              </h2>
              <p className="product-description text-gray-600 my-2">
                {furniture.description}
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="product-price font-bold text-lg mr-4">
                {formatPrice(furniture.price)}
              </p>
              <button
                onClick={() => addToCart(furniture)}
                className="add-to-cart-button bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;

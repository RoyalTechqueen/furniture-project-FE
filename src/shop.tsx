import React, { useState } from "react";
import { furnitures } from "./furnituredata";
import { useCartStore } from "./store";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

const Shop: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate();
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
    <div className="min-h-screen mt-24">
      <button
        className="flex items-center ml-4 text-gray-700"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft className="mr-2" />
        <span>Back</span>
      </button>
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

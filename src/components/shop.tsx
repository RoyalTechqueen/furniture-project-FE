import React, { useState } from "react";
import { useCartStore } from "../store";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Pagination from "./pagination";
import { furnitures, Furniture } from "../furnituredata";

const Shop: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const sortedFurnitures = [...furnitures].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedFurnitures.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(sortedFurnitures.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl md:text-5xl font-bold mt-24 text-center">
          Our Products
        </h1>
        <div className="flex items-center gap-4 mb-4">
          <button className="flex items-center text-gray-700">
            <Link to="/">
              <FaArrowLeft className="mr-2" />
            </Link>
            <span>Back</span>
          </button>
        </div>
        <div className="grid grid-cols-1 max-w-screen-8xl mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {currentItems.map((item: Furniture) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row md:flex-col items-center bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="md:flex flex-row gap-4 items-center hidden md:pl-4 md:pl-0">
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
              <div className="mt-2 md:flex hidden items-center justify-between w-full">
                <p className="font-bold text-lg mr-4">
                  {formatPrice(item.price)}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col gap-2 items-center md:hidden">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="font-bold text-lg mr-4">
                  {formatPrice(item.price)}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;

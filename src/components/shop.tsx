import React, { useEffect, useState } from "react";
import { useCartStore } from "../store";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../header";
import axios from "axios";
import Footer from "../footer";
import { toast } from "react-toastify";

interface Image {
  id: number;
  webformatURL: string;
  tags: string;
  user: string;
}

const Shop: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [images, setImages] = useState<Image[]>([]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://pixabay.com/api/?key=45782644-cc25357d97d2cf1af90b3f230&q=furniture&image_type=photo&pretty=true"
        );
        setImages(response.data.hits);
      } catch {
        toast.error("Failed to get images!");
      }
    };
    fetchImages();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  // Pagination helper function
  const getPaginationNumbers = () => {
    const range = (start: number, end: number) => {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    if (totalPages <= 5) {
      // If there are 5 or fewer pages, show all pages
      return range(1, totalPages);
    }

    if (currentPage <= 3) {
      // Show pages 1, 2, 3, 4, 5
      return [1, 2, 3, 4, 5, totalPages > 5 ? totalPages : null];
    }

    if (currentPage >= totalPages - 2) {
      // Show pages totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages
      return [
        1,
        null,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    // Show pages around the current page with ellipses
    return [
      1,
      null,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      null,
      totalPages,
    ];
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
        <div className="grid grid-cols-2 max-w-8xl mx-auto md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentItems.map((image) => (
            <div
              key={image.id}
              className="flex flex-col sm:flex-row md:flex-col items-center bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={image.webformatURL}
                alt={image.tags}
                className="product-image w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex-grow sm:pl-4 md:pl-0">
                <h2 className="product-title text-xl font-bold">
                  {image.tags}
                </h2>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="product-price font-bold text-lg mr-4">
                  {formatPrice(20000)}
                </p>
                <button
                  onClick={() => addToCart(image)}
                  className="add-to-cart-button bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 mb-8">
          {getPaginationNumbers().map((number, index) =>
            number === null ? (
              <span key={index} className="mx-1 text-gray-700">
                ...
              </span>
            ) : (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-3 py-1 mx-1 rounded ${
                  currentPage === number
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {number}
              </button>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;

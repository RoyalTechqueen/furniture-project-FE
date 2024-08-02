/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { useCartStore } from "./store"; // Import the store

interface Product {
  id: number; // Add id field to Product interface
  title: string;
  price: number;
  reviews: number;
  image: string;
  description: string;
}

const bestSellers: Product[] = [
  {
    id: 1,
    title: "furniture1",
    price: 45000,
    reviews: 66,
    image: "/public/living/liv2.jpg",
    description: "traditionally beautiful",
  },
  {
    id: 2,
    title: "Furniture2",
    price: 65000,
    reviews: 28,
    image: "/public/living/liv2.jpg",
    description: "traditionally beautiful",
  },
  {
    id: 3,
    title: "furniture3",
    price: 97000,
    reviews: 41,
    image: "/public/living/liv2.jpg",
    description: "traditionally beautiful",
  },
  {
    id: 4,
    title: "Furniture4",
    price: 78000,
    reviews: 31,
    image: "/public/living/liv2.jpg",
    description: "traditionally beautiful",
  },
  {
    id: 5,
    title: "Furniture5",
    price: 108000,
    reviews: 50,
    image: "/public/living/liv2.jpg",
    description: "traditionally beautiful",
  },
];

const BestSellersSection: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart); // Access addToCart function from the store

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Best Sellers</h2>
        <div className="relative">
          <Slider {...settings}>
            {bestSellers.map((product) => (
              <div key={product.id} className="px-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-center">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-orange-400" />
                      <p className="text-gray-600">{product.reviews} Reviews</p>
                    </div>
                    <p className="text-gray-600">{product.description}</p>
                    <div className=" flex items-center justify-between">
                      <p className="text-gray-600 text-lg font-bold">
                        #{product.price}
                      </p>
                      <button
                        className="mt-2 bg-green-500 text-white px-4 py-2 rounded-full"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;

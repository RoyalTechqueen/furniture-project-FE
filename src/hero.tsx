import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center  lg:justify-between min-h-screen bg-green-100 p-8">
      <div className="flex flex-col items-center mt-16 lg:items-start text-center lg:text-left max-w-xl mx-auto lg:mx-0  mb-12 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
          Elevate Your <span className="text-green-300">Living Space</span>
        </h1>
        <p className="text-black text-md lg:text-lg mb-6">
          Discover stylish solutions for every room in your home. Browse our
          curated collection of furniture and decor to find the perfect pieces
          that reflect your personal style and enhance your living space.
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-3 bg-green-600 text-black font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
        >
          View Products
        </Link>
      </div>

      <div className="relative lg:flex lg:justify-end">
        <div className="relative  shadow-lg">
          <img
            src="/living/liv1.jpg"
            alt="Home decor"
            className="w-full h-52 md:h-80 lg:w-[30rem] object-cover rounded-lg"
          />
          <img
            src="/living/liv4.jpg"
            alt="Overlapping decor"
            className="absolute w-32 h-32 md:w-52 md:h-52 object-cover rounded-full border-4 border-green-100 shadow-lg -bottom-12 -left-12 mb-8 md:mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

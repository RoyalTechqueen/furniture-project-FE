import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-end min-h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(./hero.jpg)",
      }}
    >
      <div className="flex flex-col items-center p-8 max-w-lg">
        <h1 className="md:text-2xl text-xl font-bold text-black leading-light mb-4">
          Create Your Dream Home With Our
          <span className="block text-3xl font-extrabold md:text-5xl text-green-600">
            Sophisticated Designs
          </span>
        </h1>
        <p className="md:max-w-4xl text-md mb-6 text-black lg:mb-8 md:text-md lg:text-xl">
          Discover stylish solutions for every room in your home. Browse our
          curated collection of furniture and decor to find the perfect pieces
          that reflect your personal style and enhance your living space.
        </p>
        <div className="flex justify-center items-center">
          <button className="px-8 py-2 md:py-3 bg-green-600 rounded-md hover:bg-green-800">
            <Link to="/shop">View Products</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

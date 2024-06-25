import React from "react";

const Hero: React.FC = () => {
    return (
      <section
        id="Home"
        className="flex items-center justify-center min-h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(./img5.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="flex flex-col md:flex-row items-center justify-between p-8 mt-20">
          <div className="text-center mb-8 md:mb-0">
            <h1 className="md:text-4xl text-xl font-bold text-black leading-light mb-4">
              Create Your Dream Home With Our
              <span className="block text-5xl font-extrabold md:text-8xl text-white">
                Sophisticated Designs
              </span>
            </h1>
            <p className="md:max-w-4xl  text-md mb-6 font-medium  text-black lg:mb-8 md:text-lg lg:text-xl">
              Discover stylish solutions for every room in your home.Browse our
              curated collection of furniture and decor to find the perfect
              pieces that reflect your personal style andvenhance your living
              space.
            </p>
            <div className="flex justify-center items-center">
              <button className="px-8 py-2 md:py-3 bg-white rounded-md hover:bg-green-800">
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
        </div>
      </section>
    );
};

export default Hero;
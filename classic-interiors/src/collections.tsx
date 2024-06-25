import React from "react";

const Collections: React.FC = () => {
    return (
      <section id="collections" className="bg-gray-300 py-12">
        <div className="mx-auto">
          <h1 className="font-bold text-center mb-5 text-4xl">
            Explore Our Collections
          </h1>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 1g:grid-cols-2 gap-8 px-5 py-5">
            <div className="shadow-md bg-gray-100 rounded-1g">
              <img
                src="./img5.jpg"
                alt=""
                className="w-full h-auto rounded-t-1g"
              />
              <div className="p-6">
                <h3 className="text-xl mb-4 font-semi-bold text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <div className="flex justify-center items-center">
                  <button className="px-3 py-2 bg-gray-300 hover:bg-gray-500 rounded-md hover:text-white">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="shadow-md bg-gray-100 rounded-1g">
              <img
                src="./img5.jpg"
                alt=""
                className="w-full h-auto rounded-t-1g"
              />
              <div className="p-6">
                <h3 className="text-xl mb-4 font-semi-bold text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <div className="flex justify-center items-center">
                  <button className="px-3 py-2 bg-gray-300 hover:bg-gray-500 rounded-md hover:text-whited hover:text-white">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="shadow-md bg-gray-100 rounded-1g">
              <img
                src="./img5.jpg"
                alt=""
                className="w-full h-auto rounded-t-1g"
              />
              <div className="p-6">
                <h3 className="text-xl mb-4 font-semi-bold text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <div className="flex justify-center items-center">
                  <button className="px-3 py-2 bg-gray-300 hover:bg-gray-500 rounded-md hover:text-white hover:text-white">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="shadow-md bg-gray-100 rounded-1g">
              <img
                src="./img5.jpg"
                alt=""
                className="w-full h-auto rounded-t-1g"
              />
              <div className="p-6">
                <h3 className="text-xl mb-4 font-semi-bold text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <div className="flex justify-center items-center">
                  <button className="px-3 py-2 bg-gray-300 hover:bg-gray-500 rounded-md hover:text-white hover:text-white">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Collections;
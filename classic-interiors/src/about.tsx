import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="py-12 bg-gray-200" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
              eius est. Deleniti cumque distinctio excepturi pariatur, nulla
              ipsa consequatur tempora exercitationem eaque sapiente minima
              accusantium officia nihil enim vitae, odio, quos omnis nam quis
              veritatis quasi. Ratione illo quasi mollitia. Itaque dolores odio
              porro amet expedita tempora inventore maxime perspiciatis?
            </p>
          </div>
          <div className="md:w-1/2 h-full">
            <img
              src="img5.jpg"
              alt="About me"
              className=" w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

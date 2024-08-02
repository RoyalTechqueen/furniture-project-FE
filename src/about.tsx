import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { FaArrowLeft } from "react-icons/fa";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-green-50">
      <div className="container mx-auto px-6 text-center mt-28">
        <div className="flex items-center gap-4 mt-4 mb-4">
          <button className="flex items-center text-gray-700">
            <Link to="/">
              <FaArrowLeft className="mr-2" />
            </Link>
            <span>Back</span>
          </button>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Classic Interiors
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At Classic Interiors, we blend timeless design with modern
          sophistication to bring your dream spaces to life. Our mission is to
          create stylish and functional interiors that reflect your unique taste
          and enhance your living experience.
        </p>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-700">
                Founded in 2010, Classic Interiors started with a vision to
                transform ordinary spaces into extraordinary environments. With
                over a decade of experience, our team of designers and craftsmen
                are dedicated to delivering exceptional quality and unparalleled
                service. We believe that great design should be accessible and
                that every home deserves a touch of elegance.
              </p>
            </div>
            <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
              <img
                src="/avatar.jpeg"
                alt="Our Story"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/avatar.jpeg"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Jane Doe
                </h3>
                <p className="text-gray-600">Lead Designer</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/avatar.jpeg"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  John Smith
                </h3>
                <p className="text-gray-600">Interior Architect</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/avatar.jpeg"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Emily Johnson
                </h3>
                <p className="text-gray-600">Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
            Our Values
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Quality
                </h3>
                <p className="text-gray-600">
                  We are committed to delivering the highest quality in every
                  project, using premium materials and skilled craftsmanship.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Our designs are fresh and innovative, incorporating the latest
                  trends and technologies to create unique spaces.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-300 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Customer Satisfaction
                </h3>
                <p className="text-gray-600">
                  We prioritize our clients' needs and work closely with them to
                  ensure their vision is realized with utmost satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;

import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <div className="flex bg-gray-50  border border-input mt-8  border-gray-300 justify-center rounded-2xl py-20 mx-4 md:mx-12">
      <div className="w-full px-2 md:max-w-3xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Subscribe to Our Newsletter
        </h2>
        <form className="flex items-center md:flex-row flex-col gap-4 md:gap-0">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full md:rounded-l-xl rounded-md px-4 py-3 border border-gray-300 focus:outline-none "
          />
          <button
            type="submit"
            className="bg-green-500 block w-full md:w-auto hover:bg-green-700 text-white md:rounded-r-xl rounded-md md:px-4 px-1 py-3 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;

import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg w-full md:w-1/2">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-md mx-auto bg-gray-200 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              className="block text-black  text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border rounded w-full  bg-gray-100 py-2 px-3 text-black focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded w-full bg-gray-100 py-2 px-3 text-black  focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="border rounded w-full py-2 bg-gray-100 px-3 text-black focus:outline-none focus:shadow-outline"
              placeholder="Enter your message"
              rows={5}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-gray-300 hover:bg-gray-500 hover:text-white text-black font-bold py-3 px-5 rounded-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

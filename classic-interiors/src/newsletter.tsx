import React from "react";

const NewsletterSignup: React.FC = () => {
  return (
    <section className="py-20 bg-yellow-100 p-8 rounded-lg shadow-lg w-full md:w-1/2">
      {/* <div className="container mx-auto px-4"> */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Sign Up for Our Newsletter
        </h2>
        <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className=" border rounded w-full bg-yellow-100 py-2 px-3 text-black  focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 hover:text-white text-black font-bold py-3 px-5 rounded-md"
            >
              Subscribe
            </button>
          </div>
        </form>
      {/* </div> */}
    </section>
  );
};

export default NewsletterSignup;

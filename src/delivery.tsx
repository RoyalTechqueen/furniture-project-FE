import React from "react";
import { Link } from "react-router-dom";

const Delivery: React.FC = () => {
  return (
    <div className="bg-green-50 p-6">
      <form className="max-w-lg mx-auto border border-2 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="fName"
              className="block text-sm font-medium text-black"
            >
              First Name
            </label>
            <input
              type="text"
              id="fName"
              name="fName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm rounded-md"
              placeholder="Enter First Name:"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lName"
              className="block text-sm font-medium text-black"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lName"
              name="lName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm rounded-md"
              placeholder="Enter Last Name:"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="address1"
            className="block text-sm font-medium text-black"
          >
            Address Line 1*
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm rounded-md"
            placeholder="123"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address2"
            className="block text-sm font-medium text-black"
          >
            Address Line 2
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-black"
          >
            Country*
          </label>
          <select
            name="country"
            id="country"
            className="mt-1 block w-full px-3 py-2 border border-gray-300"
            required
          >
            <option value="United States">Nigeria</option>
            <option value="United States">UAE</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-black"
            >
              City*
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-black"
            >
              State*
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-black"
            >
              Zip*
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-black"
          >
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-none sm:text-sm rounded-md"
            placeholder="+123456789"
            required
          />
        </div>
        <Link to="/payment">
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg"
          >
            Proceed to Payment
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Delivery;

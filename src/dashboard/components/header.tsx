import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaTruck,
  FaHistory,
  FaRegFileAlt,
  FaSignOutAlt,
  FaAngleDown, // Dropdown arrow
} from "react-icons/fa";

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false); // Close the dropdown when a link is clicked
  };

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white shadow-md relative">
      <h1 className="font-semibold text-xl">Welcome Back!</h1>
      <div className="flex items-center space-x-4 ml-auto">
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="flex items-center cursor-pointer space-x-2 bg-gray-100 px-3 py-2 rounded-md"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/avatar.jpeg"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-medium text-lg hidden md:block">
              Adeola Oba
            </span>
            <FaAngleDown className="text-gray-600 md:hidden" />{" "}
            {/* Only show dropdown arrow on small screens */}
          </div>

          {/* Dropdown Menu only on small screens */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 md:hidden">
              <Link
                to="/dashboard/account-overview"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick} // Close dropdown on link click
              >
                <FaUser className="mr-2" /> My Account
              </Link>
              <Link
                to="/dashboard/order"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick} // Close dropdown on link click
              >
                <FaShoppingCart className="mr-2" /> My Orders
              </Link>
              <Link
                to="/dashboard/order-tracking"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick} // Close dropdown on link click
              >
                <FaTruck className="mr-2" /> Order Tracking
              </Link>
              <Link
                to="/dashboard/order-history"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick} // Close dropdown on link click
              >
                <FaHistory className="mr-2" /> Order History
              </Link>
              <Link
                to="/dashboard/billing"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick} // Close dropdown on link click
              >
                <FaRegFileAlt className="mr-2" /> Billing
              </Link>
              <div
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  // Logic for logout
                  handleLinkClick(); // Close dropdown on logout
                }}
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

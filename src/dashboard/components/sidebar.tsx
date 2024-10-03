import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaHistory,
  FaSignOutAlt,
  FaTruck,
  FaShoppingCart,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle any logout logic here (e.g., clearing tokens, etc.)
    // Then navigate to the homepage
    navigate("/");
  };

  return (
    <div className="hidden md:flex flex-col w-1/4 h-screen bg-green-100 text-black p-4 shadow-lg">
      <div className="flex items-center mb-8">
        <img src="/logo2.png" alt="Logo" className="h-16" />
        <h1 className="ml-2 text-xl font-bold">Dashboard</h1>
      </div>
      <ul className="flex-grow space-y-4">
        <li>
          <Link
            to="/dashboard/account-overview"
            className="flex items-center py-2 px-4 hover:bg-green-500 rounded-md"
          >
            <FaUser className="mr-2" /> My Account
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/order"
            className="flex items-center py-2 px-4 hover:bg-green-500 rounded-md"
          >
            <FaShoppingCart className="mr-2" /> My Orders
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/order-tracking"
            className="flex items-center py-2 px-4 hover:bg-green-500 rounded-md"
          >
            <FaTruck className="mr-2" /> Order Tracking
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/order-history"
            className="flex items-center py-2 px-4 hover:bg-green-500 rounded-md"
          >
            <FaHistory className="mr-2" /> Order History
          </Link>
        </li>
      </ul>

      <div
        className="mt-auto flex items-center py-2 px-4 hover:bg-green-500 rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="mr-2" /> Logout
      </div>
    </div>
  );
};

export default Sidebar;

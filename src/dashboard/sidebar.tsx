import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface SidebarProps {
  onNavClick: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavClick }) => {
  const handleLogout = () => {
    toast.success("Logged out successfully");
  };
  return (
    <div className="w-52 bg-green-100 text-white h-full fixed top-0 left-0 p-5">
      <div>
        <img src="/logo2.png" alt="logo" className="h-32 w-32" />
      </div>
      <nav className="flex flex-col space-y-4">
        <a
          href="#"
          onClick={() => onNavClick("dashboard")}
          className="p-2 rounded-md hover:border-t-4 hover:border-r-4 hover:border-green-500 hover:border-t-white"
        >
          Dashboard
        </a>
        <a
          href="#"
          onClick={() => onNavClick("order-tracking")}
          className="p-2 rounded-md hover:border-t-4 hover:border-r-4 hover:border-green-500 hover:border-t-white"
        >
          Order Tracking
        </a>
        <a
          href="#"
          onClick={() => onNavClick("order-history")}
          className="p-2 rounded-md hover:border-t-4 hover:border-r-4 hover:border-green-500 hover:border-t-white"
        >
          Order History
        </a>
        <a
          href="#"
          onClick={() => onNavClick("profile")}
          className="p-2 rounded-md hover:border-t-4 hover:border-r-4 hover:border-green-500 hover:border-t-white"
        >
          Profile
        </a>
        <Link
          to="/"
          onClick={handleLogout}
          className="p-2 rounded-md hover:border-t-4 hover:border-r-4 hover:border-green-500 hover:border-t-white"
        >
          Log Out
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

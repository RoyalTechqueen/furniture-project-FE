import React from "react";
import OrderHistory from "./orderhistory";
import OrderTracking from "./ordertracking";
import Profile from "./profile";

interface MainContentProps {
  currentSection: string;
}

const MainContent: React.FC<MainContentProps> = ({ currentSection }) => {
  switch (currentSection) {
    case "dashboard":
      return <div>Dashboard Content</div>;
    case "order-tracking":
      return (
        <div>
          <OrderTracking />
        </div>
      );
    case "order-history":
      return (
        <div>
          <OrderHistory />
        </div>
      );
    case "profile":
      return (
        <div>
          <Profile />
        </div>
      );
    default:
      return <div>Dashboard Content</div>;
  }
};

export default MainContent;

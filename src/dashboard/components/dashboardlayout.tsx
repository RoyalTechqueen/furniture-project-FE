import React, { ReactNode } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-2">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

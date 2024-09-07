import React, { useState } from "react";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";

const DashboardPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("dashboard");

  const handleNavClick = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onNavClick={handleNavClick} />
      <div className="flex-1 ml-52 p-5">
        <MainContent currentSection={currentSection} />
      </div>
    </div>
  );
};

export default DashboardPage;

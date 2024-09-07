import "./index.css";
import React from "react";
import Hero from "./hero";
import BestSellers from "./components/bestsellers";
import ProductPage from "./components/productpage";
import Header from "./header";
import Footer from "./footer";
import NewsletterSection from "./components/newsletter";

const Home: React.FC = () => {
  return (
    <div className="bg-green-50">
      <Header />
      <Hero />
      <BestSellers />
      <ProductPage />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;

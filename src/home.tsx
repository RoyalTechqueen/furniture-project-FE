import "./index.css";
import React from "react";
import Hero from "./hero";
import BestSellers from "./bestsellers";
import ProductPage from "./productpage";
import Blog from "./blog";
import Header from "./header";
import Footer from "./footer";
import Contact from "./contact";

const Home: React.FC = () => {
  return (
    <div className="bg-green-50">
      <Header />
      <Hero />
      <BestSellers />
      <ProductPage />
      {/* <CustomerReviews /> */}
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

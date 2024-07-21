import "./index.css";
import React from "react";
import Header from "./header";
import Hero from "./hero";

import ProductPage from "./productpage";
// import Testimonials from "./testimonials";
// import NewsletterSignup from "./newsletter";
// import Contact from "./contact";
import Footer from "./footer";

const Home: React.FC = () => {
  return (
    <div className="mx-auto h-full w-full overflow-auto">
      <Header />
      <Hero />

      <ProductPage />
      {/* <Testimonials /> */}
      {/* <section className="py-12 bg-customYellow" id="contact">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <img
            src="../public/bedroom/img1 (3).jpg"
            alt=""
            className="py-20  p-8 shadow-lg w-full h-full md:w-1/2"
          />
          <NewsletterSignup />
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default Home;

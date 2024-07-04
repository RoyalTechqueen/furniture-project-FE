import "./index.css";
import React from "react";
import Header from "./header";
import Hero from "./hero";
import Collections from "./collections"
// import Testimonials from "./testimonials";
// import NewsletterSignup from "./newsletter";
// import Contact from "./contact";
import Footer from "./footer";

const App: React.FC = () => {
  return (
    <div className="mx-auto h-full w-full overflow-auto">
      <Header />
      <Hero />
      <Collections />
      {/* <Testimonials />
      <section className="py-12 bg-gray-200" id="contact">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <Contact />
          <NewsletterSignup />
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Cart from "./cart";
import Checkout from "./checkout";
import AppLayout from "./AppLayout";
import Shop from "./shop";
import AboutMe from "./about";
import BlogPage from "./blogpage";
import Payment from "./payment";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="blogpage" element={<BlogPage />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

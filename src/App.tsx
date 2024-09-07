import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Cart from "./components/cart";
import Contact from "./components/contact";
import Checkout from "./components/checkout";
import AppLayout from "./AppLayout";
import Shop from "./components/shop";
import AboutMe from "./about";
import BlogPage from "./components/blogpage";
import Payment from "./components/payment";
import Login from "./components/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./dashboard/dashboard";
import SignUp from "./components/signup";

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
          <Route path="contact" element={<Contact />} />
          <Route path="blogpage" element={<BlogPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
};

export default App;

import React from "react";
import { useCartStore } from "./store";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Delivery from "./delivery";
import Header from "./header";

const Checkout: React.FC = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto bg-green-50 min-h-screen">
      <Header />
      <div className="p-4">
        <div className="flex flex-row mt-24 items-center gap-2 mb-4">
          <FaArrowLeft onClick={() => navigate("/cart")} />
          <p>Back</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 bg-green-50">
          <div className="md:col-span-2">
            <Delivery />
          </div>
          <div>
            <div className=" space-y-4 p-6 mb-4">
              <div className="border border-2 shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Items:</span>
                  <span>{itemCount}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Total Price:</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <div className="border border-2 shadow-md p-6">
                <h3 className="text-lg font-bold mb-4">Order Details</h3>
                <hr className="my-4" />
                {cart.map((item) => (
                  <div key={item.id} className="flex mb-4 border-b pb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover mr-4"
                    />
                    <div className="flex flex-col gap-2 justify-between">
                      <span className="font-medium">{item.title}</span>
                      <span>{item.description}</span>
                      <div className="px-3 py-2 border border-1">
                        <span>Quantity: {item.quantity}</span>
                      </div>
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

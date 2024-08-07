import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useCartStore } from "./store";
import Header from "./header";

const Payment = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handlePayment = () => {
    // Simulate a payment process
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="bg-green-50 min-h-screen flex flex-col justify-between">
      <Header />
      <div className="p-4">
        <div className="flex flex-row items-center gap-2 mt-24 mb-4">
          <FaArrowLeft onClick={() => navigate("/checkout")} />
          <p>Back</p>
        </div>
        <h2 className="text-2xl text-center font-bold">Payment details</h2>
        <div className="grid md:grid-cols-3 gap-4 bg-green-50">
          <div className="md:col-span-3">
            <form className="bg-white mt-4 p-8 rounded shadow-md max-w-lg mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700">Email address</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Credit Card Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                />
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label className="block text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-gray-700">CVV</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="***"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4 mb-4">
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
              </div>
              <button
                type="button"
                className="w-full bg-green-500 text-white p-2 rounded"
                onClick={handlePayment}
              >
                Make payment
              </button>
            </form>
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md text-center">
              <h2 className="text-xl font-bold mb-4">Payment Successful</h2>
              <p className="mb-4">Your payment was processed successfully.</p>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                Return to Homepage
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;

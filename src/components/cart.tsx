import React from "react";
import { useCartStore } from "../store";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import Header from "../header";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format(price);
};

const Cart: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const { getCartItemCount } = useCartStore((state) => ({
    getCartItemCount: state.getCartItemCount,
  }));

  const cartItemCount = getCartItemCount();

  // Calculate total price
  const total = cart.reduce((sum, item) => {
    const itemTotal = item.quantity * item.price;
    return sum + itemTotal;
  }, 0);

  return (
    <div className="bg-green-50 min-h-screen">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mt-24 text-center">Cart Page</h1>
        <div className="flex items-center gap-4 mb-4">
          <button className="flex items-center text-gray-700">
            <Link to="/">
              <FaArrowLeft className="mr-2" />
            </Link>
            <span>Back</span>
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center">
            <img
              src="/empty cart.png"
              alt="Empty Cart"
              className="w-72 h-48 object-contain"
            />
            <p className="text-xl font-semibold mt-4">
              Your Cart Is Currently Empty!
            </p>
            <p className="mb-4 text-center text-lg">
              Your journey to a beautifully styled home starts here.{" "}
              <br className="hidden sm:flex" /> Click{" "}
              <Link
                to="/shop"
                className="font-semibold text-green-500 underline"
              >
                here
              </Link>{" "}
              to explore our curated collection of furniture and decor{" "}
              <br className="hidden sm:flex" /> to find pieces that inspire
              elegance and comfort in every room.
            </p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="md:w-2/3 bg-green-50 p-6 shadow-lg rounded-md">
              <div className="overflow-x-auto">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-xl font-semibold">
                    Cart <span>({cartItemCount} products)</span>
                  </h1>
                  <div className="flex items-center gap-1">
                    <IoMdClose className="h-6 w-6 text-red-600" />
                    <button
                      className="text-red-600 text-left"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full hidden md:table bg-white shadow-md rounded-lg">
                    <thead className="bg-green-100">
                      <tr>
                        <th className="px-4 py-2 text-left">Product</th>
                        <th className="px-4 py-2 text-left">Quantity</th>
                        <th className="px-4 py-2 text-left">Price</th>
                        <th className="px-4 py-2 text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id} className="border-b">
                          <td className="px-4 py-2 flex items-center">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16 h-16 md:h-20 md:w-20 object-cover rounded-md"
                            />
                            <span className="ml-4">{item.title}</span>
                          </td>
                          <td className="px-4 py-2">
                            <div className="flex items-center">
                              <button
                                className="h-8 w-8 rounded-full bg-white border border-gray-300"
                                onClick={() => decreaseQuantity(item.id)}
                              >
                                <FiMinus className="h-4 w-4 ml-2" />
                              </button>
                              <span className="mx-2 text-lg font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                className="h-8 w-8 rounded-full bg-white border border-gray-300"
                                onClick={() => increaseQuantity(item.id)}
                              >
                                <FaPlus className="h-4 w-4 ml-2" />
                              </button>
                            </div>
                          </td>
                          <td className="px-4 py-2">
                            {formatPrice(item.price * item.quantity)}
                          </td>
                          <td className="px-4 py-2 text-center">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-600"
                            >
                              <IoMdClose className="h-6 w-6" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="w-full bg-green-50 md:hidden p-4 shadow-lg rounded-md">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start mb-4 border-b pb-4"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md"
                      />
                      <div className="ml-4 flex flex-col text-left items-start">
                        <h2 className="text-md font-semibold">{item.title}</h2>
                        <h3 className="text-lg font-bold">
                          {formatPrice(item.price)}
                        </h3>
                        <div className="flex items-start mt-2">
                          <button
                            className="h-8 w-8 rounded-full bg-white border border-gray-300"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            <FiMinus className="h-4 w-4 ml-2" />
                          </button>
                          <span className="mx-2 text-lg font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            className="h-8 w-8 rounded-full bg-white border border-gray-300"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            <FaPlus className="h-4 w-4 ml-2" />
                          </button>
                          <button
                            className="ml-4 px-2 py-1"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <IoMdClose className="h-6 w-6 text-red-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-green-50 p-6 shadow-md rounded-lg max-h-full overflow-auto">
              <h2 className="text-xl font-bold mb-4 text-center">
                Cart Summary
              </h2>
              {cart.length > 0 && (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between mb-2">
                      <span className="text-lg">{item.title}</span>
                      <span className="text-lg">{formatPrice(item.price)}</span>
                    </div>
                  ))}
                  <hr className="my-4" />
                  <div className="flex justify-between font-bold text-lg mb-4">
                    <span>Order Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <button className="w-full bg-green-500 text-white p-2 rounded-lg mb-4">
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import { useCartStore } from "./store";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const {
    items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    getCartItemCount,
  } = useCartStore((state) => ({
    items: state.items,
    removeItem: state.removeItem,
    increaseQuantity: state.increaseQuantity,
    decreaseQuantity: state.decreaseQuantity,
    getTotalPrice: state.getTotalPrice,
    getCartItemCount: state.getCartItemCount,
  }));

  console.log("Cart items on render:", items);

  const totalPrice = getTotalPrice();
  const itemCount = getCartItemCount();

  const shippingCost = itemCount > 0 ? 10.0 : 0.0; // Example shipping cost
  const taxRate = 0.07; // Example tax rate (7%)
  const tax = totalPrice * taxRate;
  const finalTotal = totalPrice + shippingCost + tax;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {items.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4 p-4 border border-gray-200 rounded"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-4 border border-gray-200 rounded">
            <h3 className="text-xl font-bold mb-2">Order Summary</h3>
            <div className="mb-2">
              <div className="flex justify-between">
                <span>Items Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Cost:</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (7%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total Amount:</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

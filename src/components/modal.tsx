import React from "react";
import { FaTimes } from "react-icons/fa";
import { Furniture } from "../furnituredata";
import { useCartStore } from "../store";

interface ModalProps {
  item: Furniture | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const { addToCart } = useCartStore((state) => ({
    addToCart: state.addToCart,
  }));

  if (!item) return null;

  const price =
    typeof item.price === "string" ? parseFloat(item.price) : item.price;

  // Format price with commas
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-4xl w-full flex flex-col md:flex-row relative">
        <button
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 focus:outline-none"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <FaTimes />
        </button>
        <img
          src={item.image}
          alt={item.title}
          className="w-full md:w-1/2 h-64 object-cover"
        />
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-700 mb-2">{item.description}</p>
          <p className="text-lg text-gray-900 font-semibold">
            {formatPrice(price)}
          </p>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => {
              addToCart({
                id: item.id,
                title: item.title,
                price: price,
                image: item.image,
                description: item.description,
              });
              onClose();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

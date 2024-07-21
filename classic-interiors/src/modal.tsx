import React from "react";
import { FaTimes } from "react-icons/fa";
import { Furniture } from "./furnituredata";
import { useCartStore } from "./store";

interface ModalProps {
  item: Furniture | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const { addItem } = useCartStore((state) => ({
    addItem: state.addItem,
  }));

  if (!item) return null;

  const price =
    typeof item.price === "string" ? parseFloat(item.price) : item.price;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <FaTimes />
        </button>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
        <p className="text-gray-700 mb-2">{item.description}</p>
        <p className="text-lg text-gray-900 font-semibold">
          #{price.toFixed(2)}
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => {
            addItem({
              id: item.id,
              title: item.title,
              price: price,
              quantity: 1,
              image: item.image,
            });
            console.log("Item added to cart:", {
              id: item.id,
              title: item.title,
              price: price,
              quantity: 1,
              image: item.image,
            });
            onClose();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Modal;

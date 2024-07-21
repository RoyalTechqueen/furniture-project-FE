import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Furniture } from "./furnituredata";
import { useCartStore } from "./store";

interface FurnitureCardProps {
  furniture: Furniture;
  onClick: () => void;
}

const FurnitureCard: React.FC<FurnitureCardProps> = ({
  furniture,
  onClick,
}) => {
  const { addItem } = useCartStore((state) => ({
    addItem: state.addItem,
  }));

  const price =
    typeof furniture.price === "string"
      ? parseFloat(furniture.price)
      : furniture.price;

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative cursor-pointer"
      onClick={onClick}
    >
      <img className="w-full" src={furniture.image} alt={furniture.title} />
      <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
        <FaShoppingCart
          className="text-gray-700"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click event from firing on the card itself
            addItem({
              id: furniture.id,
              title: furniture.title,
              price: price,
              quantity: 1,
              image: furniture.image,
            });
            console.log("Item added to cart from FurnitureCard:", {
              id: furniture.id,
              title: furniture.title,
              price: price,
              quantity: 1,
              image: furniture.image,
            });
          }}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{furniture.title}</div>
        <p className="text-gray-700 mb-2">{furniture.description}</p>
        <p className="text-lg text-gray-900 font-semibold">
          #{price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default FurnitureCard;

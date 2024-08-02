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
  const { addToCart } = useCartStore((state) => ({
    addToCart: state.addToCart,
  }));

  const price =
    typeof furniture.price === "string"
      ? parseFloat(furniture.price)
      : furniture.price;

  // Format price with commas
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative cursor-pointer"
      onClick={onClick}
    >
      <img
        className="w-full h-60 object-cover"
        src={furniture.image}
        alt={furniture.title}
      />
      <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
        <FaShoppingCart
          className="text-gray-700"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click event from firing on the card itself
            addToCart({
              id: furniture.id,
              title: furniture.title,
              price: price,
              image: furniture.image,
              description: furniture.description,
            });
          }}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{furniture.title}</div>
        <p className="text-gray-700 mb-2">{furniture.description}</p>
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg text-gray-900 font-semibold">
            {formatPrice(price)}
          </p>
          <button
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-full"
            onClick={() => {
              addToCart({
                id: furniture.id,
                title: furniture.title,
                price: price,
                image: furniture.image,
                description: furniture.description,
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;

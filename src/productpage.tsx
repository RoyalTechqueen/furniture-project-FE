import { useState } from "react";
import Modal from "./modal";
import { furnitures, Furniture } from "./furnituredata";
import FurnitureCard from "./furniturecard";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFurniture, setSelectedFurniture] = useState<Furniture | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filterFurnitures = () => {
    let filteredFurnitures = [...furnitures];

    if (selectedCategory !== "All") {
      filteredFurnitures = filteredFurnitures.filter(
        (furniture) => furniture.category === selectedCategory
      );
    }

    return filteredFurnitures;
  };

  const handleCardClick = (furniture: Furniture) => {
    setSelectedFurniture(furniture);
  };

  const closeModal = () => {
    setSelectedFurniture(null);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterFurnitures().slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filterFurnitures().length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen ">
      {/* Dropdown for selecting category */}
      <div className="mb-4 flex flex-col justify-between  items-center text-center flex-wrap">
        <h1 className="text-3xl font-bold mb-4 text-center mt-4">
          Our Products
        </h1>
        <div className="flex gap-4 items-center">
          <h2> Sort By:</h2>
          <div className="border rounded  px-8 py-2 bg-white text-md font-medium flex items-center">
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              className="px-2 py-1"
            >
              <option value="All">All</option>
              <option value="Living">Living</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Dining">Dining</option>
              <option value="Office">Office</option>
            </select>
          </div>
        </div>
      </div>
      {/* Render filtered list */}
      <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2  lg:grid-cols-3 gap-6">
        {currentItems.map((furniture) => (
          <FurnitureCard
            key={furniture.id}
            furniture={furniture}
            onClick={() => handleCardClick(furniture)}
          />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center mt-4 mb-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {/* Modal for detailed view */}
      <Modal item={selectedFurniture} onClose={closeModal} />
    </div>
  );
};

export default ProductPage;

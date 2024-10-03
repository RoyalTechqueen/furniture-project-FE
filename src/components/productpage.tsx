import { useState } from "react";
import Modal from "./modal";
import { furnitures, Furniture } from "../furnituredata";
import FurnitureCard from "./furniturecard";
import Pagination from "./pagination";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFurniture, setSelectedFurniture] = useState<Furniture | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Function to filter and sort the furnitures
  const filterFurnitures = () => {
    let filteredFurnitures = [...furnitures];
    if (selectedCategory !== "All") {
      filteredFurnitures = filteredFurnitures.filter(
        (furniture) => furniture.category === selectedCategory
      );
    }
    // Sort alphabetically by name
    filteredFurnitures.sort((a, b) => a.title.localeCompare(b.title));
    return filteredFurnitures;
  };

  const handleCardClick = (furniture: Furniture) => {
    setSelectedFurniture(furniture);
  };

  const closeModal = () => {
    setSelectedFurniture(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterFurnitures().slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filterFurnitures().length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen p-6">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Products</h1>
        <div className="w-full max-w-screen-8xl flex justify-between items-center mb-6">
          <div className="flex gap-4 items-center">
            <h2 className="text-lg font-semibold">Sort By:</h2>
            <div className="border rounded px-4 py-2 bg-white text-md font-medium flex items-center">
              <select
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
                className="px-2 py-1 outline-none"
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
      </div>

      <div className="grid grid-cols-1 max-w-screen-8xl mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {currentItems.map((furniture) => (
          <FurnitureCard
            key={furniture.id}
            furniture={furniture}
            onClick={() => handleCardClick(furniture)}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />

      <Modal item={selectedFurniture} onClose={closeModal} />
    </div>
  );
};

export default ProductPage;

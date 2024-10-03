import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 4;

    buttons.push(
      <button
        key="prev"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 mx-1 rounded-md ${
          currentPage === 1 ? "text-gray-500 cursor-not-allowed" : "text-black"
        }`}
      >
        <FaAngleLeft />
      </button>
    );

    if (currentPage >= maxVisiblePages) {
      buttons.push(
        <button
          key={1}
          onClick={() => paginate(1)}
          className={`mx-1 px-3 py-1 rounded-md ${
            currentPage === 1
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          1
        </button>
      );
      buttons.push(
        <span key="dots" className="mx-1">
          ...
        </span>
      );
    }

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`mx-1 px-3 py-1 rounded-full ${
            currentPage === i
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages - 1) {
      buttons.push(
        <span key="dots2" className="mx-1 ">
          ...
        </span>
      );
    }
    if (endPage < totalPages) {
      buttons.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className={`mx-1 px-3 py-1 rounded-full ${
            currentPage === totalPages
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    buttons.push(
      <button
        key="next"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 mx-1 rounded-md ${
          currentPage === totalPages
            ? "text-gray-500 cursor-not-allowed"
            : "text-black"
        }`}
      >
        <FaAngleRight />
      </button>
    );

    return buttons;
  };

  return (
    <div className="flex justify-end mt-4 mb-8">
      {renderPaginationButtons()}
    </div>
  );
};

export default Pagination;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const blogArticles = [
  {
    id: 1,
    title: "Article 1",
    content: "Full article content 1",
    date: "Date 1",
  },
  {
    id: 2,
    title: "Article 2",
    content: "Full article content 2",
    date: "Date 2",
  },
  {
    id: 3,
    title: "Article 3",
    content: "Full article content 3",
    date: "Date 3",
  },
  {
    id: 4,
    title: "Article 4",
    content: "Full article content 4",
    date: "Date 4",
  },
  {
    id: 5,
    title: "Article 5",
    content: "Full article content 5",
    date: "Date 5",
  },
  {
    id: 6,
    title: "Article 6",
    content: "Full article content 6",
    date: "Date 6",
  },
  {
    id: 7,
    title: "Article 7",
    content: "Full article content 7",
    date: "Date 7",
  },
  {
    id: 8,
    title: "Article 8",
    content: "Full article content 8",
    date: "Date 8",
  },
  {
    id: 9,
    title: "Article 9",
    content: "Full article content 9",
    date: "Date 9",
  },
];

const BlogPage: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="container mx-auto bg-green-50 min-h-screen">
      <header className="w-full z-10 transition-colors duration-300 bg-white">
        <div className="mx-auto flex max-w-screen-2xl px-4 py-6 sm:px-6 justify-between items-center space-x-5">
          <div className="flex items-center">
            <img src="/logo2.png" alt="logo" className="h-16 rounded-xl" />
          </div>
          <nav className="hidden sm:flex space-x-8 items-center mr-8 text-xl">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
          </nav>
          <button
            className="block sm:hidden ml-4"
            aria-label="Toggle Menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
        <div
          className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-2xl"
              aria-label="Close Menu"
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-6">
            <img src="/logo2.png" alt="logo" className="h-20 mb-4" />
            <Link
              to="/"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
          </nav>
        </div>
      </header>
      <Link to="/">
        <button className="flex items-center ml-4 text-gray-700">
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </button>
      </Link>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          All Blog Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="/living/liv3.jpg"
                alt={article.title}
                className="w-full h-40 object-cover cursor-pointer"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.content}</p>
                <p className="text-gray-400 text-sm">{article.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

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
  return (
    <div className="bg-gray-50 py-16">
      <div className="flex items-center gap-4 mt-12 mb-4">
        <button className="flex items-center text-gray-700">
          <Link to="/">
            <FaArrowLeft className="mr-2" />
          </Link>
          <span>Back</span>
        </button>
      </div>
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

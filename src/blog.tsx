import React from "react";
import { Link } from "react-router-dom"; // Adjust based on your routing library

const articles = [
  {
    id: 1,
    title: "Exploring Modern Interior Design Trends",
    excerpt:
      "Discover the latest trends in modern interior design and how to incorporate them into your home.",
    image: "/public/living/liv2.jpg",
    date: "August 1, 2024",
    content:
      "Full article content about exploring modern interior design trends...",
  },
  {
    id: 2,
    title: "Top 10 Furniture Pieces for Your Living Room",
    excerpt:
      "Find out which furniture pieces can elevate your living room's style and comfort.",
    image: "/public/living/liv2.jpg",
    date: "July 28, 2024",
    content:
      "Full article content about top 10 furniture pieces for your living room...",
  },
  {
    id: 3,
    title: "How to Choose the Perfect Color Palette",
    excerpt:
      "Learn how to select the right color palette to enhance your interior spaces.",
    image: "/public/living/liv2.jpg",
    date: "July 15, 2024",
    content: "Full article content about choosing the perfect color palette...",
  },
  {
    id: 4,
    title: "Sustainable Materials in Interior Design",
    excerpt:
      "Explore the benefits of using sustainable materials in your home and why it's important.",
    image: "/public/living/liv2.jpg",
    date: "July 5, 2024",
    content:
      "Full article content about sustainable materials in interior design...",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="scroll-mt-24 py-16" id="blog">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-3xl text-center font-semibold text-gray-900">
            Latest Articles
          </h2>
          <Link
            to="/blogpage"
            className="text-green-500 hover:text-green-800 font-semibold"
          >
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="block bg-green-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-92 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <p className="text-gray-400 text-sm">{article.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

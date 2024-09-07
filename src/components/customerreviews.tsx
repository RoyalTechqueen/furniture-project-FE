import React from "react";

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    text: "Great product! Highly recommend.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Quality could be better, but overall satisfied.",
    rating: 4,
  },
  // Add more reviews as needed
];

const CustomerReviews: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                {review.name[0]}
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold">{review.name}</h4>
                <div className="flex">
                  {[...Array(review.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.383 2.455a1 1 0 00-.364 1.118l1.287 3.975c.3.92-.755 1.688-1.54 1.118l-3.384-2.455a1 1 0 00-1.175 0l-3.383 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.27 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.287-3.975z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

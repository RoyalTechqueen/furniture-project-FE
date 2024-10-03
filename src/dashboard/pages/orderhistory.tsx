import React from "react";

const OrderHistory: React.FC = () => {
  const orderItems = [
    {
      id: 1,
      name: "Living Product 1",
      image: "/living/liv1.jpg", // Replace with actual image URLs
      price: "₦57,000",
      status: "Delivered",
      date: "25-07-2024",
    },
    {
      id: 2,
      name: "Dining Product 3",
      image: "/dining/din1.jpg", // Replace with actual image URLs
      price: "₦92,000",
      status: "Delivered",
      date: "25-07-2024",
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6"> Past Order Details</h1>
      <div className="space-y-6">
        {orderItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row border rounded-lg p-4"
          >
            <div className="flex-shrink-0 w-full md:w-24 h-24">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow md:ml-4">
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-500">QTY: 1</p>
                <p className="text-green-600 font-bold">{item.price}</p>
              </div>
            </div>
            <div className="ml-auto flex flex-col justify-between items-end">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                Buy Again
              </button>
              <p className="text-green-500 mt-2 cursor-pointer">
                See Status History
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;

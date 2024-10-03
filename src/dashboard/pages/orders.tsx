import React, { useState } from "react";

const Order: React.FC = () => {
  const allOrders = [
    {
      id: "#1000",
      name: "Living product-1",
      date: "18-07-2024",
      items: "2 Items",
      status: "Pending",
    },
    {
      id: "#1001",
      name: "Living product-1",
      date: "19-07-2024",
      items: "1 Item",
      status: "Completed",
    },
    {
      id: "#1002",
      name: "Living product-1",
      date: "18-08-2024",
      items: "4 Items",
      status: "Cancelled",
    },
    {
      id: "#1003",
      name: "Living product-1",
      date: "19-07-2024",
      items: "1 Item",
      status: "Completed",
    },
    {
      id: "#1004",
      name: "Living product-1",
      date: "18-07-2024",
      items: "8 Items",
      status: "Pending",
    },
    {
      id: "#1005",
      name: "Living product-1",
      date: "21-07-2024",
      items: "1 Item",
      status: "Cancelled",
    },
  ];

  const [statusFilter, setStatusFilter] = useState<string>("All");

  const handleFilterChange = (status: string) => {
    setStatusFilter(status);
  };

  const filteredOrders = allOrders.filter((order) => {
    if (statusFilter === "All") return true;
    return order.status === statusFilter;
  });

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {/* Filter Buttons */}
      <div className="mb-4 flex justify-end space-x-4">
        {["All", "Pending", "Completed", "Cancelled"].map((status) => (
          <button
            key={status}
            onClick={() => handleFilterChange(status)}
            className={`px-4 py-2 rounded ${
              statusFilter === status
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Order ID</th>
              <th className="px-4 py-2 text-left text-gray-600">Item Name</th>
              <th className="px-4 py-2 text-left text-gray-600">Date</th>
              <th className="px-4 py-2 text-left text-gray-600">Items</th>
              <th className="px-4 py-2 text-left text-gray-600">Status</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.name}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">{order.items}</td>
                <td
                  className={`px-4 py-2 ${
                    order.status === "Pending"
                      ? "text-yellow-500"
                      : order.status === "Completed"
                      ? "text-green-600"
                      : order.status === "Cancelled"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {order.status}
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;

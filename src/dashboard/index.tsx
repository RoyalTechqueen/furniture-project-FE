import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/dashboardlayout";
import AccountOverview from "./pages/account";
import Order from "./pages/orders";
import OrderHistory from "./pages/orderhistory";
import OrderTracking from "./pages/ordertracking";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className=" p-4">
        {" "}
        <Routes>
          <Route index element={<AccountOverview />} /> {/* Default route */}
          <Route path="account-overview" element={<AccountOverview />} />
          <Route path="order" element={<Order />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="order-tracking" element={<OrderTracking />} />
        </Routes>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

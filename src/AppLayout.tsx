import { Outlet } from "react-router-dom";
import Header from "./header";

export default function AppLayout() {
  return (
    <div className="mx-auto h-full w-full overflow-auto">
      <Header />
      <Outlet />
    </div>
  );
}

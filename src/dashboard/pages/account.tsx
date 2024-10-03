import React from "react";
import { FaPen } from "react-icons/fa"; // Importing a pen icon from React Icons

const AccountOverview: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Account Overview</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">User Details</h3>
          <hr className="my-4" style={{ borderTop: "2px solid" }} />
          <p className="text-black text-lg">Asma'a Khadijah Ishowo</p>
          <p className="text-black text-lg">asmaaishowo2912@gmail.com</p>
        </div>

        <div className="p-4 border rounded shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">Address Details</h3>
            <FaPen className="text-black cursor-pointer" />
          </div>
          <hr className="my-4" style={{ borderTop: "2px solid " }} />
          <p className="text-black">Your default shipping address:</p>
          <p className="text-black">Asmaa Ishowo</p>
          <p className="text-black">Tanik foods Olohunsogo sawmill area</p>
          <p className="text-black">Ilorin -Taiwo-Airport, Kwara</p>
          <p className="text-black">+234 8085032329 / +234 9085671784</p>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;

import React from "react";
import { CiSettings } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { BsBagCheckFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";

const Sidebar = () => {
  const sidebarItems = [
    { id: 1, name: "Dashboard", icon: <MdDashboard /> },
    {
      id: 2,
      name: "Product List",
      icon: <MdOutlineProductionQuantityLimits />,
    },

    {
      id: 3,
      name: "Product Edit",
      icon: <CiEdit />,
    },
    {
      id: 4,
      name: "New Product ",
      icon: <MdAddShoppingCart />,
    },

    {
      id: 5,
      name: "Order Details",
      icon: <BsBagCheckFill />,
    },
    { id: 6, name: "Settings", icon: <CiSettings /> },
    // add more items as needed
  ];
  return (
    <div className="shadow-md h-screen px-9 ">
      <div className="flex py-4 space-x-3 text-white items-center ">
        <MdOutlineShoppingCart className="text-2xl" />
        <h1 className="text-xl">Mollar Store</h1>
      </div>
      <div className=" text-white  mt-2 py-5 space-y-7   ">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="flex space-x-2 items-center cursor-pointer"
          >
            <h6 className="text-2xl">{item.icon}</h6>
            <h1 className="text-lg">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

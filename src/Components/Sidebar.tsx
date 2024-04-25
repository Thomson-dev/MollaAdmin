import React from "react";
import { CiSettings } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { BsBagCheckFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarItems = [
    { id: 1, name: "Dashboard", url: "/", icon: <MdDashboard /> },
    {
      id: 2,
      name: "Product List",
      url: "/product-list",
      icon: <MdOutlineProductionQuantityLimits />,
    },

    {
      id: 3,
      name: "Product Edit",
      url: "/",
      icon: <CiEdit />,
    },
    {
      id: 4,
      name: "New Product ",
      url: "/new-product",
      icon: <MdAddShoppingCart />,
    },

    {
      id: 5,
      name: "Order Details",
      url: "/",
      icon: <BsBagCheckFill />,
    },
    { id: 6, name: "Settings", url: "/", icon: <CiSettings /> },
    // add more items as needed
  ];
  return (
    <div className="shadow-md h-full w-full  lg:px-4 md:px-2  ">
      <div className="flex py-4 space-x-3 text-white items-center ">
        <MdOutlineShoppingCart className="text-2xl" />
        <h1 className="text-xl">Mollar Store</h1>
      </div>
      <div className=" text-white mt-2 py-5 space-y-7   ">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="flex space-x-2   items-center cursor-pointer"
          >
            <h6 className="text-2xl">{item.icon}</h6>
            <h1 className="text-lg">
                {item.url && <Link to={item.url}>{item.name}</Link>}
              </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

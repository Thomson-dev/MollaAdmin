import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { CiEdit } from "react-icons/ci";
import { BsBagCheckFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      url: "/",
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
  const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <div className="">
      <div className="border-b border-slate-600  shadow-sm flex md:justify-between justify-between  p-2 px-4 items-center">
        <div className="flex items-center space-x-5">
          <RxHamburgerMenu
            className="text-2xl text-white md:hidden"
            onClick={() => setSidebar((prevSidebar) => !prevSidebar)}
          />
           <FaSearch className="text-xl text-slate-500" />
        </div>
       

        <div className="text-slate-300">
          <p>Admin</p>
          <h3 className="text-lg font-bold">Thomson</h3>
        </div>
      </div>
      <div
        className={`w-[270px] h-[100vh] md:hidden block z-40 shadow-lg  fixed top-0 left-0 transition-left duration-500 ease-in-out bg-slate-700 ${
          sidebar ? "left-0" : "left-[-100%] "
        } `}
      >
        <ul className="px-5 mt-6  font-sans text-[14px] Inter text-slate-200  space-y-7">
          <div className="flex justify-between">
            <h1 className="text-xl">Mollar Store</h1>
            <FaTimes
              className="text-[18px] text-slate-100"
              onClick={() => setSidebar((prevSidebar) => !prevSidebar)}
            />
          </div>
          {sidebarItems.map((link) => (
            <div
              key={link.id}
              className="flex space-x-2   items-center cursor-pointer"
            >
              <h6 className="text-2xl">{link.icon}</h6>
              <h1 className="text-lg">
                {link.url && <Link to={link.url}>{link.name}</Link>}
              </h1>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

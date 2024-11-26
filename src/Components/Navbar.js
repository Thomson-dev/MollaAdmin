import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import photo from "../asserts/photo.jpg";

import { CiEdit } from "react-icons/ci";
import { BsBagCheckFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const navLinks = [
  { id: 1, name: "Dashboard", url: "/dashboard", icon: <MdDashboard /> },
  {
    id: 2,
    name: "Product List",
    url: "/product-list",
    icon: <MdOutlineProductionQuantityLimits />,
  },

  {
    id: 4,
    name: "Create Product ",
    url: "/new-product",
    icon: <MdAddShoppingCart />,
  },

  {
    id: 5,
    name: "Order Details",
    url: "/order",
    icon: <BsBagCheckFill />,
  },
  // { id: 6, name: "Settings", url: "/Settings", icon: <CiSettings /> },
];
const Navbar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };
  return (
    <>
      <div
        className={`lg:w-[300px] w-[250px] h-full lg:hidden z-50  fixed bg-white ${
          isOpen
            ? "left-[0rem] duration-1000 delay-75"
            : "-left-[30rem] duration-1000 delay-75"
        } top-0`}
      >
        <div className="justify-between flex-col p-5  h-full flex ">
          <div>
            <div className="flex py-4 space-x-3 text-black items-center ">
              <MdOutlineShoppingCart className="text-2xl" />
              <h1 className="text-xl">FASTGAK Store</h1>
            </div>

            <div className="text-black mt-7 py-5 space-y-8">
              {navLinks.map((item) => (
                <div
                  key={item.id}
                  className={`flex space-x-2 py-1 rounded-sm items-center cursor-pointer ${
                    location.pathname === item.url
                      ? " text-[#008E97] "
                      : ""
                  }`}
                >
                  <h6 className="text-2xl">{item.icon}</h6>
                  <h1 className="text-lg">
                    {item.url && <Link to={item.url}>{item.name}</Link>}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <button
              onClick={logout}
              className="bg-[#008E97] text-white px-10 py-3 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="postion overlay lg:hidden fixed z-30 top-0 left-0 w-full h-full bg-[#00000080]"
        ></div>
      )}
    </>
  );
};

export default Navbar;

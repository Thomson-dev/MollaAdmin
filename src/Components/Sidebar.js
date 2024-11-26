import React from "react";
import { CiSettings } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { BsBagCheckFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    
    navigate("/");
  };

  const sidebarItems = [
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
    // add more items as needed
  ];
  return (
    <div className=" hidden fixed bg-white  shadow-md h-screen   lg:block w-64  p-8  ">
      <div className="justify-between flex-col  h-full flex ">
        <div>
          <div className="flex py-4 space-x-3 text-black items-center ">
            <MdOutlineShoppingCart className="text-2xl" />
            <h1 className="text-xl"> Store</h1>
          </div>

          <div className=" text-black mt-7 py-5 space-y-8   ">
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                className="flex space-x-2  py-1 rounded-sm  items-center cursor-pointer"
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
  );
};

export default Sidebar;

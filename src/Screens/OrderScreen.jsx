import React, { useState } from "react";
import Navbar from "../Components/Navbar.js";
import { useSelector, useDispatch } from "react-redux";
import Preloader from "../Components/Loader/Preloader.js";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { BsBagCheckFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetAllOrdersQuery } from "../features/Products/apiSlice.js"; // Adjust the import path as needed
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { toast } from "react-toastify";
import { CgMenuRight } from "react-icons/cg";

const navLinks = [
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
    url: "/product-edit",
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
    url: "/order",
    icon: <BsBagCheckFill />,
  },
  // { id: 6, name: "Settings", url: "/Settings", icon: <CiSettings /> },
  // add more items as needed
];
const OrderList = () => {
  
  const { data: orders, error, isLoading: loading } = useGetAllOrdersQuery();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const totalPages = Math.ceil(orders?.orders.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders?.orders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const handlePageChange = (page) => {
    requestAnimationFrame(() => {
      setCurrentPage(page);
    });
  };

  return (
    <div className="order-list-container">
      <div className="">
        <button onClick={toggleSidebar}>
          <CgMenuRight className="text-2xl lg:hidden block" />
        </button>
      </div>
      <div className="flex md:justify-between md:flex-row flex-col space-y-3 px-2 md:px-6 py-4">
        <div className="md:space-x-5 space-y-5 md:space-y-0 flex md:flex-row flex-col">
          <input
            type="text"
            className="rounded py-2 border pl-3  border-slate-400"
            placeholder="Search Order"
          />
        </div>
      </div>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="postion overlay lg:hidden fixed z-30 top-0 left-0 w-full h-full bg-[#00000080]"
        ></div>
      )}
      <div
        className={`lg:w-[300px] w-[250px] lg:hidden z-50 h-screen fixed  bg-white ${
          isOpen
            ? "left-[0rem] duration-1000 delay-75"
            : "-left-[30rem] duration-1000 delay-75"
        } top-0`}
      >
        <div className=" text-black mt-7 py-5 px-5 space-y-8   ">
          <div className="flex py-4 space-x-3 text-black items-center ">
            <MdOutlineShoppingCart className="text-2xl" />
            <h1 className="text-xl"> Store</h1>
          </div>
          {navLinks.map((item) => (
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
      {loading ? (
        <Preloader />
      ) : error ? (
        <div className="h-screen">
          <h1 className="text-center mb-6">
            Error: {error.status} - {error.error}
          </h1>
        </div>
      ) : (
        <div className="">
          <div className="bg-[#008E97] z-0 rounded-md w-full mt-5 h-[10rem] rounded-b-lg">
            <div className="relative text-white">
              <div className="absolute w-full top-[6rem]">
                <div className="w-[95%] text-black shadow-md min-h-[30rem] rounded-md bg-white mx-auto">
                  <div className="flex flex-col md:p-5 p-2 w-full h-full justify-between">
                    <h4 className="font-bold">Orders</h4>
                    <p className="text-base">
                      These are details of available orders
                    </p>
                    <div className="flex w-[98%] flex-col mx-auto justify-start items-start">
                      <div className="overflow-x-auto w-full mt-[2rem]">
                        <table className="table-auto border text-sm border-slate-300 min-w-full border-collapse divide-y px-3 divide-slate-300">
                          <thead className="bg-slate-200">
                            <tr>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Order ID
                              </th>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Customer Name
                              </th>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Products
                              </th>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Total Price
                              </th>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Payment Method
                              </th>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Order Date
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white w-full divide-y divide-slate-300">
                            {currentOrders?.map((order) => (
                              <tr key={order._id}>
                                <td className="px-4 text-center font-semibold text-base py-2 whitespace-nowrap">
                                  {order._id}
                                </td>
                                <td className="px-4 text-lg text-center py-2 whitespace-nowrap">
                                  {order.shippingAddress.name}
                                </td>
                                <td className="px-4 text-base text-center py-2 whitespace-nowrap">
                                  {order.products.map((product, index) => (
                                    <div key={product._id} className="mb-2">
                                      <p>{product.name}</p>
                                      <p className="text-sm text-gray-500">
                                        Quantity: {product.quantity}, Price: $
                                        {product.price}
                                      </p>
                                    </div>
                                  ))}
                                </td>
                                <td className="px-4 text-base text-center py-2 whitespace-nowrap">
                                  ${order.totalPrice}
                                </td>
                                <td className="py-2 text-center text-lg font-bold whitespace-nowrap">
                                  {order.paymentMethod}
                                </td>
                                <td className="py-2 text-center text-lg whitespace-nowrap">
                                  {new Date(
                                    order.createdAt
                                  ).toLocaleDateString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="flex max-w-[1200px] w-[95%] mx-auto justify-start items-start">
                        <ResponsivePagination
                          current={currentPage}
                          total={totalPages}
                          maxWidth={5}
                          onPageChange={handlePageChange}
                          className="flex gap-4 text-[16px] border-blue-500 w-full py-10 justify-start"
                          pageItemClassName="w-[10vw] md:w-[3vw] text-center rounded-[4px] text-black border"
                          activeItemClassName="border-[blue] page-item"
                          disabledItemClassName="text-gray-400"
                          nextClassName="active:bg-green-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderList;

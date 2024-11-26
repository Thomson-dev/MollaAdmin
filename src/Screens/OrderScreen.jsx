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
    name: "New Product ",
    url: "/new-product",
    icon: <MdAddShoppingCart />,
  },

  {
    id: 4,
    name: "Order Details",
    url: "/order",
    icon: <BsBagCheckFill />,
  },
  // { id: 6, name: "Settings", url: "/Settings", icon: <CiSettings /> },
  // add more items as needed
];
const OrderList = () => {
  const { data: orders, error, isLoading: loading } = useGetAllOrdersQuery();
  console.log(orders);
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
    <div className="max-w-[1500px] w-[95%] mx-auto">
      <div className="">
        <button className="p-4" onClick={toggleSidebar}>
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
      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />

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
                                Phone Number
                              </th>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Address
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
                                <td className="px-4 text-base text-center py-2 whitespace-nowrap">
                                  {order.shippingAddress.name}
                                </td>

                                <td className="px-4 text-base text-center py-2 whitespace-nowrap">
                                  {order.shippingAddress.mobileNo}
                                </td>

                                <td className="px-4 text-base text-center py-2 whitespace-nowrap">
                                  {order.shippingAddress.houseNo},{" "}
                                  {order.shippingAddress.street},{" "}
                                  {order.shippingAddress.landmark},{" "}
                                  {order.shippingAddress.postalCode}
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
                                  {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                  }).format(order.totalPrice)}
                                </td>
                                <td className="py-2 text-center text-base font-bold whitespace-nowrap">
                                  {order.paymentMethod}
                                </td>
                                <td className="py-2 text-center text-base whitespace-nowrap">
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

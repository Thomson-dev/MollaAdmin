import React from "react";
import Navbar from "../Components/Navbar.tsx";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex  md:justify-between md:flex-row flex-col space-y-3 px-2 md:px-6 py-4">
        <div className="">
          <h1 className="text-3xl text-white font-semibold">Products</h1>
        </div>
        <div className="md:space-x-5 space-y-5 md:space-y-0 flex  md:flex-row flex-col">
          <input
            type="text"
            className="rounded py-2 md:py-1 bg-[#1F2937] border pl-3 text-white border-slate-400  "
            placeholder="Search Product "
          />
          <button className="py-2 md:py-1 px-3 text-white rounded text-base bg-[#6366F1]">
            Add Products
          </button>
        </div>
      </div>

      <div className="md:px-6 relative overflow-x-auto ">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-white ">
            <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 text-white py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 text-white py-3">
                  Category
                </th>
                <th scope="col" className="px-6 text-white py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 text-white py-3">
                  Stutus
                </th>

                <th scope="col" className="px-6 text-white py-3">
                  price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Dilivered</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

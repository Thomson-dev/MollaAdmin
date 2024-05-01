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
            className="rounded py-1 bg-[#1F2937] border pl-3 text-white border-slate-400  "
            placeholder="Search Product "
          />
          <button className="py-2 px-3 text-white rounded text-base bg-[#6366F1]">
            Add Products
          </button>
        </div>
      </div>

      <div className="md:px-6">
        <table className="table-auto w-full  text-white">
          <thead>
            <tr className="bg-[#374151] text-sm h-14  uppercase " >
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>price</th>
            </tr>
          </thead>
       
        </table>
      </div>
    </div>
  );
};

export default ProductList;

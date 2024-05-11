import React, { useEffect } from "react";
import Navbar from "../Components/Navbar.tsx";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../features/Products/getproductsSlice.ts";
import Preloader from "../Components/Loader/Preloader.tsx";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

type Props = {};

const ProductList = (props: Props) => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="">
      <Navbar />
      <div className="flex  md:justify-between md:flex-row flex-col space-y-3 px-2 md:px-6 py-4">
        <div className="">
          <h1 className="text-2xl text-white font-semibold">Products</h1>
        </div>
        <div className="md:space-x-5 space-y-5 md:space-y-0 flex  md:flex-row flex-col">
          <input
            type="text"
            className="rounded py-2 bg-[#1F2937] border pl-3 text-white border-slate-400  "
            placeholder="Search Product "
          />
          <button className="py-2 px-3 text-white rounded text-base bg-[#6366F1]">
            Add Products
          </button>
        </div>
      </div>

      {loading ? (
        <div>
          <Preloader />
        </div>
      ) : error ? (
        <div className="bg-[#1F2937] h-screen">
          <h1 className="text-center mb-6">Error: {error}</h1>
        </div>
      ) : (
        <div>
          <div className="md:px-6 relative overflow-x-auto ">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-white ">
                <thead className="md:text-sm text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-3 text-white py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-3 text-white py-3">
                      Category
                    </th>
                    <th scope="col" className="px-3 text-white py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-3 text-white py-3">
                      Stutus
                    </th>

                    <th scope="col" className="px-3 text-white py-3">
                      price
                    </th>
                    <th scope="col" className="px-3 text-white py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.map((product) => (
                      <tr
                        key={product._id}
                        className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <img
                            src={product.image}
                            className=" h-auto max-w-full md:w-28 md:h-28"
                            alt=""
                          />
                        </th>
                        <td className="px-4 py-3">{product.category}</td>
                        <td className="px-4 py-3">{product.stock}</td>
                        <td className="px-4 py-3">Oreder</td>
                        <td className="px-4 py-3">${product.price}</td>
                        <td className="px-4 py-3">
                          <div className="flex space-x-4 justify-center items-center">
                            <CiEdit className="text-xl"/>
                          <MdDelete className="text-red-500 text-xl" />
                          </div>
                          
                          
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;

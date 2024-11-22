import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.js";
import { useSelector, useDispatch } from "react-redux";

import Preloader from "../Components/Loader/Preloader.js";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../features/Products/apiSlice.js";

import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { toast } from "react-toastify";
import { CgMenuRight } from "react-icons/cg";

const ModalComponent = ({ toggleModal, productId }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleBackgroundClick = (e) => {
    if (e.target.id === "popup-modal") {
      toggleModal();
    }
  };

  const handleDeleteRoom = async () => {
    try {
      await deleteProduct(productId).unwrap();
      toast.success("Product deleted successfully");
      toggleModal();
    } catch (error) {
      toast.error("Failed to delete Product");
    }
  };

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
      onClick={handleBackgroundClick}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div
          className="relative bg-white rounded-lg shadow"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            onClick={toggleModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Are you sure you want to delete product?
            </h3>
            <button
              type="button"
              onClick={handleDeleteRoom}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>
            <button
              type="button"
              onClick={toggleModal}
              className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {

 
  const {
    data: products,
    error,
    isLoading: loading,
  } = useGetAllProductsQuery();

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (productId) => {
    setShowModal(!showModal);
    setSelectedProductId(productId);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

 
  
  console.log(selectedProductId);
  // const { loading, error, products } = useSelector((state) => state.products);

  console.log(products?.product);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const totalPages = Math.ceil(products?.product.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentProducts = products?.product.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  // Function to handle opening and closing the delete modal

  // Handle page change to avoid unnecessary re-renders
  const handlePageChange = (page) => {
    requestAnimationFrame(() => {
      setCurrentPage(page);
    });
  };


  return (
    <div className="product-list-container">
        <button onClick={toggleSidebar}>
        <CgMenuRight className="text-2xl lg:hidden block" />
      </button>
      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex md:justify-between md:flex-row flex-col space-y-3 px-2 md:px-6 py-4">
        <div className="md:space-x-5 space-y-5 md:space-y-0 flex md:flex-row flex-col">
          <input
            type="text"
            className="rounded py-2 border pl-3 text-white border-slate-400"
            placeholder="Search Product"
          />
          <button className="py-2 px-3 text-white rounded text-base bg-[#008E97]">
            Add Products
          </button>
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
        <div className="w-[95%] max-w-[1450px]  mx-auto">
          <div className="bg-[#008E97] z-0 rounded-md w-full mt-5 h-[10rem] rounded-b-lg">
            <div className="relative text-white">
              <div className="absolute w-full top-[6rem]">
                <div className="w-[95%] text-black shadow-md min-h-[30rem] rounded-md bg-white mx-auto">
                  <div className="flex flex-col md:p-5 p-2 w-full h-full justify-between">
                    <h4 className="font-bold">Products</h4>
                    <p className="text-base">
                      These are details of available products
                    </p>
                    <div className="flex w-[98%] flex-col mx-auto justify-start items-start">
                      <div className="overflow-x-auto w-full mt-[2rem]">
                        <table className="table-auto border text-sm border-slate-300 min-w-full border-collapse divide-y px-3 divide-slate-300">
                          <thead className="bg-slate-200">
                            <tr>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Product Name
                              </th>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Category
                              </th>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Price
                              </th>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Stock
                              </th>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Delete
                              </th>
                              <th className="px-4 py-2 text-base whitespace-nowrap">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white w-full divide-y divide-slate-300">
                            {currentProducts?.map((product) => (
                              <tr key={product._id}>
                                <td className="px-4 text-center font-semibold text-base py-2 whitespace-nowrap">
                                  {product.name}
                                </td>
                                <td className="px-4 text-base text-center py-2 whitespace-nowrap">
                                  {product.category}
                                </td>
                                <td className="px-4 text-base text-center py-2 whitespace-nowrap">
                                  ${product.price}
                                </td>
                                <td className="px-4 text-base text-center py-2 whitespace-nowrap">
                                  {product.countInStock ? (
                                    <span className="text-green-600">
                                      In Stock
                                    </span>
                                  ) : (
                                    "Out of Stock"
                                  )}
                                </td>
                                <td className="py-2 text-center whitespace-nowrap">
                                  <button
                                    onClick={() => toggleModal(product._id)}
                                    className="text-white px-2 py-1 rounded"
                                  >
                                    <MdDelete className="text-2xl text-red-600" />
                                  </button>
                                </td>
                                <td className="py-2 text-center whitespace-nowrap">
                                  <Link
                                    to={`/product-edit/${product._id}`}
                                  >
                                    <button className="text-white px-2 py-1 rounded">
                                      <CiEdit className="text-2xl text-green-600" />
                                    </button>
                                  </Link>
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

                    {showModal && (
                      <ModalComponent
                        toggleModal={toggleModal}
                        productId={selectedProductId}
                      />
                    )}
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

export default ProductList;

import React from "react";
import Navbar from "../Components/Navbar.tsx";
import { IoIosSave } from "react-icons/io";

type Props = {};

const NewProduct = (props: Props) => {
  return (
    <div className="border  shadow-xl border-[#1F2937] ">
      <Navbar />

      <div className="px-2">
        <h3 className="text-white font-bold  text-2xl">Add New Product</h3>

        <div className="flex">
          <div className="w-[60%]">
            <h6 className="text-white text-lg pt-5 font-semibold">
              Basic Information
            </h6>
            <p className="text-white text-sm">
              Section to config basic product information
            </p>

            <form className="mt-6 flex-col flex space-y-4">
              <div className="flex flex-col w-full">
                <label className="text-base text-slate-400 font-semibold">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
                />
              </div>
              <div className="w-full flex-col flex">
                <label className="text-base text-slate-400 font-semibold">
                  Description
                </label>
                <textarea
                  rows={5}
                  className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
                />
              </div>

              <div className="">
                <h6 className="text-white text-lg pt-5 font-semibold">
                  pricing
                </h6>
                <p className="text-white text-sm">
                  Section to config product sales information
                </p>

                <div className="flex  space-x-4">
                  <div className="flex-col w-[50%] flex">
                    <label className="text-base text-slate-400 font-semibold">
                      price
                    </label>
                    <input
                      type="text"
                      className="bg-[#1F2937] py-2 px-2 text-white flex-1 rounded-lg mt-2 border outline-none"
                    />
                  </div>

                  <div className="flex  w-[50%] flex-col">
                    <label className="text-base text-slate-400 font-semibold">
                      size
                    </label>
                    <input
                      type="text"
                      className="bg-[#1F2937] px-2 text-white py-2 rounded-lg mt-2 border outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="">
                <h6 className="text-white text-lg pt-5 font-semibold">
                  Organizations
                </h6>
                <p className="text-white text-sm">
                  Section to config the product attribute
                </p>

                <div className="flex space-x-4 ">
                  <div className="flex-col w-[50%] flex">
                    <label className="text-base text-slate-400 font-semibold">
                      category
                    </label>
                    <select
                      name=""
                      className="bg-[#1F2937] py-2 px-2  text-white flex-1 rounded-lg mt-2 border outline-none"
                      id=""
                    >
                      <option>Bags</option>
                      <option>Cloths</option>
                      <option>Shoes</option>
                      <option>Watches</option>
                    </select>
                  </div>

                  <div className="flex w-[50%]  flex-col">
                    <label className="text-base text-slate-400 font-semibold">
                      Tags
                    </label>
                    <select
                      name="select"
                      className="bg-[#1F2937]  py-2 px-2  text-white flex-1 rounded-lg mt-2 border outline-none"
                      id=""
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Unisex</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="w-[40%]">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              doloribus natus impedit nisi enim sequi rerum id voluptas,
              voluptatem nobis, iusto hic unde labore laborum eveniet ad,
              consequuntur adipisci quos.
            </p>
          </div>
        </div>
     
      </div>

      <div className="footer sticky bottom-0 border-[#313c4b]  mt-6 z-40 border  w-full py-4 ">
          <div className="flex  justify-end ">
           <div className="flex space-x-4 px-6">
           <button className="bg-[#374151] w-20 py-1 rounded">
            Discard
           </button>

           <div className="flex items-center">
           

           <button className="bg-[#4F46E5] px-5 rounded py-1 flex items-center">
           <IoIosSave />
            Save
           </button>
           </div>
           </div>

          </div>
        </div>
    </div>
  );
};

export default NewProduct;

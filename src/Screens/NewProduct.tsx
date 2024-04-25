import React, { useState } from "react";
import Navbar from "../Components/Navbar.tsx";
import { IoIosSave } from "react-icons/io";

type Props = {};

const NewProduct = (props: Props) => {
  const [file, setFile] = useState<string | undefined>(undefined);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
    if (e.target.files && e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div className="border bg-[#1F2937]  shadow-xl border-[#1F2937] ">
      <Navbar />

      <div className="px-2">
        <h3 className="text-white font-bold  text-2xl">Add New Product</h3>

        <div className="flex md:flex-row flex-col">
          <div className="md:w-[60%] w-[100%]">
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

                <div className="flex  space-x-2">
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

          <div className="md:w-[40%] w-[100%]   px-5 ">
            <h2 className="text-white  text-lg pt-5 font-semibold">
              Add Image:
            </h2>
            <p className="text-white text-sm">
              Add or change image for the product
            </p>
            <form className="file-upload-form px-5 mt-5">
              <label className="file-upload-label">
                <div className="file-upload-design">
                  <svg viewBox="0 0 640 512" height="1em">
                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                  </svg>
                  <p>Drag and Drop</p>
                  <p>or</p>
                  <span className="browse-button">Browse file</span>
                </div>
                <input id="file" type="file" />
              </label>
            </form>
          </div>
        </div>
      </div>

      <div className="footer sticky bottom-0 border-[#313c4b]   mt-6 z-40 border  w-full py-4 ">
        <div className="flex  justify-end ">
          <div className="flex space-x-4 px-6">
            <button className="bg-[#374151] w-20 py-1 rounded">Discard</button>

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
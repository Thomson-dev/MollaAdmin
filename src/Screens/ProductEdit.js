import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.js";
import { IoIosSave } from "react-icons/io";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";
import {

  useGetProductQuery,
  useUpdateProductMutation,
} from "../features/Products/apiSlice.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router";
import Preloader from "../Components/Loader/Preloader.js";
import { CgMenuRight } from "react-icons/cg";

const EditProduct = () => {
  const { id } = useParams();
  console.log(id);
  const { data: product, error, isLoading } = useGetProductQuery(id);
  const [updateProduct, { isLoading:isUpdating , error: isError }] = useUpdateProductMutation();
  console.log(product);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    countInStock: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category,
        countInStock: product.countInStock,
        description: product.description,
        image: product.image,
      });
    }
  }, [product]);

  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
console.log(isError)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  console.log(error);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({ id, newProduct: formData }).unwrap();
      toast.success("Product updated successfully!");
    } catch (err) {
      toast.error("Failed to update product. Please try again.");
    }
  };

  const uploadImage = async () => {
    //    service firebase.storage {
    //   match /b/{bucket}/o {
    //     match /{allPaths=**} {
    //       allow read;
    //       allow write: if
    //       request.resource.size < 2 * 1024 * 1024 &&
    //       request.resource.contentType.matches('image/.*')
    //     }
    //   }
    // }
    const storage = getStorage(app);

    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Could not upload image (File must be less than 2MB)"
        );
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
        setImageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setFormData({ ...formData, image: downloadURL });
          setImageFileUploading(false);
        });
      }
    );
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

 
  if (isLoading) {
    return (
      <div>
        <Preloader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  

  return (
    <div className="max-w-[1500px] w-[95%] mx-auto">
         <button className="p-4" onClick={toggleSidebar}>
        <CgMenuRight className="text-2xl lg:hidden block" />
      </button>

      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <ToastContainer />
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="pt-4">
          <h3 className="text-black font-bold mb-5 text-xl">Edit Product</h3>
          <div className=" gap-7 grid md:grid-cols-2 grid-cols-1">
            <div className=" shadow  bg-white p-5 md:p-10 ">
              <h6 className="text-black text-lg font-semibold">
                Basic Information
              </h6>
              <p className="text-black text-sm">
                Section to config basic product information
              </p>
              <div className="mt-6 flex-col flex space-y-4">
                <div className="flex flex-col w-full">
                  <label className="text-lg text-black font-semibold">
                    Product Name
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="px-2 py-3 rounded-lg mt-2 border outline-none"
                  />
                </div>
                <div className="w-full flex-col flex">
                  <label className="text-lg text-black font-semibold">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    className="px-2 text-black py-2 rounded-lg mt-2 border outline-none"
                  />
                </div>
                <div className="">
                  <h6 className="text-black text-lg pt-5 font-semibold">
                    Pricing
                  </h6>
                  <p className="text-black text-sm">
                    Section to config product sales information
                  </p>
                  <div className="flex mt-3 space-x-2">
                    <div className="flex-col w-full flex">
                      <label className="text-lg text-black font-semibold">
                        Price
                      </label>
                      <input
                        id="price"
                        value={formData.price}
                        onChange={handleChange}
                        type="text"
                        className="py-3 px-2 text-black flex-1 rounded-lg mt-2 border outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <h6 className="text-black text-lg pt-5 font-semibold">
                    Organizations
                  </h6>
                  <p className="text-black text-sm">
                    Section to config the product attribute
                  </p>
                  <div className="flex mt-4 space-x-4">
                    <div className="flex-col w-[50%] flex">
                      <label className="text-base font-semibold">
                        Category
                      </label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="py-2 px-2 flex-1 rounded-lg mt-2 border outline-none"
                      >
                        <option value="">Select a category</option>
                        <option value="Clothing and Accessories">
                          Clothing and Accessories
                        </option>
                        <option value="Skincare">Skincare</option>
                        <option value="Hair Care">Hair Care</option>
                        <option value="Makeup">Makeup</option>
                        <option value="Fragrance">Fragrance</option>
                        <option value="Gadgets">Gadgets</option>
                      </select>
                    </div>
                    <div className="flex  flex-col">
                      <label className="text-base font-semibold">Size</label>
                      <select
                        // id="size"
                        // value={formData.size}
                        // onChange={handleChange}
                        className="py-2 px-2 flex-1 rounded-lg mt-2 border outline-none"
                      >
                        <option value="">Select a Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white h-fit shadow-md  flex flex-col p-7 md:px-5">
              <div className="">
                <h2 className="text-lg pt-5 font-semibold">Add Image:</h2>
                <p className="text-sm">Add or change image for the product</p>
              </div>
              <div className="flex items-center mt-9 justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>

                  <input
                    id="dropzone-file"
                    type="file"
                    
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              {formData.image && (
                <div className="mt-4">
                  <img
                    src={formData?.image}
                    alt="Preview"
                     className="aspect-square mt-5 h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footer mt-6 w-full py-4">
          <div className="flex justify-end">
            <div className="flex space-x-4 px-6">
              <button className="bg-[#374151] text-white font-bold w-20 py-2 rounded">
                Discard
              </button>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="bg-[#4F46E5] px-5 text-white font-semibold rounded py-2 flex items-center"
                  disabled={isUpdating}
                >
                   {isUpdating ? "Updating..." : "Update Product"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;

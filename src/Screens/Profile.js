import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { IoIosSave } from "react-icons/io";



const Profile = () => {
  const [inputValue, setInputValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsEmpty(value.trim() === ""); // Check if input is empty (ignoring whitespace)
  };
  const isTooShort = () => {
    const wordCount = inputValue.trim().split(/\s+/).length;
    return wordCount < 3 && !isEmpty;
  };

  const [imageSrc, setImageSrc] = useState(
    "https://elstar.themenate.net/img/avatars/thumb-3.jpg"
  ); // Default image source

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Use FileReader to read file content
      reader.onload = (event) => {
        setImageSrc(event.target.result); // Set image source to the uploaded file
      };
      reader.readAsDataURL(file); // Read file as a data URL
    }
  };

  return (
    <div className="  ">
      <h2 className="  text-xl pt-5 font-semibold">General</h2>
      <p className=" mt-2 text-sm">
        Basic info, like your name and address that will displayed in public
      </p>
      <div className="flex flex-col">
        <div className="flex mt-11 border-b border-slate-600 pb-5 justify-between md:px items-center">
          <h3 className="">Name</h3>
          <div className="flex relative">
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Name"
              className={`{ md:w-[40vw] w-[70vw]  px-9 text-white outline-none  py-3 rounded-lg border   }`}
            />
            <CgProfile className="absolute text-slate-500 text-xl left-3 top-3 " />
            {/* {isTooShort() && (
              <p className="absolute top-12  text-red-500 text-sm">Too short</p>
            )} */}
          </div>
        </div>

        <div className="flex mt-11 border-b border-slate-600 pb-5 justify-between md:px items-center">
          <h3 className="">Email</h3>
          <div className="flex relative">
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Email"
              className={`{ md:w-[40vw] w-[70vw]  px-9 text-white outline-none  rounded-lg border py-3  }`}
            />
            <CiMail className="absolute text-slate-500 text-xl left-3 top-3 " />
            {/* {isTooShort() && (
              <p className="absolute top-12  text-red-500 text-sm">
                Email required
              </p>
            )} */}
          </div>
        </div>

        <div className="flex mt-11 border-b justify-between  md:pr-44 pr-28 items-center">
          <h3 className="">Avatar</h3>
          <div>
            {/* Image preview */}
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Preview"
                className="w-20 h-20 rounded-full"
              />
            )}

            {/* File input for image upload */}
            <input
              type="file"
              accept="image/*"
              className="mt-2 w-24 md:w-full"
              onChange={handleImageChange}
              style={{ marginBottom: "20px" }}
            />

            {/* Display message if no image is selected */}
            {!imageSrc && <p>Please select an image for upload.</p>}
          </div>
        </div>

        <div className="footer  mt-10   w-full py-4 ">
          <div className="flex  justify-end ">
            <div className="flex space-x-4 px-6">
              <button className="bg-[#374151] text-white font-bold w-20 py-2 rounded">
                Discard
              </button>

              <div className="flex items-center">
                <button className="bg-[#4F46E5] px-5 space-x-4 text-white font-semibold rounded py-2 flex items-center">
                  <IoIosSave className="text-white " />
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

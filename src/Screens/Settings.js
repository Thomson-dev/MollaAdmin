import React, { useState } from "react";
import Navbar from "../Components/Navbar.js";
import Profile from "./Profile.js";
import Password from "./Password.js";

const Settings = () => {
  const [toggle, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="  shadow-md  ">


      <div className="p-10 bg-white px-4 md:px-8">
        <h3 className=" font-bold text-2xl">Settings</h3>

        <div className="mt-3">
          <div className="flex space-x-3 border-slate-600 border-b">
            <button
              onClick={() => toggleTab(1)}
              className={`${
                toggle === 1
                  ? "border-b-2 border-blue-400 px-4  font-semibold py-3"
                  : ""
              } text-slate-400 font-semibold`}
            >
              Profile
            </button>
            <button
              onClick={() => toggleTab(2)}
              className={`${
                toggle === 2
                  ? "border-b-2 border-blue-400 px-4  font-semibold py-3"
                  : ""
              } text-slate-400 font-semibold`}
            >
              Password
            </button>
          </div>

          <div>
            <div className={`${toggle === 1 ? "block" : "hidden"}`}>
              <Profile />
            </div>

            <div className={`${toggle === 2 ? "block" : "hidden"}`}>
              <Password />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
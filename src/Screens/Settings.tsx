import React, { useState } from "react";
import Navbar from "../Components/Navbar.tsx";
import Profile from "./Profile.tsx";
import Password from "./Password.tsx";

type Props = {};

const Settings = (props: Props) => {
  const [toggle, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="border  bg-[#1F2937]   shadow-xl border-[#1F2937]  ">
      <Navbar />

      <div className="p-4 px-4 md:px-8 ">
        <h3 className="text-white font-bold  text-2xl">Settings</h3>

        <div className="mt-3">
          <div className="flex space-x-3 border-slate-600 border-b">
            <button
              onClick={() => toggleTab(1)}
              className={`${
                toggle === 1
                  ? "border-b-2 border-blue-400 px-4 text-white  font-semibold  py-3 "
                  : " "
              } text-slate-400 font-semibold `}
            >
              Profile
            </button>
            <button
              onClick={() => toggleTab(2)}
              className={`${
                toggle === 2
                  ? "border-b-2 border-blue-400 px-4 text-white  font-semibold  py-3 "
                  : " "
              } text-slate-400 font-semibold`}
            >
              Password
            </button>
          </div>

          <div className="">
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

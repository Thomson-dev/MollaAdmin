import React from "react";

type Props = {};

function Password({}: Props) {
  return (
    <div className="h-screen">
      <h2 className="text-white  text-xl pt-5 font-semibold">Password</h2>
      <p className="text-white mt-2 text-sm">
        Enter your current & new password to reset your password
      </p>

      <div className="flex flex-col ">
        <div className="flex mt-11 border-b border-slate-600 pb-5 justify-between md:px items-center">
          <div className="flex space-y-3 md:space-y-0 md:flex-row  w-full justify-between flex-col">
            <h3 className="text-white">Current Password</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Current Password"
                className={`{ md:w-[40vw] w-[90vw]  px-2 text-white outline-none bg-[#1F2937] rounded-lg border py-2   }`}
              />
            </div>
          </div>
        </div>

        <div className="flex mt-11 border-b border-slate-600 pb-5 justify-between md:px items-center">
          <div className="flex space-y-3 md:space-y-0 md:flex-row  w-full justify-between flex-col">
            <h3 className="text-white">New Password</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="New Password"
                className={`{ md:w-[40vw] w-[90vw]  px-2 text-white outline-none bg-[#1F2937] rounded-lg border py-2   }`}
              />
            </div>
          </div>
        </div>

        <div className="flex mt-11 border-b border-slate-600 pb-5 justify-between md:px items-center">
          <div className="flex space-y-3 md:space-y-0 md:flex-row  w-full justify-between flex-col">
            <h3 className="text-white">Confirm Password</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Confirm Password"
                className={`{ md:w-[40vw] w-[90vw]  px-2 text-white outline-none bg-[#1F2937] rounded-lg border py-2   }`}
              />
            </div>
          </div>
        </div>

        <div className="footer  mt-6   w-full py-4 ">
          <div className="flex  justify-end ">
            <div className="flex space-x-4 px-6">
              <button className="bg-[#374151] text-white font-bold w-20 py-2 rounded">
                Reset
              </button>

              <div className="flex items-center">
                <button className="bg-[#4F46E5] px-5 space-x-4 text-white font-semibold rounded py-2 flex items-center">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;

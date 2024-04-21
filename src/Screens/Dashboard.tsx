import React from "react";
import Navbar from "../Components/Navbar.tsx";


type Props = {};

const Dashboard = (props: Props) => {
  const data = [
    {
      title: "Revenue",
      amount: "$21,827.13",
      comparison: "vs. 3 months prior to Invalid Date",
    },
    {
      title: "Orders",
      amount: "1,758",
      comparison: "vs. 3 months prior to Invalid Date",
    },
    {
      title: "Purchases",
      amount: "$7,249.31",
      comparison: "vs. 3 months prior to Invalid Date",
    },
  ];
  return (
    <div className="">
      <Navbar />
      

      <div className="p-7">
        <h2 className="text-2xl font-bold text-slate-100">Sales Overview</h2>
        <p className="text-slate-200">View your current sales & summary</p>
      </div>

      <div className="p-5 flex flex-col md:flex-row md:px-10  gap-3">
        {data.map((item) => {
          return (
            <div className=" flex-1  flex-col  border border-slate-500 p-5 py-7 rounded-lg  justify-between">
              <div>
                <p className="text-slate-200 font-semibold">{item.title}</p>
                <h3 className="text-2xl text-white font-bold">{item.amount}</h3>
              </div>
              <p className="text-slate-200 text-base max-w-36">
                {item.comparison}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

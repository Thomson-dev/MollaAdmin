import React, { useState } from "react";
import Navbar from "../Components/Navbar.js";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data3 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const data2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const data = [
    {
      title: "Revenue",
      per: 11.4,
      id: "1",
      icon: <FiArrowUp className="text-xl font-bold" />,
      amount: "$21,827.13",
      comparison: "vs. 3 months prior to Invalid Date",
    },
    {
      title: "Orders",
      id: "2",
      amount: "1,758",
      icon: <FiArrowDown className="text-xl font-bold" />,
      per: -3.2,
      comparison: "vs. 3 months prior to Invalid Date",
    },
    {
      title: "Purchases",
      amount: "$7,249.31",
      icon: <FiArrowUp className="text-xl font-bold" />,
      id: "3",
      per: 5.7,
      comparison: "vs. 3 months prior to Invalid Date",
    },
  ];
  return (
    <div className="h-screen  max-w-[1500px] w-[95%] mx-auto">
      <button className="p-4" onClick={toggleSidebar}>
        <CgMenuRight className="text-2xl lg:hidden block" />
      </button>

      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className=" m-6">
        <h2 className="text-2xl font-bold ">Sales Overview</h2>
        <p className="">View your current sales & summary</p>
      </div>

      <div className="grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4">
        {data.map((item) => {
          return (
            <div className="flex-1 flex-col  shadow bg-[#F9FAFB]   p-5 py-8 rounded-lg justify-between">
              <div className="flex  flex-row items-center justify-between">
                <div className="">
                  <p className=" font-semibold">{item.title}</p>
                  <h3 className="text-2xl  font-bold">{item.amount}</h3>

                  <p className=" text-base max-w-36">{item.comparison}</p>
                </div>

                {/* <div className="">
                  <p
                    className={`text-sm  font-bold ${
                      item.id == "1"
                        ? "text-green-600 bg-[#1C4646] px-5 py-1 rounded-full "
                        : ""
                    }
                  ${
                    item.id == "2"
                      ? "text-red-500 bg-[#492F3A] px-5 py-1 rounded-full  "
                      : ""
                  }
 
                  ${
                    item.id == "3"
                      ? "text-green-500 bg-[#1C4646] px-5 py-1 rounded-full"
                      : ""
                  }
                  `}
                  >
                    <div
                      className={`flex items-center justify-center ${
                        item.id == "1" ? "text-green-500" : ""
                      }   
                     ${item.id == "2" ? "text-red-500" : ""} 
                     ${item.id == "3" ? "text-green-500" : ""} 
                    
                    `}
                    >
                      {item.icon}
                      {item.per}
                    </div>
                  </p>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grah flex flex-col md:flex-row gap-3 my-6">
        <div className="w-full bg-white md:w-[70%] border rounded-lg p-4">
          <Line options={options} data={data2} />
        </div>

        <div className="w-full md:w-[30%]  bg-white  rounded-lg p-4">
          <Doughnut data={data3} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

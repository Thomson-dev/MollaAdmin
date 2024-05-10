import React from "react";
import Navbar from "../Components/Navbar.tsx";

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

type Props = {};

const Dashboard = (props: Props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
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
      amount: "$21,827.13",
      comparison: "vs. 3 months prior to Invalid Date",
    },
    {
      title: "Orders",
      id: "2",
      amount: "1,758",
      per: -3.2,
      comparison: "vs. 3 months prior to Invalid Date",
    },
    {
      title: "Purchases",
      amount: "$7,249.31",
      id: "3",
      per: 5.7,
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
              <div className=" flex flex-row items-center justify-between">
                <div className="">
                  <p className="text-slate-200 font-semibold">{item.title}</p>
                  <h3 className="text-2xl text-white font-bold">
                    {item.amount}
                  </h3>

                  <p className="text-slate-200 text-base max-w-36">
                    {item.comparison}
                  </p>
                </div>

                <div className="">
                  <p
                    className={`text-sm text-white font-bold ${(item.id == "1"
                      ? "text-green-600 bg-[#1C4646] px-5 py-1 rounded-full "
                      : "")}
                  ${(item.id == "2" ? "text-red-500 bg-[#492F3A] px-5 py-1 rounded-full  " : "")} 

                  ${(item.id == "3" ? "text-green-500 bg-[#1C4646] px-5 py-1 rounded-full" : "")}
                  `}
                  >
                    {item.per}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grah flex flex-col   md:flex-row gap-3 mb-5 px-5 md:px-10">
        <div className="md:w-[70%]  border border-slate-500 rounded-lg p-4">
          <Line options={options} data={data2} />
        </div>

        <div className="md:w-[30%]  border border-slate-500 rounded-lg p-4">
          <Doughnut data={data3} />
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;

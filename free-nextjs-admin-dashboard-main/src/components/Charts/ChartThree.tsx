import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const optionsChartThree: ApexOptions = {
  colors: ["#10B981", "#3C50E0", "#bd24e3", "#dba435"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "22px",
        },
        value: {
          fontSize: "16px",
        },
        total: {
          show: true,
          label: "Total",
          formatter: function (w) {
            return "249";
          },
        },
      },
    },
  },
  labels: ["Groceries", "Acessories", "Office Supplies", "Tech"],
};

const seriesChartThree = [58.3, 25.6, 15.2, 8.9];

const ChartThree: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Sales Overview
          </h4>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="http://localhost:8501/">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              View More analytics/ Forecast Demand
            </button>
          </Link>
          <Link href="http://localhost:8501/page2">
            <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              Go to Streamlit Page 2
            </button>
          </Link>
        </div>
      </div>
      <div id="chartThree">
        <ReactApexChart
          options={optionsChartThree}
          series={seriesChartThree}
          type="radialBar"
          height={350}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default ChartThree;

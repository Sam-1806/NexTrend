import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const optionsChartThree: ApexOptions = {
  colors: ["#10B981", "#3C50E0"],
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
  labels: ["Apples", "Oranges"],
};

const seriesChartThree = [67, 84];

const ChartThree: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Sales Overview
          </h4>
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

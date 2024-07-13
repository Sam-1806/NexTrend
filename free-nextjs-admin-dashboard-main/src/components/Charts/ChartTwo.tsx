import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const optionsChartTwo: ApexOptions = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S", "S"],
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",
    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

const seriesChartTwo = [
  {
    name: "Sales",
    data: [44, 55, 41, 67, 22, 43, 65],
  },
  {
    name: "Revenue",
    data: [13, 23, 20, 8, 13, 27, 15],
  },
];

const ChartTwo: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Profit this week
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name="#"
              id="#"
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="" className="dark:bg-boxdark">
                This Week
              </option>
              <option value="" className="dark:bg-boxdark">
                Last Week
              </option>
            </select>
            <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
              <svg
                className="fill-current"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.292893 0.792894C0.683417 0.40237 1.31658 0.40237 1.7071 0.792894L5 4.08579L8.29289 0.792894C8.68342 0.40237 9.31658 0.40237 9.7071 0.792894C10.0976 1.18342 10.0976 1.81658 9.7071 2.20711L5.7071 6.20711C5.31658 6.59763 4.68342 6.59763 4.29289 6.20711L0.292893 2.20711C-0.0976313 1.81658 -0.0976313 1.18342 0.292893 0.792894Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div id="chartTwo">
        <ReactApexChart
          options={optionsChartTwo}
          series={seriesChartTwo}
          type="bar"
          height={350}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default ChartTwo;

"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import Histochart from "../Charts/Histochart";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import Papa from "papaparse";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  const [data, setData] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);

  useEffect(() => {
    // Replace 'path/to/your.csv' with the actual path to your CSV file
    Papa.parse("free-nextjs-admin-dashboard-main/public/Superstore_CSV.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
        calculateTotalProfit(results.data);
      },
    });
  }, []);

  const calculateTotalProfit = (data) => {
    // Calculate the total profit from the CSV data
    const profit = data.reduce((acc, item) => acc + parseFloat(item.profit), 0);
    setTotalProfit(profit);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
          {/* SVG icon */}
        </CardDataStats>
        <CardDataStats
          title="Total Profit"
          total={`$${totalProfit.toFixed(2)}`}
          rate="4.35%"
          levelUp
        >
          {/* SVG icon */}
        </CardDataStats>
        <CardDataStats title="Total Product" total="2.450" rate="2.59%" levelUp>
          {/* SVG icon */}
        </CardDataStats>
        <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelDown>
          {/* SVG icon */}
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne data={data} />
        <ChartTwo data={data} />
        <ChartThree data={data} />
        
        {/* <MapOne /> */}
        <div className="col-span-12 xl:col-span-8">
          <TableOne data={data} />
        </div>
        <ChatCard />
        <Histochart />

      </div>
    </>
  );
};

export default ECommerce;

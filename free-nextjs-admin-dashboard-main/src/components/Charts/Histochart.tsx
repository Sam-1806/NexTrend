// src/components/charts/HistogramChart.tsx
"use client";

import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Histochart = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/Superstore_CSV.csv");
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result?.value);
      const parsedData = Papa.parse<any>(csv, { header: true });

      const processedData = parsedData.data.map((row) => ({
        Year: new Date(row["Order Date"]).getFullYear(),
        Sales: parseFloat(row["Sales"]),
        Profit: parseFloat(row["Profit"]),
      }));

      const aggregatedData = processedData.reduce((acc: any, curr) => {
        const year = curr.Year;
        if (!acc[year]) {
          acc[year] = { Year: year, Sales: 0, Profit: 0 };
        }
        acc[year].Sales += curr.Sales;
        acc[year].Profit += curr.Profit;
        return acc;
      }, {});

      setData(Object.values(aggregatedData));
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="500%" height={500}>
      <BarChart data={data}>
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sales" fill="#8884d8" />
        <Bar dataKey="Profit" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Histochart;

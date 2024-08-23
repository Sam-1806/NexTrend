import React from "react";
import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";
import ChartThree from "./ChartThree";
// import Histochart from "./Histochart";


const Chart: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
      <ChartOne />
      {/* <Histochart /> */}
      <ChartTwo />
      <ChartThree />
   
    </div>
  );
};

export default Chart;

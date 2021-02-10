import "../styles/chart.css";

import React from "react";

import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = ({ dataToChart }) => {
  return (
    <div className="chart">
      {dataToChart && (
        <ComposedChart
          layout="vertical"
          width={950}
          height={760}
          data={dataToChart}
          margin={{
            top: 60,
            right: 60,
            bottom: 60,
            left: 60,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={140} />
          <Tooltip />
          <Legend />
          <Area dataKey="feels_like" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="temp" barSize={20} fill="#413ea0" />
        </ComposedChart>
      )}
    </div>
  );
};

export default Chart;

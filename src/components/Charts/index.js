import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Charts.scss";

const data = [
  {
    name: "24.10.21",
    uv: 400,
    pv: 240,
    amt: 2400,
  },
  {
    name: "25.10.21",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "26.10.21",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "27.10.21",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "28.10.21",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "29.10.21",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "30.10.21",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Charts = ({}) => {
  return (
    <div className="charts">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          //   width={200}
          //   height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#00917d"
            fill="#00917d91"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export { Charts };

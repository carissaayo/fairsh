import { PureComponent } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "MON",
    TOTAL_BUYS: 40,
    TOTAL_SELLS: 20,
  },
  {
    name: "TUE",
    TOTAL_BUYS: 20,

    TOTAL_SELLS: 40,
  },
  {
    name: "WES",
    TOTAL_BUYS: 20,
    TOTAL_SELLS: 10,
  },
  {
    name: "THUR",
    TOTAL_BUYS: 70,
    TOTAL_SELLS: 30,
  },
  {
    name: "FRI",
    TOTAL_BUYS: 40,
    TOTAL_SELLS: 25,
  },
  {
    name: "SAT",
    TOTAL_BUYS: 40,

    TOTAL_SELLS: 15,
  },
  {
    name: "SUN",
    TOTAL_BUYS: 40,

    TOTAL_SELLS: 20,
  },
];
class StatsGraph extends PureComponent {
  render(): React.ReactNode {
    return (
      <>
        <div className=" w-full hidden xs:flex items-center justify-center ">
          <BarChart
            width={550}
            height={350}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="TOTAL_BUYS" stackId="a" fill="#1AA392" />
            <Bar dataKey="TOTAL_SELLS" fill="#ffc658" />
          </BarChart>
        </div>
        <div className=" w-full flex xs:hidden items-center justify-center">
          <BarChart
            width={400}
            height={350}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="TOTAL_BUYS" stackId="a" fill="#1AA392" />
            <Bar dataKey="TOTAL_SELLS" fill="#ffc658" />
          </BarChart>
        </div>

        {/*  Mobile Stats*/}
      </>
    );
  }
}
export default StatsGraph;

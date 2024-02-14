import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    completed: 4000,
    rejected: 2400,
  },
  {
    name: "Feb",
    completed: 3000,
    rejected: 1398,
  },
  {
    name: "Mar",
    completed: 2000,
    rejected: 9800,
  },
  {
    name: "Apr",
    completed: 2780,
    rejected: 3908,
  },
  {
    name: "May",
    completed: 1890,
    rejected: 4800,
  },
  {
    name: "Jun",
    completed: 2390,
    rejected: 3800,
  },
  {
    name: "Jul",
    completed: 3490,
    rejected: 4300,
  },
  {
    name: "Aug",
    completed: 3490,
    rejected: 4300,
  },
  {
    name: "Sep",
    completed: 3490,
    rejected: 4300,
  },
  {
    name: "Oct",
    completed: 3490,
    rejected: 4300,
  },
  {
    name: "Nov",
    completed: 3490,
    rejected: 4300,
  },
  {
    name: "Dec",
    completed: 3490,
    rejected: 4300,
  },
];

export default class LoanIssuedChart extends PureComponent {
  render() {
    return (
      //   <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={800}
        height={300}
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
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="completed" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="rejected" fill="#ff0000" />
      </BarChart>
      //   </ResponsiveContainer>
    );
  }
}

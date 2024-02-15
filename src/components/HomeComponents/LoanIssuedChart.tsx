import { BarChart } from "@mui/x-charts/BarChart";

const data = [
  {
    name: "Jan",
    completed: 4000,
    // rejected: 2400,
  },
  {
    name: "Feb",
    completed: 3000,
    // rejected: 1398,
  },
  {
    name: "Mar",
    completed: 2000,
    // rejected: 9800,
  },
  {
    name: "Apr",
    completed: 2780,
    // rejected: 3908,
  },
  {
    name: "May",
    completed: 1890,
    // rejected: 4800,
  },
  {
    name: "Jun",
    completed: 2390,
    // rejected: 3800,
  },
  {
    name: "Jul",
    completed: 3490,
    // rejected: 4300,
  },
  {
    name: "Aug",
    completed: 3490,
    // rejected: 4300,
  },
  {
    name: "Sep",
    completed: 3490,
    // rejected: 4300,
  },
  {
    name: "Oct",
    completed: 3490,
    // rejected: 4300,
  },
  {
    name: "Nov",
    completed: 3490,
    // rejected: 4300,
  },
  {
    name: "Dec",
    completed: 3490,
    // rejected: 4300,
  },
];

const LoanIssuedChart = () => {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["Completed"],
        },
      ]}
      series={[{ data: [4, 3, 5] }]}
      width={500}
      height={300}
    />
  );
};

export default LoanIssuedChart;

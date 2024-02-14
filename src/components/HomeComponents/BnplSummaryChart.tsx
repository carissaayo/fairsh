import { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Legend } from "recharts";
const data = [
  { name: "Completed", value: 400 },
  { name: "Pending", value: 300 },
  { name: "Rejected", value: 300 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class BnplSummaryChart extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      //   <ResponsiveContainer width="50%" height="40%">
      //   <div className=" ">
      <PieChart width={400} height={300}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#F87E0D"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
        {/* <Legend /> */}
      </PieChart>
      //   </div>
      //   </ResponsiveContainer>
    );
  }
}

// import { Chart } from "react-google-charts";

// const data = [
//   ["Completed", 50],
//   ["Pending", 30],
//   ["Rejected", 20],
// ];

// const options = {
//   pieHole: 0.4,
//   is3D: false,
// };

// const BnplSummaryChart = () => {
//   return (
//     <div className="w-[50%] xxl:w-full flex items-center justify-center">
//       <Chart
//         chartType="PieChart"
//         data={data}
//         options={options}
//         width={"70%"}
//         height={"200px"}
//       />
//     </div>
//   );
// };

// export default BnplSummaryChart;
import { BarChart } from "@mui/x-charts/BarChart";

const LoanIssuedChart = () => {
  return (
    <div className="">
      <div className="hidden sm:block">
        <BarChart
          xAxis={[
            {
              scaleType: "band",

              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          ]}
          series={[{ data: [4, 3, 5, 3, 4, 5, 7, 9, 3, 4, 2, 10] }]}
          width={600}
          height={300}
          colors={["#F87E0D"]}
        />
      </div>
      <div className=" hidden xs:block sm:hidden">
        <BarChart
          xAxis={[
            {
              scaleType: "band",

              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          ]}
          series={[{ data: [4, 3, 5, 3, 4, 5, 7, 9, 3, 4, 2, 10] }]}
          width={500}
          height={300}
          colors={["#F87E0D"]}
        />
      </div>
      <div className="block xs:hidden">
        <BarChart
          xAxis={[
            {
              scaleType: "band",

              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          ]}
          series={[{ data: [4, 3, 5, 3, 4, 5, 7, 9, 3, 4, 2, 10] }]}
          width={350}
          height={300}
          colors={["#F87E0D"]}
        />
      </div>
    </div>
  );
};

export default LoanIssuedChart;

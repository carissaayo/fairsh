import { PieChart } from "@mui/x-charts/PieChart";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const BnplSummaryChart = () => {
  return (
    <div className="">
      <div className="hidden sm:block">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 25, label: "Pending" },
                { id: 1, value: 15, label: "Rejected" },
                { id: 2, value: 60, label: "Completed" },
              ],
            },
          ]}
          width={400}
          height={200}
          colors={["#cfed7a", "#da3957", "#F87E0D"]}
        />
      </div>
      <div className=" block sm:hidden">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 25, label: "Pending" },
                { id: 1, value: 15, label: "Rejected" },
                { id: 2, value: 60, label: "Completed" },
              ],
            },
          ]}
          width={350}
          height={200}
          colors={["#cfed7a", "#da3957", "#F87E0D"]}
        />
      </div>
    </div>
  );
};

export default BnplSummaryChart;

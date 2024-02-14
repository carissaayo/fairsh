import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import SummaryRow from "./SummaryRow";

const SummaryTable = () => {
  return (
    <section className="   flex-auto xxl:flex-1 ">
      <h1 className="text-lg font-normal mb-4 ">Summary</h1>

      <div className="">
        <Table className="border border-opacity-40  ">
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium text-black  dark:text-white">
                Date
              </TableHead>
              <TableHead className="font-medium text-black dark:text-white">
                BNPL
              </TableHead>
              <TableHead className="font-medium text-black dark:text-white">
                Value
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="light:bg ">
            <SummaryRow day="Today" bnpl={0} value={0} />
            <SummaryRow day="Yesterday" bnpl={0} value={0} />
            <SummaryRow day="Wednesday" bnpl={0} value={0} />
            <SummaryRow day="Last 7 Days" bnpl={0} value={0} />
            <SummaryRow day="February" bnpl={0} value={0} />
            <SummaryRow day="January" bnpl={0} value={0} />
            <SummaryRow day="November" bnpl={0} value={0} />
            <SummaryRow day="October" bnpl={0} value={0} />
            <SummaryRow day="Total" bnpl={30} value={200000} />
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default SummaryTable;

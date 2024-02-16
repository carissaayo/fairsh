import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Tab from "./TableRow";

const RecentTransactions = () => {
  return (
    <section className="border border-gray-100  rounded-t-xl  bg-white w-[90%] xl:w-full ">
      <div className=" w-full  h-10 flex items-center pl-4  py-6">
        <p className="font-medium text-xl">Latest Transaction</p>
      </div>
      <ScrollArea className=" p-4">
        <Table className="borde border-opacity-30  rounded-lg min-w-[800px] overflow-x-scroll">
          <TableHeader className="rounded-lg ">
            <TableRow className="border-gray-100">
              <TableHead className="font-bold text-lg text-black text-opacity-100 text-center dark:text-white">
                Loan ID
              </TableHead>
              <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
                Customer Name
              </TableHead>
              <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
                Amount Due
              </TableHead>
              <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
                Amount Paid
              </TableHead>
              <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className=".bg">
            <Tab />
            <Tab />
            <Tab />
            <Tab />
            <Tab />
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default RecentTransactions;

import { useBnplStore } from "../../context/Bnpl/getBnpl";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import BnplRow from "./BnplRow";
import Search from "./Search";
const BnplTable = () => {
  const bnpls = useBnplStore((state) => state.bnpls);
  const paginatedBnpls = useBnplStore((state) => state.paginatedBnpls);
  const loading = useBnplStore((state) => state.loading);
  // console.log(paginatedBnpls);

  return (
    <section className="xxl:flex-[1.5]">
      <Search />
      <ScrollArea className=" p-4">
        {bnpls.length > 0 ? (
          <Table className="  rounded-lg min-w-[800px] overflow-x-scroll">
            <TableHeader className="rounded-lg ">
              <TableRow className="border-gray-100 ">
                <TableHead className="font-bold text-lg text-opacity-100 text-center ">
                  S/N
                </TableHead>
                <TableHead className="font-bold text-lg text-opacity-100 text-center ">
                  Name
                </TableHead>
                <TableHead className="font-bold text-lg text-opacity-100  text-center ">
                  Loan Amount
                </TableHead>
                <TableHead className="font-bold text-lg text-opacity-100  text-center ">
                  Gadget
                </TableHead>
                <TableHead className="font-bold text-lg text-opacity-100  text-center ">
                  Status
                </TableHead>
                <TableHead className="font-bold text-lg text-opacity-100  text-center ">
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className=".bg">
              {!loading &&
                bnpls.length > 0 &&
                paginatedBnpls.map((bnpl, index) => (
                  <BnplRow key={bnpl._id} bnpl={bnpl} index={index} />
                ))}
            </TableBody>
          </Table>
        ) : (
          <div className="w-full flex items-center justify-center h-12">
            <p className="text-lg font-normal">There are no bnpls available</p>
          </div>
        )}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default BnplTable;

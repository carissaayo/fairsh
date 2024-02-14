import { useBnplStore } from "../../context/Bnpl/getBnpl";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import BnplRow from "./BnplRow";
const BnplTable = () => {
  const bnpls = useBnplStore((state) => state.bnpls);

  return (
    <section className="">
      <ScrollArea className=" p-4">
        <Table className="borde border-opacity-30  rounded-lg min-w-[800px] overflow-x-scroll">
          <TableHeader className="rounded-lg ">
            <TableRow className="">
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
            {bnpls.length > 0 &&
              bnpls.map((bnpl, index) => (
                <BnplRow key={bnpl._id} bnpl={bnpl} index={index} />
              ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default BnplTable;

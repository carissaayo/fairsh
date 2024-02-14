import { ChevronDownIcon } from "@heroicons/react/24/outline";

import GadgetRow from "./GadgetRow";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
const TopGadgets = () => {
  return (
    <section className="border border-opacity-20  rounded-t-xl w-full  xl:flex-[1.5]">
      <div className=" w-full border-b border-opacity-25 h-10 flex items-center pl-4 bg-[#D2E0ED] bg-opacity-40 justify-between ">
        <p className="font-medium text-xl">Top Selling Gadgets</p>
        <div className="text-base flex items-center gap-4 px-4">
          Sort By:{" "}
          <p className="font-semibold flex items-center gap-2 hover:cursor-pointer">
            Daily{" "}
            <span className="">
              <ChevronDownIcon className="w-6 h-6" />
            </span>
          </p>
        </div>
      </div>
      <ScrollArea className=" p-4">
        <Table className="border border-opacity-30  rounded-lg min-w-[800px] lg:min-w-auto overflow-x-scroll">
          <TableHeader className="rounded-lg ">
            <TableRow className="">
              <TableHead className="font-bold text-lg text-black text-opacity-100 text-center dark:text-white">
                Image
              </TableHead>
              <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
                Name
              </TableHead>
              <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
                <div className="pl-4">Price</div>
              </TableHead>
              <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
                Orders
              </TableHead>
              <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
                Stock
              </TableHead>
              <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <GadgetRow />
            <GadgetRow />
            <GadgetRow />
            <GadgetRow />
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default TopGadgets;

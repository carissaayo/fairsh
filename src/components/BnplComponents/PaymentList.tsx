import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import PaidRow from "./PaidRow";
const PaymentList = () => {
  return (
    <main className="flex border  justify-between w-full p-4 mb-20 flex-col md:flex-row gap-6">
      <section className="flex-[1.5]">
        <div className="mb-10 ">
          <div className="">
            <Table className="border border-opacity-40  ">
              <TableHeader className="text-lg">
                <TableRow>
                  <TableHead className="font-medium text-black dark:text-white"></TableHead>
                  <TableHead className="font-medium text-black dark:text-white">
                    Amount
                  </TableHead>
                  <TableHead className="font-medium text-black dark:text-white">
                    Description
                  </TableHead>
                  <TableHead className="font-medium text-black dark:text-white">
                    Credited
                  </TableHead>
                  <TableHead className="font-medium text-black dark:text-white">
                    Source
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <PaidRow />
                <PaidRow />
                <PaidRow />
                <PaidRow />
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaymentList;

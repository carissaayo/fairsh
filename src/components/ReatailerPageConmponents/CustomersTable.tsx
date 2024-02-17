import { useRetailerPage } from "../../context/Retailers/getRetailerPage";
import { useLoginStore } from "../../context/auth/loginStore";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import CustomerRow from "./CustomerRow";

const CustomersTable = ({ isSales }: { isSales?: boolean }) => {
  const isAdmin = useLoginStore((state) => state.user).profile.adminId;
  const customers = useRetailerPage((state) => state.retailersCustomers);
  const sales = useRetailerPage((state) => state.retailersSales);

  return (
    <ScrollArea className="rounded-md border p-4">
      <Table className="border border-opacity-30  rounded-lg min-w-[max-content] overflow-x-scroll w-full">
        <TableHeader className="rounded-lg ">
          <TableRow className="">
            <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
              Name
            </TableHead>
            <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
              <div className="pl-4">Email</div>
            </TableHead>
            <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
              Phone Number
            </TableHead>
            <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
              Total Purchase
            </TableHead>
            <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
              Purchase Value
            </TableHead>
            <TableHead className="font-bold text-lg text-black text-opacity-100  text-center dark:text-white">
              Updated Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* A customer row */}
          {customers &&
            !isSales &&
            customers?.map((customer) => (
              <CustomerRow
                customer={customer}
                key={customer._id}
                isSales={isSales}
              />
            ))}
          {/* A customer row */}
          {sales &&
            isSales &&
            sales?.map((sale) => (
              <CustomerRow sale={sale} key={sale._id} isSales={isSales} />
            ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CustomersTable;

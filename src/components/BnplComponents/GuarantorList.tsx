import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import GuarantorRow from "./GuarantorRow";
import LoanRow from "./LoanRow";
const GuarantorList = () => {
  return (
    <div className="flex-1 border-l px-2">
      <div className="w-full flex   ">
        <p className="text-xl font-semibold text-left w-full  pb-4 border-b">
          Guarantors
        </p>
      </div>
      <Table className="border border-opacity-40 flex-1 min-w-[350px]">
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium text-black dark:text-white">
              Name
            </TableHead>
            <TableHead className="font-medium text-black dark:text-white">
              Phone
            </TableHead>
            <TableHead className="font-medium text-black dark:text-white">
              Address
            </TableHead>
            <TableHead className="font-medium text-black dark:text-white">
              Relationship
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <GuarantorRow />
          <GuarantorRow />
          <GuarantorRow />
          <GuarantorRow />
        </TableBody>
      </Table>
      <div className="mt-7">
        <div className="w-full flex   ">
          <p className="text-xl font-semibold text-left w-full  pb-4 border-b">
            Payments
          </p>
        </div>
        <Table className="border border-opacity-40 flex-1 min-w-[350px]">
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium text-black dark:text-white">
                #
              </TableHead>
              <TableHead className="font-medium text-black dark:text-white">
                Due Date
              </TableHead>
              <TableHead className="font-medium text-black dark:text-white">
                Amount
              </TableHead>
              <TableHead className="font-medium text-black dark:text-white">
                Paid
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <LoanRow />
            <LoanRow />
            <LoanRow />
            <LoanRow />
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default GuarantorList;

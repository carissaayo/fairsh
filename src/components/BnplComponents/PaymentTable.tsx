import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import PaymentRow from "./PaymentRow";

const PaymentTable = () => {
  return (
    <section className="   flex-auto xxl:flex-1 ">
      <h1 className="text-lg font-normal mb-4 ">Payment</h1>

      <div className="">
        <Table className="border border-opacity-40  ">
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium text-black dark:text-white">
                Date
              </TableHead>
              <TableHead className="font-medium text-black dark:text-white">
                Incomes
              </TableHead>
              <TableHead className="font-medium text-black dark:text-white">
                Value
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <PaymentRow />
            <PaymentRow />
            <PaymentRow />
            <PaymentRow />
            <TableRow className="border-opacity-90 border-black ">
              <TableCell className="font-medium">Total</TableCell>
              <TableCell className="font-medium">&#8358; 0</TableCell>
              <TableCell className="font-medium">&#8358; 0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default PaymentTable;

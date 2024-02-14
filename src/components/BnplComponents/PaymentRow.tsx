import { TableCell, TableRow } from "../ui/table";

const PaymentRow = () => {
  return (
    <TableRow>
      <TableCell className="font-medium">Today</TableCell>
      <TableCell className="font-medium">0(0)</TableCell>
      <TableCell className="font-medium">&#8358; 0</TableCell>
    </TableRow>
  );
};

export default PaymentRow;

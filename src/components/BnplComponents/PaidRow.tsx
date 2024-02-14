import { TableCell, TableRow } from "../ui/table";

const PaidRow = () => {
  return (
    <TableRow className="text-base">
      <TableCell className="font-medium">Jan 21st, 2020 12:34PM</TableCell>
      <TableCell className="font-medium">&#8358; 200,000</TableCell>
      <TableCell className="font-medium">Iphone 15 pro</TableCell>
      <TableCell className="font-medium">BNPL Flutterwave</TableCell>
      <TableCell className="font-medium">John Doe</TableCell>
    </TableRow>
  );
};

export default PaidRow;

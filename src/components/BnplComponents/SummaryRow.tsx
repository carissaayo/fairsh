import { TableCell, TableRow } from "../ui/table";

const SummaryRow = ({
  day,
  value,
  bnpl,
}: {
  day: string;
  value: number;
  bnpl: number;
}) => {
  return (
    <TableRow>
      <TableCell className={`font-medium ${day === "Total" && "text-red-500"}`}>
        {day}
      </TableCell>
      <TableCell className="font-medium">0({bnpl})</TableCell>
      <TableCell className="font-medium">&#8358; {value}</TableCell>
    </TableRow>
  );
};

export default SummaryRow;

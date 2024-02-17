import { RetailerCustomer, RetailerSale } from "../../lib/types";
import { TableCell, TableRow } from "../ui/table";
const CustomerRow = ({
  customer,
  sale,
  isSales,
}: {
  customer?: RetailerCustomer;
  sale?: RetailerSale;
  isSales?: boolean;
}) => {
  const item = !isSales ? customer.updatedAt : sale.soldDate;
  const date = new Date(item).toDateString();

  return (
    <TableRow className="text-base">
      <TableCell>
        <div className="text-center">{customer?.name || sale?.userId}</div>
      </TableCell>
      <TableCell>
        <div className="text-center">{customer?.email || sale?.quantity}</div>
      </TableCell>
      <TableCell className="">
        <div className="text-center">
          {customer?.phoneNumber || sale?.soldPrice}
        </div>
      </TableCell>
      <TableCell className="">
        <div className="text-center">
          {customer?.totalPurchases || sale?.customerId.totalPurchases}
        </div>
      </TableCell>{" "}
      <TableCell className="">
        <div className="text-center">
          {customer?.purchaseValue || sale?.customerId.purchaseValue}
        </div>
      </TableCell>
      <TableCell className="">
        <div className="text-center">{date}</div>
      </TableCell>
    </TableRow>
  );
};

export default CustomerRow;

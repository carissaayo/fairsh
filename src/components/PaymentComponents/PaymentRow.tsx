import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { Bnpl } from "../../lib/types";

const PaymentRow = ({ bnpl, index }: { bnpl: Bnpl; index: number }) => {
  const getDate = (createdDate: string) => {
    const date = new Date(createdDate);
    return date.toDateString();
  };
  return (
    <>
      <TableRow key={bnpl?._id} className="cursor-pointer border-gray-100">
        <TableCell className="text-center">{index + 1}</TableCell>
        <TableCell className="flex justify-center items-center flex-nowrap">
          <div className="">
            {bnpl?.userId.firstName} {bnpl?.userId.lastName}
          </div>
        </TableCell>
        <TableCell className="text-center">
          &#8358; {bnpl?.loanAmount}
        </TableCell>
        <TableCell className="text-center"> {bnpl?.productId.name}</TableCell>
        <TableCell className="text-center">
          <p className="">flutterwave</p>
        </TableCell>
        <TableCell className="text-center">
          {bnpl.createdAt && getDate(bnpl?.createdAt)}
        </TableCell>
      </TableRow>
    </>
  );
};

export default PaymentRow;

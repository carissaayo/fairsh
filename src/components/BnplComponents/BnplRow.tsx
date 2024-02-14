import React, { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { Bnpl } from "../../lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import LoanDetails from "./LoanDetails";
import CustomerDetails from "./CustomerDetails";
import { ScrollArea } from "../ui/scroll-area";
import GuarantorList from "./GuarantorList";
import ConfirmLoan from "./ConfirmLoan";
import RejectLoan from "./RejectLoan";

const BnplRow = ({ bnpl, index }: { bnpl: Bnpl; index: number }) => {
  const [openBnpl, setOpenBnpl] = useState(false);
  const getDate = (createdDate: string) => {
    const date = new Date(createdDate);
    return date.toDateString();
  };
  return (
    <>
      <TableRow
        key={bnpl?._id}
        className="cursor-pointer"
        onClick={() => setOpenBnpl(true)}
      >
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
        <TableCell className="flex justify-center items-center">
          {bnpl?.completed ? (
            <div className=" text-green-600 text-center flex items-center w-[120px] h-[30px] font-bold">
              <p className="">completed</p>
            </div>
          ) : (
            <div className="text-red-800  text-center flex items-center justify-center w-[120px] h-[30px] font-bold">
              <p className="">not completed</p>
            </div>
          )}
        </TableCell>
        <TableCell className="text-center">
          {bnpl.createdAt && getDate(bnpl?.createdAt)}
        </TableCell>
      </TableRow>
      <Dialog open={openBnpl} onOpenChange={() => setOpenBnpl(!openBnpl)}>
        <DialogContent className="sm:max-w-[80%] h-[90%] flex flex-col gap-8">
          <DialogHeader className="mb-0 ">
            <DialogTitle className="flex items-center justify-between w-[90%]">
              <p className="text-2xl">Bnpl Details</p>
              {bnpl.loanStatus !== "Completed" && (
                <div className="flex items-center gap-4">
                  <ConfirmLoan id={bnpl._id} />

                  {bnpl.loanStatus !== "Rejected" && (
                    <RejectLoan id={bnpl._id} />
                  )}
                </div>
              )}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className=" rounded-md border p-4 ">
            <div className="flex items-start gap-4  w-full h-full mb-8">
              <CustomerDetails bnpl={bnpl} />
              <LoanDetails bnpl={bnpl} />
              <GuarantorList />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BnplRow;

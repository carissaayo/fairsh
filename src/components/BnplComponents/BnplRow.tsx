import { useState } from "react";

import { TableCell, TableRow } from "../ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Badge } from "../ui/badge";

import GuarantorList from "./GuarantorList";
import LoanDetails from "./LoanDetails";
import CustomerDetails from "./CustomerDetails";
import ConfirmLoan from "./ConfirmLoan";
import RejectLoan from "./RejectLoan";

import { Bnpl } from "../../lib/types";

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
        className="cursor-pointer border-gray-100"
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
          <div className="  text-center flex items-center justify-center w- font-bold bg">
            <Badge
              variant={
                bnpl.loanStatus === "Rejected" ? "destructive" : "secondary"
              }
              className={`
               
              ${
                bnpl.loanStatus === "Approved" &&
                "bg-green-600 hover:bg-green-600 text-white"
              }
              ${
                bnpl.loanStatus === "Completed" &&
                "bg-blue-600 hover:bg-blue-600 text-white"
              }
              ${
                bnpl.loanStatus === "Awaiting Approval" &&
                "bg-yellow-600 hover:bg-yellow-600 text-white"
              }
               ${
                 bnpl.loanStatus === "Awaiting Enrollment" &&
                 "bg-orange-600 hover:bg-orange-600  text-white"
               }
              `}
            >
              {bnpl?.loanStatus}
            </Badge>
            <p className=""> </p>
          </div>
        </TableCell>
        <TableCell className="text-center">
          {bnpl.createdAt && getDate(bnpl?.createdAt)}
        </TableCell>
      </TableRow>
      <Dialog open={openBnpl} onOpenChange={() => setOpenBnpl(!openBnpl)}>
        <DialogContent className="sm:max-w-[90%] h-[90%] flex flex-col gap-8">
          <DialogHeader className="mb-0 ">
            <DialogTitle className="flex items-center justify-between w-[90%]">
              <p className="text-2xl">Bnpl Details</p>
              <p
                className={`w-[max-content] p-2  flex items-center justify-center  rounded-xl text-white
                ${bnpl.loanStatus === "Approved" && "bg-green-600"}
                ${bnpl.loanStatus === "Rejected" && "bg-red-600"}
                ${bnpl.loanStatus === "Awaiting Approval" && "bg-yellow-600"}
                ${bnpl.loanStatus === "Awaiting Enrollment" && "bg-blue-600"}
                `}
              >
                {bnpl.loanStatus}
              </p>
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
            <div className="flex items-start gap-4  w-full h-full mb-8 min-w-[1170px]">
              <CustomerDetails bnpl={bnpl} />
              <LoanDetails bnpl={bnpl} />
              <GuarantorList />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BnplRow;

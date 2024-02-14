import {
  ChatBubbleLeftEllipsisIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

import CustomerDetails from "./CustomerDetails";
import LoanDetails from "./LoanDetails";
import GuarantorList from "./GuarantorList";
import Message from "./Message";
import Comment from "./Comment";
import ConfirmLoan from "./ConfirmLoan";

import { Bnpl } from "../../lib/types";
import RejectLoan from "./RejectLoan";

const BnplItem = ({ bnpl }: { bnpl: Bnpl }) => {
  const [show, setShow] = useState("");

  return (
    <main className=" border   w-full p-4 mb-20 ">
      <div className="flex w-full justify-between gap-6 light:bg-gray-500  items-center h-[70px] px-4 mb-4  dark:text-white">
        <h2 className=" font-normal text-xl flex-1">Customer</h2>
        <div className="flex w-full justify-between items-center  flex-1 x">
          <h2 className=" font-normal text-xl">Loan Details</h2>
          {/* {bnpl.loanStatus === "Awaiting Approval" && ( */}
          <div className="flex items-center gap-4">
            <ConfirmLoan id={bnpl._id} />
            {bnpl.loanStatus !== "Rejected" && <RejectLoan id={bnpl._id} />}
          </div>
          {/* )} */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <CustomerDetails bnpl={bnpl} />
        <section className="flex-1">
          <LoanDetails bnpl={bnpl} />
          <div className="mb-10 ">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="border p-4 text-lg font-semibold hover:no-underline  bg-gray-500  dark:text-white">
                  View Guarantors
                </AccordionTrigger>
                <AccordionContent className="text-xl font-normal">
                  <GuarantorList />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <section className="mb-10">
            <div className="w-full flex gap-16 items-center mb-4">
              <Button
                className={`flex gap-2 items-center bg-transparent hover:bg-transparent ${
                  show === "notes" ? " border border-blue-500 rounded-lg" : ""
                }`}
                onClick={() => setShow("notes")}
              >
                <InformationCircleIcon className="h-6 w-6 text-black dark:text-white" />
                <span className="text-blue-500">Notes 4</span>
              </Button>
              <Button
                className={`flex gap-2 items-center bg-transparent hover:bg-transparent ${
                  show === "messages" ? "border border-blue-500 rounded-lg" : ""
                }`}
                onClick={() => setShow("messages")}
              >
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-black dark:text-white" />
                <span className="text-blue-500">Messages 4</span>
              </Button>
            </div>
            <Comment show={show} />
            <Message show={show} />
          </section>
        </section>
      </div>
    </main>
  );
};

export default BnplItem;

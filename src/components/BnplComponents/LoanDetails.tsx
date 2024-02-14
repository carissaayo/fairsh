import { Bnpl } from "../../lib/types";

import { Button } from "../ui/button";

const LoanDetails = ({ bnpl }: { bnpl: Bnpl }) => {
  const date = new Date(bnpl.createdAt);

  return (
    <main className="mb-10 flex-1">
      <div className="w-full flex   ">
        <p className="text-xl font-semibold text-left w-full  pb-4 border-b">
          Due Balance: &#8358; {bnpl?.totalOwed.toLocaleString()}
        </p>
      </div>
      <div className="flex gap-10 items-center w-full border-b light:bg-[#f2f2f2] h-[50px] px-3 ">
        <p className="w-28">Gadget</p>
        <p className="">{bnpl?.productId.name}</p>
      </div>
      <div className="flex gap-10 items-center border-b  h-[50px] px-3">
        <p className="w-28">ID</p>
        <p className="">{bnpl?.productId._id}</p>
      </div>
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">Price</p>
        <p className="">&#8358; {bnpl.gadgetPrice.toLocaleString()}</p>
      </div>
      <div className="flex gap-10 items-center border-b  h-[50px] px-3">
        <p className="w-28">Deposit</p>
        <p className="">&#8358; {bnpl?.initialDeposit.toLocaleString()}</p>
      </div>
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">Loan</p>
        <p className="">&#8358; {bnpl?.loanAmount.toLocaleString()}</p>
      </div>
      <div className="flex gap-10 items-center border-b  h-[50px] px-3">
        <p className="w-28">Charges</p>
        <p className="">&#8358;{bnpl?.loanExtraCharge.toLocaleString()}</p>
      </div>
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">Duration</p>
        <p className="">
          {bnpl?.loanPeriod} month{bnpl?.loanPeriod > 1 && "s"}{" "}
        </p>
      </div>
      <div className="flex gap-10 items-center border-b  h-[50px] px-3">
        <p className="w-28">Interest</p>
        <p className="">{bnpl?.loanInterest}%</p>
      </div>{" "}
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">Loan Date</p>
        <p className="">{date?.toDateString()}</p>
      </div>{" "}
      <div className="flex gap-10 items-center border-b  h-[50px] px-3">
        <p className="w-28">Total Owned</p>
        <p className="">&#8358; {bnpl?.totalOwed.toLocaleString()}</p>
      </div>
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">Total Paid</p>
        <p className="">&#8358; 200,000.00</p>
      </div>
      <div className="flex gap-10 items-center border-b  h-[50px] px-3">
        <p className="w-28">Loan Balance</p>
        <p className="">&#8358; 200,000.00</p>
      </div>
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">Due Date</p>
        <p className="">2 Oct 2023</p>
      </div>{" "}
      <div className="flex gap-10 items-center border-b  h-[50px] px-3">
        <p className="w-28">Due Amount</p>
        <p className="">&#8358; 200,000.00</p>
      </div>{" "}
      <div className="flex gap-10 items-center border-b light:bg-[#f2f2f2] h-[50px] px-3">
        <p className="w-28">Payment Link</p>
        <Button variant="link">https://local</Button>
      </div>
    </main>
  );
};

export default LoanDetails;

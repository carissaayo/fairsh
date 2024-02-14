import React from "react";
import Search from "./Search";
import PaymentList from "./PaymentList";

const PaymentCon = () => {
  return (
    <main className="flex-[2] ">
      <Search />

      <PaymentList />
    </main>
  );
};

export default PaymentCon;

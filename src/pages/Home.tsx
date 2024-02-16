import {
  BanknotesIcon,
  BriefcaseIcon,
  CreditCardIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline";

import OrderStat from "../components/HomeComponents/OrderStat";
import RecentTransactions from "../components/HomeComponents/RecentTransactions";
import StatsGraph from "../components/HomeComponents/StatsGraph";
import TopGadgets from "../components/HomeComponents/TopGadgets";
import TopRetailers from "../components/HomeComponents/TopRetailers";
import ShowToaster from "../components/core/ShowToaster";

import { useLoginStore } from "../context/auth/loginStore";
import { useCallback, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../lib/axiosClient";
import { useMainStore } from "../context/core/mainStore";
import { Bars } from "react-loader-spinner";
import toast from "react-hot-toast";

import BnplSummaryChart from "../components/HomeComponents/BnplSummaryChart";
import LoanIssuedChart from "../components/HomeComponents/LoanIssuedChart";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";

const Home = () => {
  // const queryClient = useQueryClient();
  // const userName = useLoginStore((state) => state.user.profile.fullName);
  // const loading = useMainStore((state) => state.loading);

  // if (loading) {
  //   return (
  //     <div className="w-full flex items-center justify-center flex-1 h-full ">
  //       <Bars
  //         height="100"
  //         width="100"
  //         color="#4fa94d"
  //         ariaLabel="bars-loading"
  //         wrapperStyle={{}}
  //         wrapperClass=""
  //         visible={true}
  //       />
  //     </div>
  //   );
  // }
  return (
    <main className="w-full h-full pt-8 px-4 xs:px-4 overflow-x-hidden overflow-y-scroll mb-[400px] md:mb-40  bg-white bg-opacity-90">
      <div className=" mb-1 pb-0">
        {/* Input con */}
        {/* <div className="lg:hidden flex items-center justify-end mb-8 w-full">
          <div className="flex items-center gap-1 border dark:border-white border-black border-opacity-30 px-4 rounded-xl w-3/5  md:w-2/5 xl:w-96 justify-between">
            <input
              type="text"
              className="p-2  focus:outline-none w-full bg-transparent dark:placeholder:text-white"
              placeholder="Search"
            />
            <span className="hover:cursor-pointer">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </span>
          </div>
        </div> */}
      </div>

      {/* Stats con */}
      <section className="flex  justify-between items-center   xl:gap-6 py-8 xxl:h-52  px-12 sm:px-8 xxl:px-4  border border-gray-100 mx-auto xxl:mx-0 rounded-lg mb-10 flex-row flex-wrap xxl:flex-nowrap xl:w-[80%] xxl:w-full ">
        {/* Stats 1 */}
        <div className=" flex    border border-gray-100  w-full sm:w-[48%] md:w-[48%] h-40  justify-center xxl:flex-1  rounded-xl gap-6 sm:gap-4 px-4  font-bold items-center bg-white text-black hover:text-white hover:bg-[#F87E0D] mb-6 xxl:mb-0 ">
          <div className="bg-gray-200 h-[80px] sm:h-[60px] w-[80px] flex items-center justify-center rounded-lg sm:flex-1">
            <BanknotesIcon className=" w-12 h-12 sm:w-8 sm:h-8 text-[#F87E0D]" />
          </div>
          <div className="flex-[2]">
            <p className="text-3xl sm:text-2xl">&#8358; 200,000</p>
            <p className=" sm:text-sm">Total loan issued</p>
          </div>
        </div>
        {/* Stats 2 */}
        <div className=" flex    border border-gray-100  w-full sm:w-[48%] md:w-[48%] h-40  justify-center xxl:flex-1  rounded-xl gap-4 px-4 xxl:gap-2 xxl:px-2  font-bold items-center bg-white text-black hover:text-white hover:bg-[#F87E0D] mb-6 xxl:mb-0">
          <div className="bg-gray-200 h-[80px] sm:h-[60px] w-[80px] flex items-center justify-center rounded-lg sm:flex-1">
            <BanknotesIcon className="w-12 h-12 sm:w-8 sm:h-8 text-[#F87E0D]" />
          </div>
          <div className="flex-[2]">
            <p className=" text-3xl sm:text-2xl">&#8358; 200,000</p>
            <p className=" sm:text-sm">Remaining Balance</p>
          </div>
        </div>

        {/* Stats 2 */}
        <div className=" flex  group  border border-gray-100  w-full sm:w-[48%] md:w-[48%] h-40  justify-center xxl:flex-1  rounded-xl  gap-4 px-4  font-bold items-center bg-white text-black hover:text-white hover:bg-[#F87E0D] mb-6 xxl:mb-0">
          <div className="bg-[#fbbc856e] group-hover:bg-gray-200 h-[80px] sm:h-[60px] w-[80px] flex items-center justify-center rounded-lg sm:flex-1">
            <CreditCardIcon className="w-12 h-12 sm:w-8 sm:h-8 text-[#F87E0D]" />
          </div>
          <div className="flex-[2]">
            <p className=" text-3xl sm:text-2xl">&#8358; 200,000</p>
            <p className=" sm:text-sm">Total Repaid</p>
          </div>
        </div>

        {/* Stats 3 */}
        <div className=" flex    border border-gray-100  w-full sm:w-[48%] md:w-[48%] h-40  justify-center xxl:flex-1  rounded-xl  gap-4 px-4  font-bold items-center bg-white text-black hover:text-white hover:bg-[#F87E0D] mb-6 xxl:mb-0">
          <div className="bg-[#f3fb85] h-[60px] w-[50px] flex items-center justify-center rounded-lg sm:flex-1">
            <BriefcaseIcon className="w-12 h-12 sm:w-8 sm:h-8 text-[#F87E0D]" />
          </div>
          <div className="flex-[2]">
            <p className="text-3xl sm:text-2xl">&#8358; 200,000</p>
            <p className=" sm:text-sm">Due Balance</p>
          </div>
        </div>

        {/* Stats 4 */}
        <div className=" flex    border border-gray-100  w-full sm:w-[48%] md:w-[48%] h-40  justify-center xxl:flex-1  rounded-xl  gap-4 px-4  font-bold items-center bg-white text-black hover:text-white hover:bg-[#F87E0D] mb-6 xxl:mb-0">
          <div className="bg-[#a6f80d] h-[80px] sm:h-[60px] w-[80px] flex items-center justify-center rounded-lg sm:flex-1">
            <ReceiptPercentIcon className="w-12 h-12 sm:w-8 sm:h-8 text-[#F87E0D]" />
          </div>
          <div className="flex-[2]">
            <p className=" text-3xl sm:text-2xl">20%</p>
            <p className=" sm:text-sm">Recovery Rate</p>
          </div>
        </div>
      </section>
      <section className="flex items-center flex-col xxl:flex-row mb-20  gap-8 px-12 md:px-4 w-full">
        <div className="bg-white rounded-lg pt-4 h-[400px]  mb-10 xxl:mb-0">
          <h1 className="ml-6 mb-2">Loan Issued</h1>
          <LoanIssuedChart />
        </div>
        <div className="bg-white rounded-lg pt-4 h-[400px]">
          <h1 className="ml-6 mb-10 ">Bnpl Summary</h1>
          <BnplSummaryChart />
        </div>
      </section>

      <section className="flex flex-col xxl:flex-row items-center gap-8 mb-48 lg:mb-14 w-full ">
        <RecentTransactions />
        <TopRetailers />
      </section>

      {/* <section className="flex flex-col xxl:flex-row items-center xl:mx-10 gap-8 mb-44 md:mb-32">
        <OrderStat />
        <StatsGraph />
      </section> */}
      <ShowToaster />
    </main>
  );
};

export default Home;

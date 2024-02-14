import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { Bars } from "react-loader-spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import PaymentCon from "../components/BnplComponents/PaymentCon";
import PaymentTable from "../components/BnplComponents/PaymentTable";
import ShowToaster from "../components/core/ShowToaster";

import { useBnplStore } from "../context/Bnpl/getBnpl";
import axiosClient from "../lib/axiosClient";

const Bnpl = () => {
  const queryClient = useQueryClient();
  const loading = useBnplStore((state) => state.loading);
  const setLoading = useBnplStore((state) => state.setLoading);
  const setBnpls = useBnplStore((state) => state.setBnpls);

  const fetchBnpls = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/admin/bnpl`)
      .then((response) => {
        console.log(response);
        setBnpls(response.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, []);

  const { mutate: stateFn } = useMutation({
    mutationFn: () => fetchBnpls(),
  });
  useEffect(() => {
    stateFn();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center flex-1 h-full ">
        <Bars
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <main className="w-full h-full pt-8 px-4 xs:px-8 overflow-x-hidden overflow-y-scroll mb-[400px] md:mb-40 ">
      <section className="flex flex-col xxl:flex-row justify-between w-full mb-32 lg:mb-10 gap-8">
        <PaymentTable />
        <PaymentCon />
      </section>
      <ShowToaster />
    </main>
  );
};

export default Bnpl;

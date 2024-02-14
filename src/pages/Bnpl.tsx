import { useCallback, useEffect } from "react";
import axiosClient from "../lib/axiosClient";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import ShowToaster from "../components/core/ShowToaster";

import { useBnplStore } from "../context/Bnpl/getBnpl";
import Navs from "../components/BnplComponents/Navs";
import BnplTable from "../components/BnplComponents/BnplTable";

const Bnpl = () => {
  const queryClient = useQueryClient();

  const loading = useBnplStore((state) => state.loading);
  const setLoading = useBnplStore((state) => state.setLoading);
  const setFilterBnplLoading = useBnplStore(
    (state) => state.setFilteredBnplLoading
  );
  const setFiltered = useBnplStore((state) => state.setFiltered);
  const filtered = useBnplStore((state) => state.filtered);

  const setBnpls = useBnplStore((state) => state.setBnpls);
  const bnpls = useBnplStore((state) => state.bnpls);
  const bnplsAnalytics = useBnplStore((state) => state.bnplsAnalytics);
  const setBnplsAnalytics = useBnplStore((state) => state.setBnplsAnalytics);
  const filterTerm = useBnplStore((state) => state.filterTerm);
  const refetch = useBnplStore((state) => state.refetch);
  const setRefetch = useBnplStore((state) => state.setRefetch);

  // Refetch
  const refetchBnpls = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/admin/bnpl`)
      .then((response) => {
        setBnpls(response.data?.data.bnpl);
        console.log(response.data?.data.bnpl);
        console.log("hello");
        setRefetch(false);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, [refetch]);
  const fetchBnpls = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/admin/bnpl`)
      .then((response) => {
        setBnpls(response.data?.data.bnpl);
        console.log(response.data?.data.bnpl);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, []);

  const fetchFilteredBnpls = useCallback(async () => {
    setFilterBnplLoading(true);
    await axiosClient
      .get(`/admin/bnpl`, {
        params: {
          loanStatus: (filterTerm === "All" ? "" : filterTerm) ?? "",
        },
      })
      .then((response) => {
        setRefetch(false);
        setBnpls(response.data?.data.bnpl);
        setFiltered(false);
        setFilterBnplLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setFilterBnplLoading(false);
        toast.error("something went wrong");
      });
  }, [filterTerm]);

  const fetchBnplsAnalytics = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/admin/bnpl-analytics`)
      .then((response) => {
        setBnplsAnalytics(response.data?.data.bnplAnalytics);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("something went wrong");
      });
  }, [refetch]);

  const { data } = useQuery({
    queryKey: ["filterTerm"],
    queryFn: () => fetchFilteredBnpls(),
    enabled: !!filterTerm,
  });

  const { mutate: stateFn } = useMutation({
    mutationFn: () => fetchBnpls(),
  });
  const { mutate: refetchFn } = useMutation({
    mutationFn: () => refetchBnpls(),
  });

  const { mutate: bnplsAnalyticsFn } = useMutation({
    mutationFn: () => fetchBnplsAnalytics(),
  });
  useEffect(() => {
    bnpls.length === 0 && stateFn();
  }, [bnpls]);

  useEffect(() => {
    refetch && refetchFn();
  }, [refetch]);
  useEffect(() => {
    (bnplsAnalytics.length === 0 || refetch) && bnplsAnalyticsFn();
  }, [refetch]);
  useEffect(() => {
    filtered && fetchFilteredBnpls();
  }, [filterTerm, filtered]);

  return (
    <main className="w-full h-full   overflow-x-hidden overflow-y-scroll mb-[400px] md:mb-40 bg-white ">
      {loading ? (
        <div className="w-full flex items-center justify-center flex-1 h-full ">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <>
          <Navs />
          <section className="w-full mb-32 px-4 xs:px-8">
            {/* <MainCon /> */}
            <BnplTable />
          </section>
          <ShowToaster />
        </>
      )}
    </main>
  );
};

export default Bnpl;

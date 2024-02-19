import { useCallback, useEffect } from "react";
import axiosClient from "../lib/axiosClient";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import ShowToaster from "../components/core/ShowToaster";

import { useBnplStore } from "../context/Bnpl/getBnpl";
import Navs from "../components/BnplComponents/Navs";
import BnplTable from "../components/BnplComponents/BnplTable";
import PaginationCon from "../components/Pagination";
import SummaryTable from "../components/BnplComponents/SummaryTable";
import { useUserProfileStore } from "../context/auth/getProfile";
import { Navigate } from "react-router-dom";
import { useLoginStore } from "../context/auth/loginStore";

const Bnpl = () => {
  const queryClient = useQueryClient();

  const loading = useBnplStore((state) => state.loading);
  const setLoading = useBnplStore((state) => state.setLoading);
  const setFilterBnplLoading = useBnplStore(
    (state) => state.setFilteredBnplLoading
  );
  const filterBnplLoading = useBnplStore((state) => state.filteredBnplLoading);
  const setFiltered = useBnplStore((state) => state.setFiltered);
  const filtered = useBnplStore((state) => state.filtered);

  const setBnpls = useBnplStore((state) => state.setBnpls);
  const setPaginatedBnpls = useBnplStore((state) => state.setPaginatedBnpl);
  const bnpls = useBnplStore((state) => state.bnpls);
  const setBnplsTotal = useBnplStore((state) => state.setBnplsTotal);
  const bnplsAnalytics = useBnplStore((state) => state.bnplsAnalytics);
  const setBnplsAnalytics = useBnplStore((state) => state.setBnplsAnalytics);
  const filterTerm = useBnplStore((state) => state.filterTerm);
  const refetch = useBnplStore((state) => state.refetch);
  const setRefetch = useBnplStore((state) => state.setRefetch);
  const pageCount = useBnplStore((state) => state.pageCount);
  const setPageCount = useBnplStore((state) => state.setPageCount);
  const profile = useLoginStore((state) => state.user.profile);

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

        setBnplsTotal(response.data?.data.bnpl.length);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error(error.response.data.message);
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
        // console.log(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error(error.response.data.message);
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

  // useEffect(() => {
  //   refetch && refetchFn();
  // }, [refetch]);
  useEffect(() => {
    refetch && bnplsAnalyticsFn();
  }, [refetch]);
  useEffect(() => {
    filtered && fetchFilteredBnpls();
  }, [filterTerm, filtered]);

  if (!profile.emailVerified) {
    return <Navigate to="/account" />;
  }

  return (
    <main className="w-full h-full   overflow-x-hidden overflow-y-scroll mb-52 xxl:mb-40 bg-white ">
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
            {filterBnplLoading ? (
              <div className="w-full flex items-center justify-center flex-1 h-full ">
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            ) : (
              <>
                <section className="w-full flex gap-8 flex-col xxl:flex-row ">
                  <SummaryTable />
                  <BnplTable />
                </section>
                <section className="">
                  {bnpls.length > 0 && (
                    <PaginationCon
                      itemsPerPage={10}
                      items={bnpls}
                      setItems={setPaginatedBnpls}
                      pageCount={pageCount}
                      setPageCount={setPageCount}
                    />
                  )}
                </section>
              </>
            )}
          </section>
          <ShowToaster />
        </>
      )}
    </main>
  );
};

export default Bnpl;

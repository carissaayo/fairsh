import { useEffect, useCallback } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";

import Header from "../components/RetailersComponents/Header";
import RetailerCard from "../components/RetailersComponents/RetailerCard";
import PaginationCon from "../components/Pagination";

import { useRetailersStore } from "../context/Retailers/getRetailers";
import axiosClient from "../lib/axiosClient";
import useDebounce from "../utils/useDebounce";

const Retailers = () => {
  const loading = useRetailersStore((state) => state.loading);
  const retailers = useRetailersStore((state) => state.retailers);
  const paginatedRetailers = useRetailersStore(
    (state) => state.paginatedRetailers
  );
  const setPaginatedRetailers = useRetailersStore(
    (state) => state.setPaginatedRetailers
  );
  const filterByState = useRetailersStore((state) => state.filterByState);
  const filterByLGA = useRetailersStore((state) => state.filterByLGA);

  const setStates = useRetailersStore((state) => state.setStates);
  const setLGAs = useRetailersStore((state) => state.setLGAs);
  const states = useRetailersStore((state) => state.states);

  const searchTerm = useRetailersStore((state) => state.searchTerm);

  const setRetailers = useRetailersStore((state) => state.setRetailers);
  const setLoading = useRetailersStore((state) => state.setLoading);
  const setPageCount = useRetailersStore((state) => state.setPageCount);
  const pageCount = useRetailersStore((state) => state.pageCount);
  const debouncedSearch = useDebounce(searchTerm, 1000);

  const queryClient = useQueryClient();

  const fetchStateAndLGA = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/admin/data/states_lga`)
      .then((response) => {
        setLGAs(response.data?.data.lga);
        setStates(response.data?.data.states);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("something went wrong");
        return error;
      });
  }, []);

  const { mutate: stateFn } = useMutation({
    mutationFn: () => fetchStateAndLGA(),
  });

  const fetchRetailers = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/admin/retailers`, {
        params: {
          state: filterByState === "All" ? "" : filterByState,
          city: filterByLGA === "All" ? "" : filterByLGA,
        },
      })
      .then((response) => {
        console.log(response.data?.data);
        setRetailers(response.data?.data.stores);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("something went wrong");
        return error;
      });
  }, [filterByLGA, filterByState, retailers]);

  const searchRetailers = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .get(`/admin/retailers?`, {
        params: {
          name: debouncedSearch ?? "",
          state: filterByState === "All" ? "" : filterByState,
        },
      })
      .then((response) => {
        setLoading(false);
        setRetailers(response.data?.data.stores);
        return response.data?.data;
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("something went wrong");
        return error;
      });
  }, [debouncedSearch, filterByState]);

  const { data: searchByNameData } = useQuery({
    queryKey: ["searchByName"],
    queryFn: () => searchRetailers(),
    enabled: !!debouncedSearch,
  });

  // Only run when the fetchByState changes
  const { data } = useQuery({
    queryKey: ["filterBystate", "filterByLGA"],
    queryFn: () => fetchRetailers(),
    enabled: !!(filterByState || (filterByState && filterByLGA)),
  });

  // Initial Fetch
  const { mutate: submitFn } = useMutation({
    mutationFn: () => fetchRetailers(),
  });

  useEffect(() => {
    //  only run when the retailers is 0 at the initial rendering and when there is retailers and the filterByState is set to a value
    (retailers.length === 0 ||
      filterByState ||
      (filterByState && filterByLGA)) &&
      submitFn();
    console.log(data);
  }, [filterByState, filterByLGA]);

  useEffect(() => {
    debouncedSearch && searchRetailers();
    console.log(searchByNameData);
  }, [debouncedSearch, searchTerm]);

  useEffect(() => {
    states.length === 0 && stateFn();
  }, []);
  return (
    <main className="w-full h-full pt-8 px-6 sm:px-4 md:px-8   overflow-y-scroll mb-40">
      <Header retailersNumber={retailers.length} loading={loading} />

      <section className="mb-8 grid grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-2 md:gap-12 xl:gap-8 ">
        {!loading &&
          retailers.length > 0 &&
          paginatedRetailers?.map((retailer) => (
            <RetailerCard key={retailer._id} retailer={retailer} />
          ))}
      </section>
      {!loading && retailers.length > 0 && (
        <section className="w-full flex items-center justify-center">
          <PaginationCon
            itemsPerPage={15}
            items={retailers}
            setItems={setPaginatedRetailers}
            pageCount={pageCount}
            setPageCount={setPageCount}
          />
        </section>
      )}

      {!loading && retailers.length === 0 && (
        <div className="w-full flex items-center justify-center flex-1 mb-2">
          <p className="">No retailer found</p>
        </div>
      )}
      {loading && (
        <div className="w-full flex items-center justify-center flex-1 mb-2 h-full">
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
      )}
    </main>
  );
};

export default Retailers;

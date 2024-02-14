import { create } from "zustand";
import { Retailer } from "../../lib/types";

type Data = {
  success: boolean;
  loading: boolean;
  error: boolean;
  retailers: Retailer[];
  filterByState: string;
  filterByLGA: string;
  searchTerm: string | number;
  pageNumber: number;
  paginatedRetailers: Retailer[];
  totalPageNumber: number;
  pageCount: number;
  states: string[];
  lgas: {};
  setLGAs: (data: string[]) => void;
  setStates: (state: string[]) => void;
  setFilterByLGA: (state: string) => void;
  setPageCount: (page: number) => void;
  setPaginatedRetailers: (retailers: Retailer[]) => void;
  setError: (error: boolean) => void;
  setLoading: (loading: boolean) => void;
  setRetailers: (data: Retailer[]) => void;
  setTotalPageNumber: (num: number) => void;
  setPageNumber: (num: number) => void;
  setFilterByState: (state: string) => void;
  setSearchTerm: (state: string) => void;
};
export const useRetailersStore = create<Data>((set) => ({
  loading: false,
  success: false,
  error: false,
  retailers: [],
  filterByState: "",
  totalPageNumber: 1,
  pageNumber: 1,
  searchTerm: "",
  pageCount: 1,
  paginatedRetailers: [],
  filterByLGA: "",
  states: [],
  lgas: {},
  setLGAs: (data: string[]) => set({ lgas: data }),
  setStates: (state: string[]) => set({ states: state }),
  setFilterByLGA: (state: string) => set({ filterByLGA: state }),
  setPageCount: (pages: number) => set({ pageCount: pages }),
  setPaginatedRetailers: (retailers: Retailer[]) =>
    set({ paginatedRetailers: retailers }),
  setTotalPageNumber: (num: number) => set({ totalPageNumber: num }),
  setPageNumber: (num: number) => set({ pageNumber: num }),
  setSearchTerm: (term: string | number) => set(() => ({ searchTerm: term })),
  setFilterByState: (state: string) => set(() => ({ filterByState: state })),
  setRetailers: (data) => set(() => ({ retailers: data })),
  setError: (error: boolean) => set(() => ({ error: error })),
  setSuccess: (sucess: boolean) => set(() => ({ success: sucess })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
}));

import { create } from "zustand";
import {
  RetailerCustomer,
  RetailerGadget,
  RetailerSale,
} from "../../lib/types";

type Data = {
  success: boolean;
  loading: boolean;
  error: boolean;
  suspending: boolean;
  pageNumber: number;
  totalPageNumber: number;
  pageCount: number;
  gadgets: RetailerGadget[];
  paginatedGadgets: RetailerGadget[];
  paginatedCustomers: RetailerCustomer[];
  retailersCustomers: RetailerCustomer[];
  retailersSales: RetailerSale[];
  paginatedSales: RetailerSale[];
  setPaginatedSales: (sales: RetailerSale[]) => void;
  setRetailersSales: (sales: RetailerSale[]) => void;
  setPageCount: (page: number) => void;

  setPaginatedGadgets: (gadgets: RetailerGadget[]) => void;
  setRetailersCustomers: (customers: RetailerCustomer[]) => void;
  setPaginatedCustomers: (customers: RetailerCustomer[]) => void;
  setSuspending: (suspend: boolean) => void;
  setError: (error: boolean) => void;
  setLoading: (loading: boolean) => void;
  setGadgets: (data: RetailerGadget[]) => void;
  setTotalPageNumber: (num: number) => void;
  setPageNumber: (num: number) => void;
};
export const useRetailerPage = create<Data>((set) => ({
  loading: false,
  success: false,
  error: false,
  suspending: false,
  retailersCustomers: [],
  paginatedGadgets: [],
  paginatedCustomers: [],
  paginatedSales: [],
  totalPageNumber: 1,
  pageNumber: 1,
  pageCount: 1,
  retailersSales: [],
  setPaginatedSales: (sales: RetailerSale[]) => set({ paginatedSales: sales }),
  setRetailersSales: (sales: RetailerSale[]) => set({ retailersSales: sales }),
  setPageCount: (pages: number) => set({ pageCount: pages }),
  setPaginatedGadgets: (gadgets: RetailerGadget[]) =>
    set({ paginatedGadgets: gadgets }),
  setPaginatedCustomers: (customers: RetailerCustomer[]) =>
    set({ paginatedCustomers: customers }),
  setRetailersCustomers: (customers: RetailerCustomer[]) =>
    set({ retailersCustomers: customers }),
  setSuspending: (suspending: boolean) => set(() => ({ suspending })),
  gadgets: [],
  setGadgets: (data) => set(() => ({ gadgets: data })),
  setError: (error: boolean) => set(() => ({ error: error })),
  setSuccess: (sucess: boolean) => set(() => ({ success: sucess })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
  setTotalPageNumber: (num: number) => set({ totalPageNumber: num }),
  setPageNumber: (num: number) => set({ pageNumber: num }),
}));

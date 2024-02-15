import { create } from "zustand";
import { Bnpl, BnplAnalytic } from "../../lib/types";

type Data = {
  loading: boolean;
  filtered: boolean;
  setFiltered: (done: boolean) => void;
  error: boolean;
  filterTerm: string;
  bnpls: Bnpl[];
  bnplsAnalytics: BnplAnalytic[];
  filteredBnplLoading: boolean;
  rejectReason: string;
  actionLoading: boolean;
  done: boolean;
  refetch: boolean;
  paginatedBnpls: Bnpl[];
  pageNumber: number;
  totalPageNumber: number;
  pageCount: number;
  setPageCount: (page: number) => void;
  setTotalPageNumber: (num: number) => void;
  setPageNumber: (num: number) => void;
  setPaginatedBnpl: (bnpl: Bnpl[]) => void;
  setRefetch: (boo: boolean) => void;
  setDone: (done: boolean) => void;
  setActionLoading: (ac: boolean) => void;
  setRejectReason: (text: string) => void;
  setFilteredBnplLoading: (loadin: boolean) => void;
  setBnplsAnalytics: (date: BnplAnalytic[]) => void;
  setFilterTerm: (key: string) => void;
  setBnpls: (bnpl: Bnpl[]) => void;
  setError: (error: boolean) => void;
  setLoading: (loading: boolean) => void;
};
export const useBnplStore = create<Data>((set) => ({
  loading: false,
  error: false,
  filteredBnplLoading: false,
  actionLoading: false,
  bnpls: [],
  filterTerm: "",
  bnplsAnalytics: [],
  filtered: false,
  rejectReason: "",
  done: false,
  refetch: false,
  paginatedBnpls: [],
  totalPageNumber: 1,
  pageNumber: 1,
  pageCount: 1,
  setActionLoading: (ac: boolean) => set(() => ({ actionLoading: ac })),
  setPageCount: (pages: number) => set({ pageCount: pages }),
  setTotalPageNumber: (num: number) => set({ totalPageNumber: num }),
  setPageNumber: (num: number) => set({ pageNumber: num }),
  setPaginatedBnpl: (bnpl: Bnpl[]) => set(() => ({ paginatedBnpls: bnpl })),
  setRefetch: (fet: boolean) => set(() => ({ refetch: fet })),
  setDone: (done: boolean) => set(() => ({ done })),
  setRejectReason: (text: string) => set(() => ({ rejectReason: text })),
  setFiltered: (done: boolean) => set(() => ({ filtered: done })),
  setFilteredBnplLoading: (loading: boolean) =>
    set(() => ({ filteredBnplLoading: loading })),
  setBnplsAnalytics: (data: BnplAnalytic[]) =>
    set(() => ({ bnplsAnalytics: data })),
  setFilterTerm: (key: string) => set(() => ({ filterTerm: key })),
  setBnpls: (bnpl: Bnpl[]) => set(() => ({ bnpls: bnpl })),
  setError: (error: boolean) => set(() => ({ error: error })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
}));

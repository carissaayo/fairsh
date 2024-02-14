import { create } from "zustand";
import { Brand, category } from "../../lib/types";
type Data = {
  showToast: boolean;
  toastMessage: string;
  loading: boolean;
  brands: Brand[];
  categories: category[];
  setCategories: (catergories: category[]) => void;
  setBrands: (brands: Brand[]) => void;
  setToastMessage: (message: string) => void;
  setLoading: (loading: boolean) => void;
  setShowToast: (toast: boolean) => void;
};

export const useMainStore = create<Data>((set) => ({
  showToast: false,
  toastMessage: "",
  loading: false,
  brands: [],
  categories: [],
  setCategories: (categories: category[]) => set({ categories }),
  setBrands: (brands: Brand[]) => set({ brands }),
  setToastMessage: (message: string) => set(() => ({ toastMessage: message })),
  setLoading: (loading: boolean) => set({ loading }),
  setShowToast: (toast: boolean) => set({ showToast: toast }),
}));

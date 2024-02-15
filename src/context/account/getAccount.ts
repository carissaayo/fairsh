import { create } from "zustand";

type Data = {
  loading: boolean;
  error: boolean;
  email?: string;
  success: boolean;
  setError: (error: boolean) => void;
  setLoading: (loading: boolean) => void;
  setSuccess: (sucess: boolean) => void;
  setEmail?: (email: string) => void;
};
export const useManageAccountStore = create<Data>((set) => ({
  loading: false,
  error: false,
  success: false,
  email: "",
  setError: (error: boolean) => set(() => ({ error: error })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
  setEmail: (email: string) => set(() => ({ email: email })),
  setSuccess: (sucess) => set(() => ({ success: sucess })),
}));

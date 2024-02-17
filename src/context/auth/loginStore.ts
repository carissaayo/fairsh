import { create } from "zustand";
import { LoggedInUserData } from "../../lib/types";

const getUserFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("data")) ?? [];

type Data = {
  user: LoggedInUserData;

  success: boolean;
  loading: boolean;
  setUser: (data: LoggedInUserData) => void;
  setLoading: (loading: boolean) => void;
  setSuccess: (sucess: boolean) => void;
};
export const useLoginStore = create<Data>((set) => ({
  user: getUserFromLocalStorage(),
  loading: false,
  success: false,
  setUser: (userData: LoggedInUserData) => set(() => ({ user: userData })),
  setSuccess: (sucess) => set(() => ({ success: sucess })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
}));

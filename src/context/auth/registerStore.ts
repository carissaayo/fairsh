import { create } from "zustand";
import { LoggedInUserData } from "../../lib/types";
const getUserFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("data")) ?? [];

type Data = {
  user: {
    accessToken: string;
    profile: {
      adminId: string;
      email: string;
      fullName: string;
      isApproved: boolean;
    };
  };
  error: string;
  success: boolean;
  loading: boolean;
  setUser: (data: LoggedInUserData) => void;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
  setSuccess: (sucess: boolean) => void;
};
export const useRegisterStore = create<Data>((set) => ({
  user: getUserFromLocalStorage(),
  error: "",
  loading: false,
  success: false,
  setUser: (userData: LoggedInUserData) => set(() => ({ user: userData })),
  setSuccess: (sucess) => set(() => ({ success: sucess })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
  setError: (text: string) => set(() => ({ error: text })),
  setData: (newData: LoggedInUserData) => set(() => ({ user: newData })),
}));

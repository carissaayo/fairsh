import { create } from "zustand";

type Data = {
  success: boolean;
  loading: boolean;
  verified?: boolean;
  setVerified?: (verified: boolean) => void;
  setLoading: (loading: boolean) => void;
  setSuccess: (sucess: boolean) => void;
  email?: string;
  setEmail?: (email: string) => void;
  resetAction?: string;
};
export const useChangePasswordStore = create<Data>((set) => ({
  loading: false,
  success: false,
  resetAction: "sendCode",
  setSuccess: (sucess) => set(() => ({ success: sucess })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
}));

export const useResetPasswordStore = create<Data>((set) => ({
  loading: false,
  success: false,
  verified: false,
  setVerified: (verified: boolean) => set(() => ({ verified })),
  email: "",
  setEmail: (email: string) => set(() => ({ email: email })),

  setSuccess: (sucess) => set(() => ({ success: sucess })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
}));

import { create } from "zustand";

type Data = {
  verificationCode: string;
  verified: boolean;
  setVerified: (verified: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};
export const useVerifyEmailStore = create<Data>((set) => ({
  verificationCode: "",
  verified: true,
  loading: false,
  setLoading: (loading: boolean) => set(() => ({ loading })),
  setVerified: (verified) => set(() => ({ verified })),
}));

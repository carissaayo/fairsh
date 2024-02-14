import { create } from "zustand";

type Data = {
  success: boolean;
  loading: boolean;
  error: boolean;
  setError: (error: boolean) => void;
  setLoading: (loading: boolean) => void;
  setSuccess: (sucess: boolean) => void;
  email: string;
  setEmail: (email: string) => void;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
};
export const useCreateUserStore = create<Data>((set) => ({
  loading: false,
  success: false,
  error: false,
  setError: (error: boolean) => set(() => ({ error: error })),
  email: "",
  errorMessage: "",
  setErrorMessage: (mes: string) => set(() => ({ errorMessage: mes })),
  setEmail: (email: string) => set(() => ({ email })),
  setSuccess: (sucess) => set(() => ({ success: sucess })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
}));

// export const useResetPasswordStore = create<Data>((set) => ({
//   loading: false,
//   success: false,
//   setSuccess: (sucess) => set(() => ({ success: sucess })),
//   setLoading: (loading: boolean) => set(() => ({ loading: loading })),
// }));

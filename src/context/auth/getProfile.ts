import { create } from "zustand";
import { Profile } from "../../lib/types";

type Data = {
  loading: boolean;
  profile: Profile;
  setProfile: (profile: Profile) => void;
  setLoading: (loading: boolean) => void;
};
export const useUserProfileStore = create<Data>((set) => ({
  loading: false,
  profile: {
    adminId: "",
    email: "",
    fullName: "",
    isApproved: false,
    permissions: [],
    fintechPartner: false,
    emailVerified: false,
  },
  setProfile: (profile: Profile) => set(() => ({ profile })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
}));

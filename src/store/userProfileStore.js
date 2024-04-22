import { create } from "zustand";

const useUserProfileStore = create((set) => ({
  userPofile: null,
  setUserProfile: (userPofile) => set({ userPofile }),
}));

export default useUserProfileStore;

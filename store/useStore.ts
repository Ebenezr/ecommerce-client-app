import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import useProdStore from "./slices/productSlice";
import useModalStore from "./slices/modalSlice";

import ProductState from "./types/iProductState";
import ModalState from "./types/iModalState";

export const useStore = create<ProductState & ModalState>()(
  persist(
    (...a) => ({
      ...useProdStore(...a),
      ...useModalStore(...a),
    }),
    {
      name: "next-zustand",
      // storage: createJSONStorage(() => sessionStorage),
      storage: createJSONStorage(() => ({
        setItem: (...args) => window.sessionStorage.setItem(...args),
        removeItem: (...args) => window.sessionStorage.removeItem(...args),
        // prevent hydration error
        getItem: async (...args) =>
          new Promise((resolve) => {
            if (typeof window === "undefined") {
              resolve(null);
            } else {
              setTimeout(() => {
                resolve(window.sessionStorage.getItem(...args));
              }, 2000);
            }
          }),
      })),
    }
  )
);
export default useStore;

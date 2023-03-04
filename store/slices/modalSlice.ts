import { StateCreator } from "zustand";
import ModalState from "../types/iModalState";

const useModalStore: StateCreator<ModalState> = (set, get) => ({
  isModalOpen: false,
  CloseModal: () => {
    set((state) => ({
      isModalOpen: false,
    }));
  },
  OpenModal: () => {
    set((state) => ({
      isModalOpen: true,
    }));
  },
});

export default useModalStore;

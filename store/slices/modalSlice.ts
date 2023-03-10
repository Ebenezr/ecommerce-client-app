import { StateCreator } from "zustand";
import ModalState from "../types/iModalState";

const useModalStore: StateCreator<ModalState> = (set, get) => ({
  isModalOpen: false,
  isEditable: false,
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
  setIsEditable: () => {
    set((state) => ({
      isEditable: true,
    }));
  },
  resetIsEditable: () => {
    set((state) => ({
      isEditable: false,
    }));
  },
});

export default useModalStore;

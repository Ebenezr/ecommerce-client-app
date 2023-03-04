import { toast } from "react-toastify";
import { StateCreator } from "zustand";
import ProductState from "../types/iProductState";

const useProdStore: StateCreator<ProductState> = (set, get) => ({
  currentProduct: {
    id: 1,
    name: "",
    description: "",
    price: 0,
    rating: 5,
    image_url: "",
    size: "",
    categoryId: 1,
    discount: 0,
    sponsored: true,
    color: "",
  },
  setCurrentProduct: (params: any) => {
    set((state) => ({
      currentProduct: params,
    }));
  },
});

export default useProdStore;

import { Product } from "@/type";
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
    productCategoryId: 1,
    discount: 0,
    sponsored: true,
    color: "",
    supplier: "",
  },
  setCurrentProduct: (params: any) => {
    set((state) => ({
      currentProduct: params,
    }));
  },
  resetCurrentProduct: () => {
    set((state) => ({
      currentProduct: {
        id: 0,
        name: "",
        description: "",
        price: 0,
        rating: 0,
        image_url: "",
        size: "",
        productCategoryId: 0,
        discount: 0,
        sponsored: false,
        color: "",
        supplier: "",
      },
    }));
  },
});

export default useProdStore;

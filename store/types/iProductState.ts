import { Product, productCategory } from "@/type";

interface ProductState {
  currentProduct: Product;
  setCurrentProduct: (params: any) => void;
  resetCurrentProduct: () => void;
}
export default ProductState;

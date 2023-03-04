import { Product, productCategory } from "@/type";

interface ProductState {
  currentProduct: Product;
  setCurrentProduct: (params: any) => void;

}
export default ProductState;

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating?: number;
  image_url?: string;
  size: string;
  productCategoryId: number;
  discount?: number;
  sponsored: boolean;
  color?: string;
  supplier: string;
}

export interface productCategory {
  id: number;
  name: string;
  products: Product[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  image_url: string | null;
}

import Product from './Product';

interface CartItem {
  product: Product;
  quantity: number;
  timestamp: string;
  price: number;
  status: "checked" | "unchecked" | "indeterminate";
};

export default CartItem;

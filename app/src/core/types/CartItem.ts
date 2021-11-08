import Product from './Product';

interface CartItem {
  product: Product;
  quantity: number;
  timestamp: number;
  price: number;
  status: "checked" | "unchecked" | "indeterminate";
};

export default CartItem;

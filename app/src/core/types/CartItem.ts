import Product from './Product';

interface CartItem {
  product: Product;
  quantity: number;
  timestamp: string;
  price: number;
};

export default CartItem;

import Product from './Product';

interface CartItem {
  product: Product;
  quantity: number;
  timestamp: number;
  price: number;
};

export default CartItem;

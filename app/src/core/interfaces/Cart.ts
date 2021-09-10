import Product from "./Product";

interface Cart {
  product: Product;
  quantity: number;
  timestamp: number;
  price: number;
}

export default Cart;
import { useEffect, useState } from 'react';
import available from '../../../utils/available';

export default function useCart() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [availableProducts, setAvailableProducts] = useState(
    Object.keys(available)
  );
  const [removeItem, remove] = useState(null);

  const cartManager = new CartManager(
    cart,
    setCart,
    cartItems,
    setCartItems,
    availableProducts,
    setAvailableProducts
  );

  useEffect(() => {
    cartManager.add(...product);
  }, [product]);

  useEffect(() => {
    if (!removeItem) return;

    cartManager.remove(removeItem);

    remove(null);
  }, [removeItem]);

  return [setProduct, cart, cartItems, availableProducts, remove];
}

class CartManager {
  constructor(
    cart,
    setCart,
    cartItems,
    setCartItems,
    availableProducts,
    setAvailableProducts
  ) {
    this.cart = cart;
    this.setCart = setCart;
    this.cartItems = cartItems;
    this.setCartItems = setCartItems;
    this.availableProducts = availableProducts;
    this.setAvailableProducts = setAvailableProducts;
  }

  removeAvailable(product_name) {
    const available = this.getAvailableCopy();
    this.setAvailableProducts(() => {
      return available.filter((item) => item !== product_name);
    });
  }
  addAvailable(product_name) {
    const available = this.getAvailableCopy();
    available.push(product_name);
    this.setAvailableProducts(() => {
      return available;
    });
  }

  add(product_name, amount) {
    if (!product_name || !amount) return;
    this.setCartItems(() => {
      //add to cart items's name list
      const cartItems = this.getCartItemsCopy();
      cartItems.push(product_name);
      return cartItems;
    });

    this.setCart(() => {
      // add to cart
      const cart = this.getCartCopy();
      cart[product_name] = {
        price: available[product_name].price * amount,
        amount: amount,
      };
      return cart;
    });

    this.removeAvailable(product_name);
  }

  remove(product_name) {
    // remove from cart items's name list
    this.setCartItems(() => {
      const cartItems = this.cartItems.filter((item) => item !== product_name);
      return cartItems;
    });

    //remove from cart
    this.setCart(() => {
      const cart = this.getCartCopy();
      delete cart[product_name];
      return cart;
    });
    this.addAvailable(product_name);
  }

  getCartCopy() {
    return { ...this.cart };
  }
  getCartItemsCopy() {
    return [...this.cartItems];
  }
  getAvailableCopy() {
    return [...this.availableProducts];
  }
}

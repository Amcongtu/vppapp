  import React, { createContext, useEffect, useState } from 'react';

  export const cartContext = createContext();


  function CartContext({ children }) {
    const [cartItems, setCartItems] = useState(() => {
      const storedCartItems = localStorage.getItem("cartItems");
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item, quantity) => {
      // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
      const existingCartItem = cartItems.find((cartItem) => cartItem._id === item._id);

      if (existingCartItem) {
        // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng sản phẩm
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
          )
        );
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm vào giỏ hàng
        setCartItems([...cartItems, { ...item, quantity }]);
      }
    };

    const removeFromCart = (item) => {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    };

    const updateCartItemQuantity = (item, quantity) =>  {
      
      setCartItems(
        cartItems.map((cartItem) => (cartItem._id === item._id ? { ...cartItem, quantity } : cartItem))
      );
    };

    const getTotalItems = () => {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.DONGIA * item.quantity, 0);
    };

    const removeItemIfQuantityIsZero = (item) => {
      if (item.quantity === 0) {
        setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
      }
    };

    useEffect(() => {
      cartItems.forEach((item) => {
        removeItemIfQuantityIsZero(item);
      });
      
    }, [cartItems]);

    return (
      <div>
        <cartContext.Provider
          value={{ addToCart, removeFromCart, updateCartItemQuantity, getTotalItems, getTotalPrice}}
        >
          {children}
        </cartContext.Provider>
      </div>
    );
  }

  export default CartContext;
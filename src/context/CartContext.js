import React, { createContext, useEffect, useState } from 'react';

export const cartContext = createContext();


function CartContext({children}) {
    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
  
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem('cart'));
      if (storedCart && storedCart.length!==0) {
        setCart(storedCart );
        let quantity = 0;
        storedCart.forEach(item => {
          quantity += item.quantity;
        });
        setCartQuantity(quantity);
      }
    }, []);
    const checkProductQuantity = (productId) => {
      const itemIndex = cart.findIndex((item) => item.id === productId);
      if (itemIndex >= 0) {
        const updatedCart = [...cart];
        const quantity = updatedCart[itemIndex].quantity;
        if (quantity === 0) {
          updatedCart.splice(itemIndex, 1);
          setCart(updatedCart);
          let newQuantity = 0;
          updatedCart.forEach((item) => {
            newQuantity += item.quantity;
          });
          setCartQuantity(newQuantity);
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          localStorage.setItem('cartQuantity', JSON.stringify(newQuantity));
        }
      }
    };

    const addToCart = (product, quantity) => {
        const itemIndex = cart.findIndex(item => item.id === product.id);
        if (itemIndex >= 0) {
          const updatedCart = [...cart];
          updatedCart[itemIndex].quantity += quantity;
          setCart(updatedCart);
        } else {
          setCart([...cart, { ...product, quantity }]);
        }
        setCartQuantity(prev => prev + quantity);
        localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity + quantity));
      };

      const removeFromCart = (product, quantity) => {
        const itemIndex = cart.findIndex(item => item.id === product.id);
        if (itemIndex >= 0) {
          const updatedCart = [...cart];
          if (updatedCart[itemIndex].quantity > quantity) {
            updatedCart[itemIndex].quantity -= quantity;
            setCart(updatedCart);
          } else {
            updatedCart.splice(itemIndex, 1);
            setCart(updatedCart);
          }
          setCartQuantity(prev => prev - quantity);
          localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity - quantity));
        }
      };
      const updateCart = (productId, quantity) => {
        
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex >= 0) {
          const updatedCart = [...cart];
          updatedCart[itemIndex].quantity = quantity;
          setCart(updatedCart);
          let newQuantity = 0;
          updatedCart.forEach(item => {
            newQuantity += item.quantity;
          });
          setCartQuantity(newQuantity);
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          localStorage.setItem('cartQuantity', JSON.stringify(newQuantity));
          
        }
      };
      const clearCart = () => {
        setCart([]);
        setCartQuantity(0);
        localStorage.setItem('cartQuantity', JSON.stringify(0));
      };

      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
    
    return (
        <div>
            <cartContext.Provider value={{cart, setCart,cartQuantity, addToCart, removeFromCart, clearCart,updateCart,checkProductQuantity}}>
                {children}
            </cartContext.Provider>
        </div>
    );
}

export default CartContext;

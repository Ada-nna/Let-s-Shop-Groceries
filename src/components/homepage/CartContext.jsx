import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    console.log("Adding to cart:", product, "with quantity:", quantity);

    const updatedCart = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + quantity };
      }
      return item;
    });

    if (!cartItems.some((item) => item.id === product.id)) {
      updatedCart.push({ ...product, quantity });
    }

    setCartItems(updatedCart);
  };

  function calculateTotal(format = false) {
    console.log("Calculating total for items:", cartItems);
    const total = cartItems.reduce((acc, item) => {
      console.log("Item price:", item.selling_price, "Quantity:", item.quantity);
      return acc + item.selling_price * item.quantity;
    }, 0);
    console.log("Calculated total:", total);
    if (format) {
      return total.toFixed(2);
    }
    return total;
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        calculateTotal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const UseCartContext = () => {
  const context = useContext(Context);
  return context;
};

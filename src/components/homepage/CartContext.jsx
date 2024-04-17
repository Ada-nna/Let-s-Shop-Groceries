import React, { createContext, useContext, useState } from "react";

const Context = createContext()

export const CartProvider = ({children}) =>{
  const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
      setCartItems((currentItems) => [...currentItems, product]);
    };
  
  return(
    <Context.Provider value={{
      cartItems,
      setCartItems,
      addToCart
    }}>{children}</Context.Provider>
  )
}

export const UseCartContext = () => {
  const context = useContext(Context)
  return context;
}



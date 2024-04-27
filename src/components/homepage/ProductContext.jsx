import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [count, setCount] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [pricePerQty, setPricePerQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (selectedProductId !== null) {
      const product = allProducts.find((p) => p.id === selectedProductId);
      if (product) {
        setPricePerQty(product.selling_price);
      }
    }
  }, [selectedProductId, allProducts]);

  useEffect(() => {
    setTotalPrice(pricePerQty * count);
  }, [pricePerQty, count]);

  const handleClose = () => {
    setOpen(false);
    setSelectedProductId(null);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  const deleteItems = (productId) => {
    setAllProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );
  };

  const clearCart = () => void console.log(cartItems);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://backendgrocery.000webhostapp.com/api/v1/products`
        );
        const data = await response.json();
        console.log("API Response:", data);

        if (Array.isArray(data.data)) {
          setAllProducts(data.data);
        } else {
          console.error("Expected data to be an array, received:", data);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setAllProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        open,
        setOpen,
        handleClose,
        selectedProductId,
        setSelectedProductId,
        allProducts,
        count,
        handleIncrement,
        handleDecrement,
        deleteItems,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { UseCartContext } from "./CartContext";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalComponent from "../modal/Modal";

const PopularProducts = () => {
  const {
    open,
    handleClose,
    selectedProductId,
    allProducts,
    count,
    handleIncrement,
    handleDecrement,
    setOpen,
    setSelectedProductId,
    totalPrice,
  } = useContext(ProductContext);

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const selectedProduct = allProducts.find(
    (item) => item.id === selectedProductId
  );

  const handleOpen = (product) => {
    if (!isLoggedIn) {
      toast.warn("Please log in to add items to your cart.");
      return;
    } else {
      setOpen(true);
      setSelectedProductId(product.id);
    }
  };

  const { addToCart } = UseCartContext();

  const handleAddToCart = (product) => {
    addToCart(product, count);
    toast.success("Item added successfully", { autoClose: 1000 });
  };

  return (
    <div className="mt-[3rem] lg:mt-[5rem]">
      <h1 className="mb-[1rem] lg:mb-[1.5rem] text-[18px] lg:text-[24px] font-bold text-[#198057] mx-3 lg:mx-0">
        Our Popular Products
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[0.7rem] lg:gap-[5rem] lg:gap-y-[1.2rem] 2xl:gap-y-[1.3rem] max-w-[94%] lg:max-w-[95%] 2xl:max-w-[94%] mx-auto lg:mx-0 ">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="border min-h-[16rem] lg:min-h-[24rem] w-full lg:w-[25rem] p-[1rem] lg:p-[3rem] bg-[#ffffff] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex flex-col justify-center"
          >
            <div className="flex items-center justify-center">
              <img
                src={`https://backendgrocery.000webhostapp.com/${product.images}`}
                alt={product.name}
                className="max-w-[5rem] lg:max-w-[8.5rem] h-auto object-cover"
              />
            </div>
            <div className="mt-8 space-y-3">
              <h1 className="font-bold text-center text-[14px] lg:text-[18px]">
                {product.name}
              </h1>
              <h1 className="font-bold text-center text-[14px] lg:text-[18px]">
                ${product.selling_price}{" "}
                <span className="line-through text-gray-500">
                  ${product.mrp}
                </span>
              </h1>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => handleOpen(product)}
                  className="text-[#198057] text-[12px] lg:text-[16px] border px-3 py-2 font-semibold"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ModalComponent
          open={open}
          handleClose={handleClose}
          selectedProduct={selectedProduct}
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          totalPrice={totalPrice}
          handleAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default PopularProducts;

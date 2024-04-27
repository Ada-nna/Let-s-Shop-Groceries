import React, { useContext } from "react";
import Navbar from "../homepage/Navbar";
import FruitImg from "../../assets/images/orange.png";
import ModalComponent from "../modal/Modal";
import { ProductContext } from "../homepage/ProductContext";
import { UseCartContext } from "../homepage/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Fruits = () => {
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

  const handleOpen = (product) => {
    setOpen(true);
    setSelectedProductId(product.id);
  };

  const { addToCart } = UseCartContext();

  const handleAddToCart = (product) => {
    addToCart(product, count);
    toast.success("Item added successfully", { autoClose: 1000 });
  };

  const FruitProducts = allProducts.filter(
    (product) => product.category.name === "Fruits"
  );

  const selectedProduct = FruitProducts.find(
    (item) => item.id === selectedProductId
  );

  return (
    <div>
      <Navbar />
      <div className="bg-[#198057] border h-[4rem] mt-[3rem] flex items-center justify-center gap-x-4">
        <img src={FruitImg} alt="Fruit Image" className="w-[3.5rem]" />
        <h1 className="text-[#ffffff] text-[20px] lg:text-[24px] font-bold">
          Our Fruit Products
        </h1>
      </div>
      <div className="container mx-auto mt-8">
        {/* THE CARDS START HERE */}
        <>
          <div className="mt-[3.5rem]">
            <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[0.7rem] lg:gap-[5rem] 2xl:gap-y-[1.3rem] max-w-[100%] lg:max-w-[95%] 2xl:max-w-[94%] mx-auto lg:mx-0 lg:gap-x-[3.5rem] gap-y-4 lg:gap-y-14 px-5">
              {FruitProducts.length > 0 ? (
                FruitProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border min-h-[16rem] lg:min-h-[24rem] w-[100%] max-w-[100%] lg:w-[24rem] p-[1rem] lg:p-[3rem] bg-[#ffffff] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex flex-col justify-center"
                  >
                    <div className="flex items-center justify-center">
                      <img
                        src={`https://backendgrocery.000webhostapp.com/${product.images}`}
                        alt={product.name}
                        className="w-[5rem] lg:w-[8.5rem] h-auto object-cover"
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
                ))
              ) : (
                <p>No fruit is available</p>
              )}
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
        </>
      </div>
    </div>
  );
};

export default Fruits;

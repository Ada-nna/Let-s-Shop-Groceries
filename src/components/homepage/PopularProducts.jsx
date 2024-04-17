import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { UseCartContext } from "./CartContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

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

  const selectedProduct = allProducts.find(
    (item) => item.id === selectedProductId
  );

  const handleOpen = (product) => {
    setOpen(true);
    setSelectedProductId(product.id);
  };

  const { addToCart } = UseCartContext();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Product added to cart");
  };

  return (
    <div className="mt-[3rem] lg:mt-[5rem]">
      <h1 className="mb-[1rem] lg:mb-[1.5rem] text-[18px] lg:text-[24px] font-bold text-[#198057]">
        Our Popular Products
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[3.5rem] gap-y-4 ">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="border min-h-[16rem] lg:min-h-[24rem] w-[10.5rem] lg:w-[24rem] p-[1rem] lg:p-[3rem] bg-[#ffffff] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex flex-col justify-center"
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
        ))}
      </div>

      {/* 🔔🔔🔔  MODAL STARTS HERE!  🔔🔔🔔 */}

      {selectedProduct && (
        <Modal
          open={open}
          onClose={handleClose}
          ariaLabelledby="modal-modal-title"
          ariaDescribedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex justify-end mb-3">
              <button className="border-none" onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="m9.17 14.83 5.66-5.66M14.83 14.83 9.17 9.17M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <div className="w-[300px] h-[300px] flex items-center justify-center p-2 bg-slate-200">
                <img
                  src={`https://backendgrocery.000webhostapp.com/${selectedProduct.images}`}
                  alt={selectedProduct.name}
                  style={{ width: 300 }}
                />
              </div>

              <div className="border h-[300px] w-[300px]">
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{
                    fontWeight: "800",
                    fontSize: "24px",
                    color: "black",
                  }}
                >
                  {selectedProduct.name}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ fontSize: "14", color: "#6B7280" }}
                >
                  {selectedProduct.description}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ fontWeight: 800, fontSize: "30px", color: "#000" }}
                >
                  ${selectedProduct.selling_price} &nbsp;{" "}
                  <span className="text-[30px] line-through text-[#6B7280]">
                    ${selectedProduct.mrp}
                  </span>
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  Quantity ({selectedProduct.quantity})
                </Typography>

                {/* INCREMENT AND DECREMENT MODAL SECTION.... */}

                <div className="flex items-center gap-x-[1rem]">
                  <button className="border flex items-center justify-between w-[7rem] p-2 text-[18px]">
                    <button onClick={handleDecrement}>-</button>
                    <span>{count}</span>
                    <button onClick={handleIncrement}>+</button>
                  </button>
                  <span className="font-extrabold text-[30px]">
                    = ${totalPrice}
                  </span>
                </div>

                {/* MODAL ADD TO CART BTN */}

                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="text-[#ffffff] bg-[#198057] border-none text-[12px] lg:text-[16px] px-3 py-2 font-semibold"
                  >
                    Add to cart
                  </button>
                </div>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  Category:{" "}
                  <span className="text-[16px] font-medium">
                    {selectedProduct.category.name}
                  </span>
                </Typography>
              </div>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default PopularProducts;

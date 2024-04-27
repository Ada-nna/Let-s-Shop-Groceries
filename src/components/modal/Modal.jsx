import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "95%",
    sm: "95%",
    md: 730,
  },
  height: {
    xs: "95%",
    sm: "95%",
    md: 420,
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: {
    xs: 5,
    sm: 5,
    md: 2,
  }
};

const ModalComponent = ({
  open,
  handleClose,
  selectedProduct,
  count,
  handleIncrement,
  handleDecrement,
  totalPrice,
  handleAddToCart,
}) => (
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
            width="22"
            height="22"
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
      <div className="lg:flex lg:items-center justify-center gap-[20px]">
        <div className="lg:w-[300px] h-[280px] lg:h-[325px] flex items-center justify-center p-2 bg-slate-200">
          <img
            src={`https://backendgrocery.000webhostapp.com/${selectedProduct.images}`}
            alt={selectedProduct.name}
            style={{ width: 200 }}
          />
        </div>

        <div className="lg:h-[325px] lg:w-[300px] mt-[1rem] lg:mt-0 flex flex-col items-center">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              fontWeight: "700",
              fontSize: "18px",
              color: "black",
              marginBottom: 0,
              padding: 0,
            }}
          >
            {selectedProduct.name}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 0.5 }}
            style={{ fontSize: "14", color: "#6B7280" }}
          >
            {selectedProduct.description}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ fontWeight: 800, fontSize: "24px", color: "#000" }}
          >
            ${selectedProduct.selling_price} &nbsp;{" "}
            <span className="text-[24px] line-through text-[#6B7280]">
              ${selectedProduct.mrp}
            </span>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 0.5 }}
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "black",
            }}
          >
            Quantity (20g)
          </Typography>{" "}
          <br />
          {/* INCREMENT AND DECREMENT MODAL SECTION.... */}
          <div className="flex items-center gap-x-[1rem] ">
            <button className="border flex items-center justify-between w-[7rem] p-2 text-[18px]">
              <button onClick={handleDecrement}>-</button>
              <span>{count}</span>
              <button onClick={handleIncrement}>+</button>
            </button>
            <span className="font-extrabold text-[24px]">
              = ${totalPrice.toFixed(2)}
            </span>
          </div>{" "}
          <br />
          {/* MODAL ADD TO CART BTN */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => handleAddToCart(selectedProduct)}
              className="text-[#ffffff] bg-[#198057] border-none outline-none text-[12px] lg:text-[16px] px-[1.2rem] py-3 font-semibold"
            >
              Add to cart
            </button>
          </div>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{
              fontSize: "17px",
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
);

export default ModalComponent;

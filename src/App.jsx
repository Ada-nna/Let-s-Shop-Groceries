import { RouterProvider } from "react-router-dom";
import router from "./router";
import { CartProvider } from "./components/homepage/CartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <CartProvider>
      <ToastContainer />
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;

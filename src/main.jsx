import React from "react";
import ReactDOM from "react-dom/client";
import { ProductProvider } from "./components/homepage/ProductContext.jsx";
import App from "./App.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
        <App />
    </ProductProvider>
  </React.StrictMode>
);

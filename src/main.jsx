import React from "react";
import ReactDOM from "react-dom/client";
import { ProductProvider } from "./components/homepage/ProductContext.jsx";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./components/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ProductProvider>
  </React.StrictMode>
);

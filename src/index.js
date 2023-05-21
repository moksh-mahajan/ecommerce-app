import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
          <CategoriesProvider>
            <App />
          </CategoriesProvider>
        </WishlistProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

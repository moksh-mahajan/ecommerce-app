import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { FiltersProvider } from "./contexts/FiltersContext";
import AuthProvider from "./contexts/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
          <CategoriesProvider>
            <FiltersProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </FiltersProvider>
          </CategoriesProvider>
        </WishlistProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { FiltersProvider } from "./contexts/FiltersContext";
import AuthProvider from "./contexts/AuthContext";
import { AddressProvider } from "./contexts/AddressContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
          <CategoriesProvider>
            <FiltersProvider>
              <AuthProvider>
                <AddressProvider>
                  <App />
                </AddressProvider>
              </AuthProvider>
            </FiltersProvider>
          </CategoriesProvider>
        </WishlistProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
);

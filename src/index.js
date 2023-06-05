import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import {
  CartProvider,
  WishlistProvider,
  CategoriesProvider,
  FiltersProvider,
  AuthProvider,
  AddressProvider,
} from "./contexts";

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
  </React.StrictMode>
);

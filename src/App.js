import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Navbar, RequiresAuth } from "./components";
import {
  Cart,
  Checkout,
  Home,
  Login,
  OrderSummary,
  ProductDetails,
  Products,
  WishList,
} from "./pages";
import {
  AuthContext,
  CategoriesContext,
} from "./contexts";

function App() {
  const {
    state: { encodedToken },
    handleCheckAuthStatus,
  } = useContext(AuthContext);
  // const { state, dispatch } = useContext(CartContext);
  // const { state: wishlistState } = useContext(WishlistContext);

  const { dispatch: categoriesDispatch } = useContext(CategoriesContext);

  // const loadCart = async () => {
  //   try {
  //     const jwtToken =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
  //     const headers = new Headers();
  //     headers.append("Authorization", "Bearer " + jwtToken);
  //     const response = await fetch("/api/user/cart", { headers });
  //     if (response.status === 200) {
  //       const { cart } = await response.json();
  //       dispatch({ type: "LOAD_CART", payload: cart });
  //     }
  //   } catch (e) {
  //     console.error(e);
  //     return state;
  //   }
  // };

  const loadCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      if (response.status === 200) {
        const categories = (await response.json()).categories;
        categoriesDispatch({ type: "LOAD_CATEGORIES", payload: categories });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleCheckAuthStatus();
    //  loadCart();
    loadCategories();
  }, []);

  const isLoggedIn = encodedToken.length !== 0;

  return (
    <div>
      <Navbar />
      <ToastContainer
        style={{ fontSize: "1.4rem" }}
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/orderSummary" element={<OrderSummary />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishList />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

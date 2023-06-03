import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { FiltersProvider } from "./contexts/FiltersContext";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import WishList from "./pages/WishList";
import { useContext, useEffect } from "react";
import { CartContext } from "./contexts/CartContext";
import { WishlistContext } from "./contexts/WishlistContext";
import Home from "./pages/Home";
import { CategoriesContext } from "./contexts/CategoriesContext";
import { Login } from "./pages/Login";
import { AuthContext } from "./contexts/AuthContext";
import RequiresAuth from "./components/RequiresAuth";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./pages/Checkout";

function App() {
  const {
    state: { encodedToken },
    handleCheckAuthStatus,
    handleLogout,
  } = useContext(AuthContext);
  const { state, dispatch } = useContext(CartContext);
  const { state: wishlistState } = useContext(WishlistContext);

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
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
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
      </Routes>
    </div>
  );
}

export default App;

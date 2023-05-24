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

function App() {
  const { state, dispatch } = useContext(CartContext);
  const { state: wishlistState } = useContext(WishlistContext);

  const { dispatch: categoriesDispatch } = useContext(CategoriesContext);

  const loadCart = async () => {
    try {
      const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + jwtToken);
      const response = await fetch("/api/user/cart", { headers });
      if (response.status === 200) {
        const { cart } = await response.json();
        dispatch({ type: "LOAD_CART", payload: cart });
      }
    } catch (e) {
      console.error(e);
      return state;
    }
  };

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
    loadCart();
    loadCategories();
  }, []);

  return (
    <div>
      <div>
        <Link to="/">Home</Link> || <Link to="/login">Login</Link> ||{" "}
        <Link to="/cart">Cart {state.cartItems.length}</Link> ||{" "}
        <Link to="/wishlist">{`Wishlist(${wishlistState.items.length})`}</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

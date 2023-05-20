import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { FiltersProvider } from "./contexts/FiltersContext";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import WishList from "./pages/WishList";
import { useContext, useEffect } from "react";
import { CartContext } from "./contexts/CartContext";

function App() {
  const { state, dispatch } = useContext(CartContext);

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

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <div>
      <div>
        {state.isLoading && <div>Loading Cart...</div>}
        {state.isLoading}
        <Link to="/wishlist">Wishlist</Link> ||{" "}
        <Link to="/cart">{`Cart(${state.cartItems.length})`}</Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <FiltersProvider>
              <Products />
            </FiltersProvider>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;

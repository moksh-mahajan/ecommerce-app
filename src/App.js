import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { FiltersProvider } from "./contexts/FiltersContext";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import WishList from "./pages/WishList";

function App() {
  return (
    <div>
      <div>
        <Link to="/wishlist">Wishlist</Link> || <Link to="/cart">Cart</Link>
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

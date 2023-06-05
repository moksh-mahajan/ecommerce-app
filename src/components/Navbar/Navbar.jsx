import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";

import "./Navbar.css";
import { FiltersContext } from "../../contexts/FiltersContext";

export default function Navbar() {
  let timer = useRef();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timer.current);
    console.log(timer);
    timer.current = setTimeout(() => {
      dispatch({ type: "SEARCH_TEXT_CHANGED", payload: input });
      if (input.trim().length > 0) {
        navigate("/products");
      }
    }, 500);
  }, [input]);

  const {
    state: { encodedToken },
    handleLogout,
  } = useContext(AuthContext);
  const { state } = useContext(CartContext);
  const { dispatch } = useContext(FiltersContext);
  const { state: wishlistState } = useContext(WishlistContext);

  const isLoggedIn = encodedToken.length !== 0;

  return (
    <nav>
      <div>
        <NavLink
          className={({ isActive }) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          to="/"
        >
          Home
        </NavLink>{" "}
        <NavLink
          className={({ isActive }) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          to="/products"
        >
          Game Store
        </NavLink>
      </div>
      <input
        className="search-input"
        placeholder="search"
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        <NavLink
          className={({ isActive }) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          to={isLoggedIn ? null : "/login"}
          onClick={isLoggedIn ? handleLogout : null}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </NavLink>{" "}
        <NavLink
          className={({ isActive }) =>
            "nav-link nav-icon" + (!isActive ? " unselected" : "")
          }
          to="/cart"
        >
          <i className="fa-solid fa-cart-shopping"></i>{" "}
          <span>{state.cartItems.length}</span>
        </NavLink>{" "}
        <NavLink
          className={({ isActive }) =>
            "nav-link nav-icon" + (!isActive ? " unselected" : "")
          }
          to="/wishlist"
        >
          {" "}
          <i className="fa-solid fa-heart"></i>
          <span>{wishlistState.items.length}</span>
        </NavLink>
      </div>
    </nav>
  );
}

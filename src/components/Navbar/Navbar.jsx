import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";

import "./Navbar.css";

export default function Navbar() {
  const {
    state: { encodedToken },
    handleLogout,
  } = useContext(AuthContext);
  const { state } = useContext(CartContext);
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
      <input className="search-input" placeholder="search" />

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
          <span>{1}</span>
        </NavLink>
      </div>
    </nav>
  );
}

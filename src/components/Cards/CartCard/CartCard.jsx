import { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext, FiltersContext, WishlistContext } from "../../../contexts";
import "./CartCard.css";

export default function CartCard({ item }) {
  const { thumbnailUrl, name, price, qty } = item;
  const { dispatch } = useContext(CartContext);
  const { dispatch: wishlistDispatch } = useContext(WishlistContext);
  const { state } = useContext(FiltersContext);

  const moveToWishList = async (productId) => {
    removeProductFromCart(productId);

    const product = state.products.find(({ _id }) => _id === productId);

    try {
      const jwtToken = localStorage.getItem("loginToken") ?? "";
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + jwtToken);
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers,
        body: JSON.stringify({ product }),
      });

      if (response.status === 201) {
        wishlistDispatch({
          type: "REFRESH_WISHLIST",
          payload: (await response.json()).wishlist,
        });
        toast.success("Moved to Wishlist!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const updateProductCount = async (productId, type) => {
    try {
      const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + jwtToken);
      const response = await fetch("/api/user/cart/" + productId, {
        method: "POST",
        headers,
        body: JSON.stringify({ action: { type } }),
      });

      dispatch({ type: "REFRESH_CART", payload: (await response.json()).cart });
    } catch (e) {
      console.error(e);
    }
  };

  const removeProductFromCart = async (productId) => {
    try {
      const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + jwtToken);
      const response = await fetch("/api/user/cart/" + productId, {
        method: "DELETE",
        headers,
      });

      dispatch({ type: "REFRESH_CART", payload: (await response.json()).cart });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="cart-card">
      <img src={thumbnailUrl} alt={name} width="200" height="250" />
      <div className="cart-card-details">
        <h4 className="cart-card-title">{name}</h4>
        <h5>₹{price}</h5>
        <div className="cart-card-quantity">
          <span>Quantity: </span>{" "}
          <button
            className="cart-card-quantity-btn"
            disabled={qty === 1}
            onClick={() => updateProductCount(item._id, "decrement")}
          >
            -
          </button>
          <label>{qty}</label>
          <button
            className="cart-card-quantity-btn"
            onClick={() => updateProductCount(item._id, "increment")}
          >
            +
          </button>
        </div>
        <div className="cart-card-btn-container">
          <button
            onClick={() => moveToWishList(item._id)}
            className="cart-card-btn cart-card-wishlist-btn"
          >
            Move to Wishlist
          </button>
          <button
            className="cart-card-btn cart-card-remove-btn"
            onClick={() => removeProductFromCart(item._id)}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
}

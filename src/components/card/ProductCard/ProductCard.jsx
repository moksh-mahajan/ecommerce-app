import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import { WishlistContext } from "../../../contexts/WishlistContext";
import { AuthContext } from "../../../contexts/AuthContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { state, dispatch } = useContext(CartContext);
  const { state: wishlistState, dispatch: wishlistDispatch } =
    useContext(WishlistContext);

  const {
    state: { encodedToken },
  } = useContext(AuthContext);

  const isLoggedIn = encodedToken.length !== 0;
  const navigate = useNavigate();

  const addProductToCart = async (product) => {
    try {
      const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + jwtToken);
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers,
        body: JSON.stringify({ product }),
      });

      if (response.status === 201) {
        dispatch({
          type: "REFRESH_CART",
          payload: (await response.json()).cart,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addProductToWishlist = async (product) => {
    try {
      const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
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
      }
    } catch (e) {
      console.error(e);
    }
  };

  const removeProductFromWishlist = async (productId) => {
    try {
      const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + jwtToken);
      const response = await fetch("/api/user/wishlist/" + productId, {
        method: "DELETE",
        headers,
      });
      wishlistDispatch({
        type: "REFRESH_WISHLIST",
        payload: (await response.json()).wishlist,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const isInCart = state.cartItems.some((item) => item.id === product.id);
  const isInWishlist = wishlistState.items.some(
    (item) => item.id === product.id
  );
  return (
    <div className="product-card" key={product.id}>
      <img
        src={product.thumbnailUrl}
        alt={product.name}
        width="200"
        height="250"
      />
      <div className="product-description">
        <h5>{product.name}</h5>
        <p>{`₹${product.price}`}</p>
        <div className="product-btn-container">
          <button
            className="product-btn-cart"
            disabled={product._id === state.loadingProductId}
            onClick={() =>
              isLoggedIn ? addProductToCart(product) : navigate("/login")
            }
          >
            {isInCart ? "Go" : "Add"} to Cart
          </button>

          <button
            className="product-btn-wishlist"
            onClick={() =>
              isLoggedIn
                ? isInWishlist
                  ? removeProductFromWishlist(product._id)
                  : addProductToWishlist(product)
                : navigate("/login")
            }
          >
            {isInWishlist ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i class="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

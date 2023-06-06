import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, CartContext, WishlistContext } from "../../../contexts";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { state, addProductToCart } = useContext(CartContext);
  const {
    state: wishlistState,
    removeProductFromWishlist,
    addProductToWishlist,
  } = useContext(WishlistContext);

  const {
    state: { encodedToken },
  } = useContext(AuthContext);

  const isLoggedIn = encodedToken.length !== 0;
  const navigate = useNavigate();

  const isInCart = state.cartItems.some((item) => item.id === product.id);
  const isInWishlist = wishlistState.items.some(
    (item) => item.id === product.id
  );
  return (
    <div className="product-card" key={product.id}>
      <Link
        style={{ textDecoration: "none" }}
        to={`/productDetails/${product._id}`}
      >
        <img
          className="product-card-img"
          src={product.thumbnailUrl}
          alt={product.name}
          width="200"
          height="250"
        />
      </Link>
      <div className="product-description">
        <h5>{product.name}</h5>
        <p>{`₹${product.price}`}</p>
        <div className="product-btn-container">
          <button
            className="product-btn-cart"
            disabled={product._id === state.loadingProductId}
            onClick={() =>
              isLoggedIn
                ? isInCart
                  ? navigate("/cart")
                  : addProductToCart(product)
                : navigate("/login")
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

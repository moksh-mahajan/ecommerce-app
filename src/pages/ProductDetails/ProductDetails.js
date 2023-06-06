import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import { AuthContext, CartContext, WishlistContext } from "../../contexts";

export default function ProductDetails() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { addProductToCart, state: cartState } = useContext(CartContext);
  const {
    addProductToWishlist,
    removeProductFromWishlist,
    state: wishlistState,
  } = useContext(WishlistContext);

  const navigate = useNavigate();

  const {
    state: { encodedToken },
  } = useContext(AuthContext);
  const isLoggedIn = encodedToken.length !== 0;

  const getProduct = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`);
      if (response.status === 200) {
        const productDetails = (await response.json()).product;
        console.log(productDetails);
        setProduct(productDetails);
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const isInCart = cartState.cartItems.some((item) => item._id === productId);
  const isInWishlist = wishlistState.items.some(
    (item) => item._id === productId
  );

  return isLoading ? (
    <>Loading...</>
  ) : (
    <div className="product-details-card">
      <div className="product-details-card-img-container">
        <img
          src={product?.thumbnailUrl}
          alt={product?.name}
          width="200"
          height="250"
        />
      </div>
      <div className="product-details-card-details">
        <h4 className="product-details-card-title">{product?.name}</h4>
        <div className="product-details-card-title-heading">
          <h5>₹{product?.price}</h5>
          <h6>{product?.rating} ⭐️</h6>
        </div>
        <div className="product-details-card-description">
          <h4>Product details</h4>
          <p>{product?.description}</p>
        </div>
        <div className="product-details-card-container">
          <button
            onClick={() =>
              isLoggedIn
                ? isInCart
                  ? navigate("/cart")
                  : addProductToCart(product)
                : navigate("/login")
            }
            className="product-details-card-btn cta-btn"
          >
            {isInCart ? "Go" : "Add"} to Cart
          </button>
          <button
            className="product-details-card-btn secondary-btn"
            onClick={() =>
              isLoggedIn
                ? isInWishlist
                  ? removeProductFromWishlist(product._id)
                  : addProductToWishlist(product)
                : navigate("/login")
            }
          >
            {isInWishlist ? "De-Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

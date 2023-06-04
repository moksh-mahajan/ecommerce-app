import { useContext } from "react";
import { WishlistContext } from "../../../contexts/WishlistContext";
import "./WishlistCard.css";
import { toast } from "react-toastify";

export default function WishlistItemCard({ item }) {
    const { thumbnailUrl, name, price } = item;
    const { state: wishlistState, dispatch: wishlistDispatch } =
      useContext(WishlistContext);
    const isInWishlist = wishlistState.items.some(
      (item) => item.id === item.id
    );
  
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
      toast.success("Removed item from Cart!");
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <div className="wishlist-card">
          <img src={thumbnailUrl} alt={name} width="200" height="250" />
        <div className="wishlist-description">
        <h5>{name}</h5>
          <p>₹{price}</p>
          <div className="wishlist-btn-container">
          <button className="wishlist-btn-cart">Move to Cart</button>

          <button
          className="wishlist-btn-remove"
            onClick={() =>
              isInWishlist
                ? removeProductFromWishlist(item._id)
                : addProductToWishlist(item)
            }
          >
            {isInWishlist ? <i class="fa-solid fa-trash-can"></i> : "Add to Wishlist"}
          </button>
  
          </div>
        </div>
      </div>
    );
  }
import { createContext, useReducer } from "react";
import { toast } from "react-toastify";

export const WishlistContext = createContext();

const initialState = {
  isLoading: true,
  items: [],
};

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_WISHLIST":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

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
        dispatch({
          type: "REFRESH_WISHLIST",
          payload: (await response.json()).wishlist,
        });
        toast.success("Added to Wishlist!");
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
      dispatch({
        type: "REFRESH_WISHLIST",
        payload: (await response.json()).wishlist,
      });
      toast.success("Removed item from Wishlist!");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        state,
        dispatch,
        addProductToWishlist,
        removeProductFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

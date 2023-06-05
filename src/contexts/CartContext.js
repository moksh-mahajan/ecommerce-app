import { createContext, useReducer } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const initialState = {
  isLoading: true,
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_CART":
      return {
        ...state,
        cartItems: action.payload,
        loadingProductId: null,
      };

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

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
        toast.success("Added to Cart!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CartContext.Provider value={{ state, dispatch, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
}

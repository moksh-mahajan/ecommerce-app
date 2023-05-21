import { createContext, useReducer } from "react";

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

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

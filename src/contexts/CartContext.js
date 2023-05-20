import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  isLoading: true,
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CART":
      return { ...state, isLoading: false, cartItems: action.payload };

    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };

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

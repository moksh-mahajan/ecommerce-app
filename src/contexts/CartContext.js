import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  isLoading: true,
  cartItems: [],
  loadingProductId: null,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CART":
      return { ...state, isLoading: false, cartItems: action.payload };

    case "ADDING_PRODUCT":
      return { ...state, addingProductId: action.payload };

    case "ADD_TO_CART":
      console.log("payload: ", action.payload);
      return {
        ...state,
        cartItems: action.payload,
        loadingProductId: null,
      };

    case "REMOVING_PRODUCT":
      return { ...state, removingProductId: action.payload };

    case "REMOVED_FROM_CART":
      const productId = action.payload;
      return {
        ...state,
        cartItems: [...state.cartItems].filter((item) => item.id !== productId),
        loadingProductId: null,
      };

    case "QUANTITY_INCREMENTED":
      return {
        ...state,
        cartItems: [...state.cartItems].map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "QUANTITY_DECREMENTED":
      return {
        ...state,
        cartItems: [...state.cartItems].map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
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

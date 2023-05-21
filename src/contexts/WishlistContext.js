import { createContext, useReducer } from "react";

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

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

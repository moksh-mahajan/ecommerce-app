import { createContext, useReducer } from "react";

export const CategoriesContext = createContext();

const initialState = {
  isLoading: true,
  categories: [],
};

const categoriesReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CATEGORIES":
      return {
        isLoading: false,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export function CategoriesProvider({ children }) {
  const [state, dispatch] = useReducer(categoriesReducer, initialState);

  return (
    <CategoriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoriesContext.Provider>
  );
}

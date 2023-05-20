import { createContext, useReducer } from "react";

export const FiltersContext = createContext();

const initialFilterState = {
  sortOrder: null,
  selectedRating: null,
  selectedCategories: [],
  selectedPrice: null,
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_ORDER_CHANGED":
      return { ...state, sortOrder: action.payload };

    case "RATING_CHANGED":
      return { ...state, selectedRating: action.payload };

    case "CATEGORY_CLICKED":
      const selectedCategories = state.selectedCategories;
      const category = action.payload;
      const isCategoryPresent = selectedCategories.includes(category);

      return {
        ...state,
        selectedCategories: isCategoryPresent
          ? [...selectedCategories].filter((e) => e != category)
          : [...selectedCategories, category],
      };

    case "PRICE_CHANGED":
      return { ...state, selectedPrice: action.payload };

    case "CLEAR_FILTERS":
      return initialFilterState;

    default:
      return state;
  }
};

export function FiltersProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);

  return (
    <FiltersContext.Provider value={{ state, dispatch }}>
      {children}
    </FiltersContext.Provider>
  );
}



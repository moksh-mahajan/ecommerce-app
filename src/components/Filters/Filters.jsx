import { useContext } from "react";
import "./Filters.css";
import Radio from "../Radio";
import { CategoriesContext, FiltersContext } from "../../contexts";

export default function Filters() {
  return (
    <div className="filters-container">
      <Header />
      <CategorySelector />
      <PriceSlider />

      <RatingSelector />
      <SortOrderSelector />
    </div>
  );
}

function Header() {
  const { dispatch } = useContext(FiltersContext);

  return (
    <div className="filter-header">
      <h4>Filters</h4>
      <button onClick={() => dispatch({ type: "CLEAR_FILTERS" })}>
        Clear Filters
      </button>
    </div>
  );
}

function PriceSlider() {
  const { dispatch, selectedPrice } = useContext(FiltersContext);

  return (
    <div className="filter-section">
      <h4>Price</h4>
      <div>
        {" "}
        <label>2K</label> <label>3K</label> <label>4K</label> <label>5K</label>{" "}
      </div>
      <input
        type="range"
        min="2000"
        max="5000"
        step="1000"
        onChange={(e) =>
          dispatch({ type: "PRICE_CHANGED", payload: Number(e.target.value) })
        }
      />
    </div>
  );
}

function CategorySelector() {
  const {
    dispatch,
    state: { selectedCategories },
  } = useContext(FiltersContext);

  const { state: categoriesState } = useContext(CategoriesContext);
  const categories = categoriesState.categories;

  return (
    <div className="category-selector filter-section">
      <h4>Category</h4>

      {categories.map(({ categoryName, id }) => (
        <CheckBox
          key={id}
          label={categoryName}
          value={selectedCategories.includes(categoryName)}
          onChange={() =>
            dispatch({ type: "CATEGORY_CLICKED", payload: categoryName })
          }
        />
      ))}
    </div>
  );
}

function RatingSelector() {
  const {
    dispatch,
    state: { selectedRating },
  } = useContext(FiltersContext);

  return (
    <div className="filter-section">
      <h4>Rating</h4>
      <Radio
        label="4 Stars & above"
        value={selectedRating === 4}
        name="rating"
        onChange={() => dispatch({ type: "RATING_CHANGED", payload: 4 })}
      />
      <Radio
        label="3 Stars & above"
        value={selectedRating === 3}
        name="rating"
        onChange={() => dispatch({ type: "RATING_CHANGED", payload: 3 })}
      />
      <Radio
        label="2 Stars & above"
        value={selectedRating === 2}
        name="rating"
        onChange={() => dispatch({ type: "RATING_CHANGED", payload: 2 })}
      />
      <Radio
        label="1 Stars & above"
        value={selectedRating === 1}
        name="rating"
        onChange={() => dispatch({ type: "RATING_CHANGED", payload: 1 })}
      />
    </div>
  );
}

function SortOrderSelector() {
  const {
    dispatch,
    state: { sortOrder },
  } = useContext(FiltersContext);

  return (
    <div className="filter-section">
      <h4>Sort by</h4>
      <Radio
        label="Price - Low to High"
        value={sortOrder === "asc"}
        name="sortOrder"
        onChange={() =>
          dispatch({ type: "SORT_ORDER_CHANGED", payload: "asc" })
        }
      />
      <Radio
        label="Price - High to Low"
        value={sortOrder === "desc"}
        name="sortOrder"
        onChange={() =>
          dispatch({ type: "SORT_ORDER_CHANGED", payload: "desc" })
        }
      />
    </div>
  );
}

function CheckBox({ label, onChange, value }) {
  return (
    <div className="filter-option">
      <input type="checkbox" onChange={onChange} checked={value} />
      <label>{label}</label>
    </div>
  );
}

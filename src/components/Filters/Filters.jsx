import { useContext } from "react";
import "./Filters.css";
import { FiltersContext } from "../../contexts/FiltersContext";

export default function Filters() {
  return (
    <div className="filters-container">
      <Header />
      <PriceSlider />
      <CategorySelector />
      <RatingSelector />
      <SortOrderSelector />
    </div>
  );
}

function Header() {
  return (
    <div className="filter-header">
      <h4>Filters</h4>
      <button>Clear</button>
    </div>
  );
}

function PriceSlider() {
  return (
    <div>
      <h4>Price</h4>
      <div>
        {" "}
        <label>50</label> <label>150</label> <label>200</label>{" "}
      </div>
      <input type="range" min="50" max="200" step="50" />
    </div>
  );
}

function CategorySelector() {
  return (
    <div>
      <h4>Category</h4>
      <CheckBox label="Men Clothing" />
      <CheckBox label="Women Clothing" />
    </div>
  );
}

function RatingSelector() {
  return (
    <div>
      <h4>Rating</h4>
      <Radio label="4 Stars & above" />
      <Radio label="3 Stars & above" />
      <Radio label="2 Stars & above" />
      <Radio label="1 Stars & above" />
    </div>
  );
}

function SortOrderSelector() {
  const { dispatch } = useContext(FiltersContext);

  return (
    <div>
      <h4>Sort by</h4>
      <Radio
        label="Price - Low to High"
        name="sortOrder"
        onChange={() =>
          dispatch({ type: "SORT_ORDER_CHANGED", payload: "asc" })
        }
      />
      <Radio
        label="Price - High to Low"
        name="sortOrder"
        onChange={() =>
          dispatch({ type: "SORT_ORDER_CHANGED", payload: "desc" })
        }
      />
    </div>
  );
}

function CheckBox({ label }) {
  return (
    <div>
      <input type="checkbox" />
      <label>{label}</label>
    </div>
  );
}

function Radio({ label, name, onChange }) {
  return (
    <div>
      <input type="radio" name={name} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
}

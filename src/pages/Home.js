import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { Link } from "react-router-dom";
import { FiltersContext } from "../contexts/FiltersContext";

export default function Home() {
  const {
    state: { isLoading, categories },
  } = useContext(CategoriesContext);

  const { dispatch: filterDispatch } = useContext(FiltersContext);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ul style={{ display: "flex" }}>
      {categories.map((category) => (
        <Link
          to="/products"
          onClick={() =>
            filterDispatch({
              type: "CATEGORY_CLICKED",
              payload: category.categoryName,
            })
          }
        >
          <div key={category.id}>
            <img
              src={category.imageUrl}
              alt={category.categoryName}
              height={240}
            />
            <h5>{category.categoryName}</h5>
          </div>
        </Link>
      ))}
    </ul>
  );
}

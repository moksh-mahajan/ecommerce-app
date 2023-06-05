import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiltersContext } from "../../../contexts";
import "./CategoryCard.css";

export default function CategoryCard({ category }) {
  const { dispatch: filterDispatch } = useContext(FiltersContext);

  return (
    <Link
      to="/products"
      onClick={() =>
        filterDispatch({
          type: "CATEGORY_CLICKED",
          payload: category.categoryName,
        })
      }
      className="category-card"
      key={category.id}
    >
      <img src={category.imageUrl} alt={category.categoryName} height={240} />
      <h5 className="category-card-overlay">
        <p>{category.categoryName}</p>
      </h5>
    </Link>
  );
}

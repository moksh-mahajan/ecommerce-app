import { useContext } from "react";
import { FiltersContext } from "../../../contexts/FiltersContext";
import { Link } from "react-router-dom";
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
      <h5>{category.categoryName}</h5>
    </Link>
  );
}

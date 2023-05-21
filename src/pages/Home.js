import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { Link } from "react-router-dom";

export default function Home() {
  const {
    state: { isLoading, categories },
  } = useContext(CategoriesContext);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ul style={{ display: "flex" }}>
      {categories.map((category) => (
        <Link to="/products">
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

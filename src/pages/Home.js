import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import CategoryCard from "../components/card/CategoryCard/CategoryCard";

export default function Home() {
  const {
    state: { isLoading, categories },
  } = useContext(CategoriesContext);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ul className="category-section">
      {categories.map((category) => (
        <CategoryCard category={category} />
      ))}
    </ul>
  );
}

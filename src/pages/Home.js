import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import CategoryCard from "../components/card/CategoryCard/CategoryCard";
import LandingImg from "../assets/images/landing.jpeg"
import LandingImg2 from "../assets/images/landing2.jpg"
import "./Home.css";

export default function Home() {
  const {
    state: { isLoading, categories },
  } = useContext(CategoriesContext);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="">
      <img alt="landing-img" src={LandingImg2} />
    <ul className="category-section">
      {categories.map((category) => (
        <CategoryCard category={category} />
      ))}
    </ul>
    </div>
  );
}

import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import CategoryCard from "../components/card/CategoryCard/CategoryCard";
import LandingImg from "../assets/images/landing.jpeg";
import LandingImg2 from "../assets/images/landing2.jpg";
import LandingImg3 from "../assets/images/landing3.jpg";
import "./Home.css";
import { Footer } from "../components";

export default function Home() {
  const {
    state: { isLoading, categories },
  } = useContext(CategoriesContext);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="">
      <img className="landing-img" alt="landing-img" src={LandingImg2} />
      <ul id="categories" className="category-section">
        <h4>Our Categories</h4>
        <div className="category-list">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </ul>
      <Footer />
    </div>
  );
}

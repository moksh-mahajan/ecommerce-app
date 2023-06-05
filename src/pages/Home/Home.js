import { useContext } from "react";
// import LandingImg from "../../assets/images/landing.jpeg";
import LandingImg2 from "../../assets/images/landing2.jpg";
// import LandingImg3 from "../../assets/images/landing3.jpg";
import "./Home.css";
import { CategoriesContext } from "../../contexts";
import { CategoryCard, Footer } from "../../components";

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

import { useContext, useEffect, useState } from "react";
import Filters from "../components/Filters/Filters";
import { FiltersContext } from "../contexts/FiltersContext";
import ProductCard from "../components/card/ProductCard/ProductCard";
import { Footer } from "../components";

export default function Products() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Filters />
        <ProductsSection />
      </div>
    </>
  );
}

function ProductsSection() {
  const {
    state: {
      sortOrder,
      selectedCategories,
      selectedRating,
      selectedPrice,
      searchText,
    },
  } = useContext(FiltersContext);

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await fetch("/api/products");
      if (response.status === 200) {
        const products = (await response.json()).products;
        setProducts(products);
      }
      console.log("response", response);
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const getFilteredProducts = () => {
    let filteredProducts = [...products];

    if (sortOrder === "asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (searchText.length !== 0) {
      filteredProducts = filteredProducts.filter(({ name }) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedCategories.length !== 0) {
      filteredProducts = filteredProducts.filter(({ category }) =>
        selectedCategories.includes(category)
      );
    }

    if (selectedRating !== null) {
      filteredProducts = filteredProducts.filter(
        ({ rating }) => rating >= selectedRating
      );
    }

    if (selectedPrice != null) {
      filteredProducts = filteredProducts.filter(
        ({ price }) => price <= selectedPrice
      );
    }

    return filteredProducts;
  };

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <div className="product-section">
      <div className="product-section-quantity">
        <label>Showing All Products </label>
        <label>{`(showing ${products.length} products)`}</label>
      </div>

      <ProductList products={getFilteredProducts()} />
    </div>
  );
}

function LoadingIndicator() {
  return <div>Loading...</div>;
}

function ProductList({ products }) {
  return (
    <ul className="product-list-container">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </ul>
  );
}

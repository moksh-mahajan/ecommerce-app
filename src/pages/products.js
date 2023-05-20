import { useContext, useEffect, useReducer, useState } from "react";
import Filters from "../components/Filters/Filters";
import { FiltersContext } from "../contexts/FiltersContext";
import { CartContext } from "../contexts/CartContext";

export default function Products() {
  return (
    <div style={{ display: "flex" }}>
      <Filters />
      <ProductsSection />
    </div>
  );
}

function ProductsSection() {
  const {
    state: { sortOrder, selectedCategories, selectedRating, selectedPrice },
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
    <div>
      <span style={{ display: "flex" }}>
        <label>Showing All Products </label>
        <label>{`(showing ${products.length} products)`}</label>
      </span>

      <ProductList products={getFilteredProducts()} />
    </div>
  );
}

function LoadingIndicator() {
  return <div>Loading...</div>;
}

const addProductToCart = async (product) => {
  try {
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + jwtToken);
    const response = await fetch("/api/user/cart", {
      method: "POST",
      headers,
      body: JSON.stringify({ product }),
    });

    if (response.status === 201) {
    }
  } catch (e) {
    console.error(e);
  }
};

function ProductList({ products }) {
  return (
    <ul style={{ display: "flex" }}>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img
              src={product.thumbnailUrl}
              alt={product.name}
              width="200"
              height="250"
            />
            <h5>{product.name}</h5>
            <h5>{`₹${product.price}`}</h5>
            <button onClick={() => addProductToCart(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </ul>
  );
}

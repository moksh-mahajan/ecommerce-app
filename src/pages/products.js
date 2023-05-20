import { useContext, useReducer } from "react";
import Filters from "../components/Filters/Filters";
import { FiltersContext } from "../contexts/FiltersContext";

const data = [
  {
    name: "Men Premium Jacket",
    id: 0,
    price: "2000",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
  },
  {
    name: "Men Premium Jacket",
    id: 1,
    price: "2000",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
  },
  {
    name: "Men Premium Jacket",
    id: 2,
    price: "2000",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
  },
  {
    name: "Men Premium Jacket",
    id: 3,
    price: "2000",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
  },
];

export default function Products() {
  return (
    <div style={{ display: "flex" }}>
      <Filters />
      <ProductsSection />
    </div>
  );
}

function ProductsSection() {
  const { state } = useContext(FiltersContext);

  return (
    <div>
      <span style={{ display: "flex" }}>
        <label>Showing All Products </label>
        <label>(showing 20 products)</label>
      </span>
      <ProductList products={data} />
    </div>
  );
}

function ProductList({ products }) {
  return (
    <ul style={{ display: "flex" }}>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              width="200"
              height="180"
            />
            <h5>{product.name}</h5>
            <h5>{`₹${product.price}`}</h5>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </ul>
  );
}

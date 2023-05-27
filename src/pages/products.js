import { useContext, useEffect, useReducer, useState } from "react";
import Filters from "../components/Filters/Filters";
import { FiltersContext } from "../contexts/FiltersContext";
import { CartContext } from "../contexts/CartContext";
import { WishlistContext } from "../contexts/WishlistContext";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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

function ProductList({ products }) {
  const { state, dispatch } = useContext(CartContext);
  const { state: wishlistState, dispatch: wishlistDispatch } =
    useContext(WishlistContext);

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
        dispatch({
          type: "REFRESH_CART",
          payload: (await response.json()).cart,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addProductToWishlist = async (product) => {
    try {
      const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + jwtToken);
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers,
        body: JSON.stringify({ product }),
      });

      if (response.status === 201) {
        wishlistDispatch({
          type: "REFRESH_WISHLIST",
          payload: (await response.json()).wishlist,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const removeProductFromWishlist = async (productId) => {
    try {
      const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + jwtToken);
      const response = await fetch("/api/user/wishlist/" + productId, {
        method: "DELETE",
        headers,
      });
      wishlistDispatch({
        type: "REFRESH_WISHLIST",
        payload: (await response.json()).wishlist,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const {
    state: { encodedToken },
  } = useContext(AuthContext);

  const isLoggedIn = encodedToken.length !== 0;
  const navigate = useNavigate();

  return (
    <ul style={{ display: "flex" }}>
      {products.map((product) => {
        const isInCart = state.cartItems.some((item) => item.id === product.id);
        const isInWishlist = wishlistState.items.some(
          (item) => item.id === product.id
        );

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
            <button
              disabled={product._id === state.loadingProductId}
              onClick={() =>
                isLoggedIn ? addProductToCart(product) : navigate("/login")
              }
            >
              {isInCart ? "Go" : "Add"} to Cart
            </button>

            <button
              onClick={() =>
                isLoggedIn
                  ? isInWishlist
                    ? removeProductFromWishlist(product._id)
                    : addProductToWishlist(product)
                  : navigate("/login")
              }
            >
              {isInWishlist ? "Remove From Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        );
      })}
    </ul>
  );
}

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    state: { cartItems },
  } = useContext(CartContext);

  return (
    <div>
      MY CART ({cartItems.length})
      <CartItems items={cartItems} />
      <CartSummary />
    </div>
  );
}

function CartItems({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <CartItemCard key={item.id} item={item} />
      ))}
    </ul>
  );
}

function CartItemCard({ item }) {
  const { thumbnailUrl, name, price, qty } = item;
  const { dispatch } = useContext(CartContext);

  const updateProductCount = async (productId, type) => {
    try {
      const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + jwtToken);
      const response = await fetch("/api/user/cart/" + productId, {
        method: "POST",
        headers,
        body: JSON.stringify({ action: { type } }),
      });

      dispatch({ type: "REFRESH_CART", payload: (await response.json()).cart });
    } catch (e) {
      console.error(e);
    }
  };

  const removeProductFromCart = async (productId) => {
    try {
      const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + jwtToken);
      const response = await fetch("/api/user/cart/" + productId, {
        method: "DELETE",
        headers,
      });

      dispatch({ type: "REFRESH_CART", payload: (await response.json()).cart });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div>
        <img src={thumbnailUrl} alt={name} width="200" height="250" />
      </div>
      <div>
        <label>{name}</label>
        <label>₹{price}</label>
        <div>
          <label>Quantity: </label>{" "}
          <button
            disabled={qty === 1}
            onClick={() => updateProductCount(item._id, "decrement")}
          >
            -
          </button>
          <label>{qty}</label>
          <button onClick={() => updateProductCount(item._id, "increment")}>
            +
          </button>
        </div>
        <button onClick={() => removeProductFromCart(item._id)}>
          Remove From Cart
        </button>
        <button>Move to Wishlist</button>
      </div>
    </div>
  );
}

function CartSummary() {
  const navigate = useNavigate();
  return (
    <div>
      <h4>PRICE DETAILS</h4>
      <hr />
      <div>
        <label>Price (1 item)</label>
        <label>₹2000</label>
      </div>
      <div>
        <label>Discount</label>
        <label>-₹1000</label>
      </div>
      <div>
        <label>Delivery Charges</label>
        <label>₹499</label>
      </div>
      <hr />
      <div>
        <label>TOTAL AMOUNT</label>
        <label>₹2499</label>
      </div>
      <hr />
      <p>You will save ₹1000 on this order</p>
      <button onClick={() => navigate("/checkout")}>PLACE ORDER</button>
    </div>
  );
}

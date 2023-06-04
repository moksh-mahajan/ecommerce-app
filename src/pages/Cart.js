import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { CartCard } from "../components";
import "./Cart.css";

export default function Cart() {
  return (
    <div className="cart-container">
      <CartItems />
      <CartSummary />
    </div>
  );
}

function CartItems() {
  const {
    state: { cartItems },
  } = useContext(CartContext);
  return (
    <ul className="cart-list">
      MY CART ({cartItems.length})
      {cartItems.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </ul>
  );
}

function CartSummary() {
  const navigate = useNavigate();
  return (
    <div className="cart-price-section">
      {/* <h4>PRICE DETAILS</h4>
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
      <button onClick={() => navigate("/checkout")}>PLACE ORDER</button> */}

      <div className="price-details">
        <h6>PRICE DETAILS:</h6>
        <div className="price-breakup">
          <div>Total MRP</div>
          <div>₹2000</div>
        </div>
        <div className="price-breakup">
          <div>Discount on MRP</div>
          <div>-₹1000</div>
        </div>
        <div className="price-breakup">
          <div>Convenience Fee</div>
          <div>FREE</div>
        </div>
      </div>
      <div className="price-breakup">
        <h6>Total Amount</h6>
        <h6>₹2000</h6>
      </div>
      <button
        onClick={() => navigate("/checkout")}
        className="btn-order btn btn-primary"
      >
        Place Order
      </button>
    </div>
  );
}

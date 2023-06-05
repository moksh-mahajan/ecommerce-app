import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { CartCard } from "../components";
import EmptyCart from "../assets/svgs/emptyCart.svg";
import "./Cart.css";

export default function Cart() {
  const {
    state: { cartItems },
  } = useContext(CartContext);
  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty!</p>
          <img src={EmptyCart} alt="empty cart" />
        </div>
      ) : (
        <>
          <p>MY CART ({cartItems.length})</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <CartItems items={cartItems} />
            <CartSummary />
          </div>
        </>
      )}
    </div>
  );
}

function CartItems({ items }) {
  return (
    <ul className="cart-list">
      {items.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </ul>
  );
}

function CartSummary() {
  const navigate = useNavigate();

  const {
    state: { cartItems },
  } = useContext(CartContext);

  const totalMrp = cartItems.reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );

  const discount = 0.15 * totalMrp;
  const convenienceFee = 99;

  const finalAmount = totalMrp + convenienceFee - discount;

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
          <div>₹{totalMrp}</div>
        </div>
        <div className="price-breakup">
          <div>Discount (15% on MRP)</div>
          <div>-₹{`${discount.toFixed(2)}`}</div>
        </div>
        <div className="price-breakup">
          <div>Convenience Fee</div>
          <div>₹{convenienceFee}</div>
        </div>
      </div>
      <div className="price-breakup price-total">
        <div>Total Amount</div>
        <div>₹{finalAmount}</div>
      </div>
      <button onClick={() => navigate("/checkout")} className="btn-order">
        Place Order
      </button>
    </div>
  );
}

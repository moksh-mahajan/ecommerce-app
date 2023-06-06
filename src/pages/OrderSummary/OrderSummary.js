import { useContext } from "react";
import "./OrderSummary.css";
import { AddressContext, CartContext } from "../../contexts";

export default function OrderSummary() {
  const {
    state: { cartItems },
  } = useContext(CartContext);
  const { addresses, selectedAddress } = useContext(AddressContext);

  const { fullName, addressLine, landMark, city, state, pincode } =
    selectedAddress;
    const totalMrp = cartItems.reduce(
      (acc, { price, qty }) => acc + price * qty,
      0
    );
    console.log(totalMrp)

  const finalAmount = totalMrp + 99 - (0.15 * totalMrp);

  return (
    <>
      <div className="order-summary-heading">
        <span>✅ Thank you for placing order!</span>
      </div>
      <div className="order-summary-card">
        <h4 className="order-summary-card-title">Order Summary</h4>
        <div className="order-summary-card-items">
          <h5 className="order-summary-card-headings">Items:</h5>
          <ul className="order-summary-list">
            {cartItems.map(({ name, qty }) => {
              return (
                <li>
                  <span>{name}</span>
                  <span>Qty: {qty}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="order-summary-card-total">
          <h5 className="order-summary-card-headings">Cart Total:</h5>
          <p>₹ {finalAmount}</p>
        </div>
        <div className="order-summary-card-address">
          <h5 className="order-summary-card-headings">Deliver to:</h5>
          <p>
            {fullName}
            <br />
            {addressLine}, {landMark}, {state}
            <br /> {city}, {pincode}
          </p>
        </div>
      </div>
    </>
  );
}

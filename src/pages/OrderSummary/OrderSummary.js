import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./OrderSummary.css";
import { AddressContext } from "../../contexts/AddressContext";

export default function OrderSummary() {
  const {
    state: { cartItems },
  } = useContext(CartContext);
  const { addresses } = useContext(AddressContext);

  console.log(addresses);
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
          {cartItems.map(({name,qty})=>{
            return(
<li>
            <span>{name}</span>
            <span>Qty: {qty}</span>
          </li>
            )
          })}
        </ul>
      </div>
      <div className="order-summary-card-total">
        <h5 className="order-summary-card-headings">Cart Total:</h5>
        <p>Rs. 2099</p>
      </div>
      <div className="order-summary-card-address">
        <h5 className="order-summary-card-headings">Deliver to:</h5>
        <p>Moksh Mahajan<br/>
W No. 8, H. No. 57, Near Pandav Mandir,Udhampur,<br/> Jammu & Kashmir, 182101</p>
      </div>
    </div>
    </>
  );
}

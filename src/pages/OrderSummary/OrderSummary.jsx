export default function OrderSummary() {
  return (
    <div className="order-summary-card">
      <h4 className="order-summary-card-title">Order Summary</h4>
      <div className="order-summary-card-items">
        <h5>Items:</h5>
        <ul>
          <li>
            <span>Redemption</span>
            <span>Qty: 2</span>
          </li>
          <li>
            <span>Redemption</span>
            <span>Qty: 2</span>
          </li>
          <li>
            <span>Redemption</span>
            <span>Qty: 2</span>
          </li>
        </ul>
      </div>
      <div className="order-summary-card-total">
        <h5>Cart Total:</h5>
        <p>Rs. 2099</p>
      </div>
      <div className="order-summary-card-address">
        <h5>Deliver to:</h5>
      </div>
      <button>Place Order</button>
    </div>
  );
}

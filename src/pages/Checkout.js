import { useContext, useState } from "react";
import { AddressContext } from "../contexts/AddressContext";
import { AddressCard, AddressForm } from "../components";
import "./Checkout.css";

export default function Checkout() {
  const { addresses } = useContext(AddressContext);
  const [isAddAddressVisible, setIsAddAddressVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const toggleAddressForm = () => setIsAddAddressVisible(!isAddAddressVisible);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <h3>Select a delivery address</h3>
      <hr />
      <ul className="address-card-list">
        {addresses.map((address, index) => {
          return (
            <AddressCard
              address={address}
              index={index}
              setEditIndex={setEditIndex}
              toggleAddressForm={toggleAddressForm}
            />
          );
        })}

        <div className="address-btn-container">
          <button
            className="address-btn"
            onClick={() => {
              setEditIndex(-1);
              toggleAddressForm();
            }}
          >
            <i class="fa-solid fa-plus"></i>Add address
          </button>
          <button className="address-btn">Use this address</button>
        </div>
      </ul>
      {isAddAddressVisible && (
        <AddressForm onSave={toggleAddressForm} indexForEdit={editIndex} />
      )}
    </div>
  );
}

import { useContext } from "react";
import { AddressContext } from "../../../contexts";
import "./AddressCard.css";

export default function AddressCard({
  address,
  index,
  setEditIndex,
  toggleAddressForm,
}) {
  const { handleDeleteAddress, handleSelectAddress } =
    useContext(AddressContext);

  const { id, fullName, addressLine, landMark, city, state, pincode } = address;
  return (
    <div className="address-card">
      <input
        type="radio"
        name="address"
        onChange={(e) => handleSelectAddress(address)}
      />
      <div className="address-card-details">
        <h4>{fullName}</h4>
        <p>
          {addressLine}, {landMark}, {city}, {state}, {pincode}
        </p>
        <div className="address-card-btn-container">
          <button
            className="address-card-btn address-card-edit-btn"
            onClick={() => {
              setEditIndex(index);
              toggleAddressForm();
            }}
          >
            Edit Address
          </button>
          <button
            className="address-card-btn address-card-delete-btn"
            onClick={() => handleDeleteAddress(id)}
          >
            Delete Address
          </button>
        </div>
      </div>
    </div>
  );
}

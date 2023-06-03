import { useContext, useState } from "react";
import { AddressContext } from "../contexts/AddressContext";

export default function Checkout() {
  const { addresses, handleDeleteAddress } = useContext(AddressContext);
  const [isAddAddressVisible, setIsAddAddressVisible] = useState(false);

  const toggleAddressForm = () => setIsAddAddressVisible(!isAddAddressVisible);
  return (
    <div>
      <h1>Checkout</h1>
      <h3>Select a delivery address</h3>
      <hr />
      <ul>
        {addresses.map((address) => {
          const { id, fullName, addressLine, landMark, city, state, pincode } =
            address;
          return (
            <div>
              <input type="radio" name="address" />
              <label>{fullName}</label>
              <p>
                {addressLine}, {landMark}, {city}, {state}, {pincode}
              </p>
              <button>Edit Address</button>
              <button onClick={() => handleDeleteAddress(id)}>
                Delete Address
              </button>
            </div>
          );
        })}

        <br />
        <br />
        <br />

        <button onClick={toggleAddressForm}>Add address</button>
        <button>Use this address</button>
      </ul>
      {isAddAddressVisible && <AddressForm onSave={toggleAddressForm} />}
    </div>
  );
}

function AddressForm({ onSave }) {
  return (
    <div>
      <h1>Add a new Address</h1>
      <div>
        <input placeholder="Full Name"></input>
      </div>
      <div>
        <input placeholder="Pincode"></input>
      </div>
      <div>
        <input placeholder="Flat, House No., Building, Company, Apartment"></input>
      </div>
      <div>
        <input placeholder="Landmark"></input>
      </div>
      <div>
        <input placeholder="City"></input>
      </div>
      <div>
        <input placeholder="State"></input>
      </div>

      <button onClick={onSave}>Save</button>
    </div>
  );
}

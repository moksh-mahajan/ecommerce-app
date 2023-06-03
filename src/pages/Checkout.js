import { useContext, useState } from "react";
import { AddressContext } from "../contexts/AddressContext";

export default function Checkout() {
  const { addresses, handleDeleteAddress } = useContext(AddressContext);
  const [isAddAddressVisible, setIsAddAddressVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const toggleAddressForm = () => setIsAddAddressVisible(!isAddAddressVisible);
  return (
    <div>
      <h1>Checkout</h1>
      <h3>Select a delivery address</h3>
      <hr />
      <ul>
        {addresses.map((address, index) => {
          const { id, fullName, addressLine, landMark, city, state, pincode } =
            address;
          return (
            <div>
              <input type="radio" name="address" />
              <label>{fullName}</label>
              <p>
                {addressLine}, {landMark}, {city}, {state}, {pincode}
              </p>
              <button
                onClick={() => {
                  setEditIndex(index);
                  toggleAddressForm();
                }}
              >
                Edit Address
              </button>
              <button onClick={() => handleDeleteAddress(id)}>
                Delete Address
              </button>
            </div>
          );
        })}

        <br />
        <br />
        <br />

        <button
          onClick={() => {
            setEditIndex(-1);
            toggleAddressForm();
          }}
        >
          Add address
        </button>
        <button>Use this address</button>
      </ul>
      {isAddAddressVisible && (
        <AddressForm onSave={toggleAddressForm} indexForEdit={editIndex} />
      )}
    </div>
  );
}

function AddressForm({ onSave, indexForEdit }) {
  const { addresses, handleAddAddress, handleEditAddress } =
    useContext(AddressContext);
  const isEditMode = indexForEdit !== -1;
  const [address, setAddress] = useState(
    isEditMode ? addresses[indexForEdit] : { id: addresses.length }
  );

  return (
    <div>
      <h1>{isEditMode ? "Edit" : "Add"} Address</h1>
      <div>
        <input
          placeholder="Full Name"
          value={address.fullName}
          onChange={(e) =>
            setAddress((address) => ({ ...address, fullName: e.target.value }))
          }
        />
      </div>
      <div>
        <input
          placeholder="Pincode"
          value={address.pincode}
          onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
        />
      </div>
      <div>
        <input
          value={address.addressLine}
          placeholder="Flat, House No., Building, Company, Apartment"
          onChange={(e) =>
            setAddress({ ...address, addressLine: e.target.value })
          }
        />
      </div>
      <div>
        <input
          value={address.landMark}
          placeholder="Landmark"
          onChange={(e) => setAddress({ ...address, landMark: e.target.value })}
        />
      </div>
      <div>
        <input
          value={address.city}
          placeholder="City"
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
        />
      </div>
      <div>
        <input
          value={address.state}
          placeholder="State"
          onChange={(e) => setAddress({ ...address, state: e.target.value })}
        />
      </div>

      <button
        onClick={() => {
          isEditMode ? handleEditAddress(address) : handleAddAddress(address);
          onSave();
        }}
      >
        Save
      </button>
    </div>
  );
}

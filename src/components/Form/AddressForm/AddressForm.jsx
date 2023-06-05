import { useContext, useState } from "react";
import { AddressContext } from "../../../contexts";
import "./AddressForm.css";

export default function AddressForm({ onSave, indexForEdit }) {
  const { addresses, handleAddAddress, handleEditAddress } =
    useContext(AddressContext);
  const isEditMode = indexForEdit !== -1;
  const [address, setAddress] = useState(
    isEditMode ? addresses[indexForEdit] : { id: addresses.length }
  );

  return (
    <div onClick={onSave} className="address-form-overlay">
      <div
        onClick={(e) => e.stopPropagation()}
        className="address-form auth-form"
      >
        <h1>{isEditMode ? "Edit" : "Add"} Address</h1>
        <div className="auth-input">
          <label>Full Name</label>

          <input
            className="auth-field"
            placeholder="Full Name"
            value={address.fullName}
            onChange={(e) =>
              setAddress((address) => ({
                ...address,
                fullName: e.target.value,
              }))
            }
          />
        </div>
        <div className="auth-input">
          <label>Pincode</label>

          <input
            className="auth-field"
            placeholder="Pincode"
            value={address.pincode}
            onChange={(e) =>
              setAddress({ ...address, pincode: e.target.value })
            }
          />
        </div>
        <div className="auth-input">
          <label>Address</label>

          <input
            className="auth-field"
            value={address.addressLine}
            placeholder="Flat, House No., Building, Company, Apartment"
            onChange={(e) =>
              setAddress({ ...address, addressLine: e.target.value })
            }
          />
        </div>
        <div className="auth-input">
          <label>Landmark</label>

          <input
            className="auth-field"
            value={address.landMark}
            placeholder="Landmark"
            onChange={(e) =>
              setAddress({ ...address, landMark: e.target.value })
            }
          />
        </div>
        <div className="two-field-section">
          <div className="auth-input">
            <label>City</label>

            <input
              className="auth-field"
              value={address.city}
              placeholder="City"
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
          </div>
          <div className="auth-input">
            <label>State</label>

            <input
              className="auth-field"
              value={address.state}
              placeholder="State"
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
            />
          </div>
        </div>

        <button
          className="address-form-btn"
          onClick={() => {
            isEditMode ? handleEditAddress(address) : handleAddAddress(address);
            onSave();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

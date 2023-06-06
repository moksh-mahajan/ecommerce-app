import { createContext, useReducer } from "react";

export const AddressContext = createContext();

const initialState = {
  addresses: [
    {
      id: 0,
      fullName: "Moksh Mahajan",
      pincode: "182101",
      addressLine: "W No. 8, H. No. 57",
      landMark: "Near Pandav Mandir",
      city: "Udhampur",
      state: "Jammu & Kashmir",
    },

    {
      id: 1,
      fullName: "Aman Gupta",

      pincode: "182101",
      addressLine: "W No. 9, H. No. 36",
      landMark: "Arya Samaj Gali",
      city: "Udhampur",
      state: "Jammu & Kashmir",
    },
  ],

  selectedAddress: null,
};

const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      const newAddress = action.payload;
      return {
        ...state,
        addresses: [...state.addresses, newAddress],
      };

    case "EDIT_ADDRESS":
      const updatedAddress = action.payload;
      const newAddresses = [...state.addresses];
      const index = state.addresses.findIndex(
        (address) => address.id === updatedAddress.id
      );
      newAddresses[index] = updatedAddress;

      return {
        ...state,
        addresses: newAddresses,
      };

    case "REMOVE_ADDRESS":
      const addressIdToBeRemoved = action.payload;
      return {
        ...state,
        addresses: state.addresses.filter(
          ({ id }) => id != addressIdToBeRemoved
        ),
      };

    case "SELECT_ADDRESS":
      return {
        ...state,
        selectedAddress: action.payload,
      };

    default:
      return state;
  }
};

export function AddressProvider({ children }) {
  const [state, dispatch] = useReducer(addressReducer, initialState);

  const handleDeleteAddress = (addressId) =>
    dispatch({ type: "REMOVE_ADDRESS", payload: addressId });

  const handleAddAddress = (address) =>
    dispatch({ type: "ADD_ADDRESS", payload: address });

  const handleEditAddress = (address) =>
    dispatch({
      type: "EDIT_ADDRESS",
      payload: address,
    });

  const handleSelectAddress = (address) =>
    dispatch({
      type: "SELECT_ADDRESS",
      payload: address,
    });

  return (
    <AddressContext.Provider
      value={{
        addresses: state.addresses,
        selectedAddress: state.selectedAddress,
        handleDeleteAddress,
        handleAddAddress,
        handleEditAddress,
        handleSelectAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

import { createContext, useReducer } from "react";

export const AddressContext = createContext();

const initialState = {
  addresses: [],
};

const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      const newAddress = action.payload;
      return {
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
        addresses: newAddresses,
      };

    case "REMOVE_ADDRESS":
      const addressIdToBeRemoved = action.payload;
      return {
        addresses: state.addresses.filter(
          ({ id }) => id != addressIdToBeRemoved
        ),
      };

    default:
      return state;
  }
};

export function AddressProvider({ children }) {
  const [state, dispatch] = useReducer(addressReducer, initialState);

  return (
    <AddressContext.Provider value={{ state, dispatch }}>
      {children}
    </AddressContext.Provider>
  );
}

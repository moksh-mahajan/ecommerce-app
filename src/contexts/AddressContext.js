import { createContext, useReducer } from "react";

export const AddressContext = createContext();

const initialState = {
  addresses: [
    {
      fullName: "Moksh Mahajan",

      pincode: "182101",
      addressLine: "W No. 8, H. No. 57",
      landMark: "Near Pandav Mandir",
      city: "Udhampur",
      state: "Jammu & Kashmir",
    },

    {
      fullName: "Aman Gupta",

      pincode: "182101",
      addressLine: "W No. 9, H. No. 36",
      landMark: "Arya Samaj Gali",
      city: "Udhampur",
      state: "Jammu & Kashmir",
    },
  ],
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
    <AddressContext.Provider value={{ addresses: state.addresses, dispatch }}>
      {children}
    </AddressContext.Provider>
  );
}

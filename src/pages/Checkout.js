import Radio from "../components/Radio";

const addresses = [
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
];

export default function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <h3>Select a delivery address</h3>
      <hr />
      <ul>
        {addresses.map((address) => {
          const { fullName, addressLine, landMark, city, state, pincode } =
            address;
          return (
            <div>
              <input type="radio" name="address"/>
              <label>{fullName}</label>
              <p>
                {addressLine}, {landMark}, {city}, {state}, {pincode}
              </p>
            </div>
          );
        })}

        <button>Add address</button>
        <button>Use this address</button>
      </ul>
    </div>
  );
}

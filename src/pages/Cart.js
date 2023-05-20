import { useEffect, useState } from "react";

export default function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const loadCart = async () => {
    try {
      const jwtToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
      const headers = new Headers();
      headers.append("Authorization", "Bearer " + jwtToken);
      const response = await fetch("/api/user/cart", { headers });
      if (response.status === 200) {
        const { cart } = (await response.json()).cart;
        setCartItems(cart);
      }
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadCart();
  }, []);
  return <div>Cart Page</div>;
}
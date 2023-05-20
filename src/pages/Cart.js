export default function Cart() {
  return <div>Cart Page</div>;
}

const removeProductFromCart = async (productId) => {
  try {
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + jwtToken);
    const response = await fetch("/api/user/cart/" + productId, {
      method: "DELETE",
      headers,
    });
    // console.log(response);
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
};

const updateProductCount = async (productId, type) => {
  try {
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + jwtToken);
    const response = await fetch("/api/user/cart/" + productId, {
      method: "POST",
      headers,
      body: JSON.stringify({ action: { type } }),
    });
    // console.log(response);
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
};

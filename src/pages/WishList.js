export default function WishList() {
  return <div>Wishlist...</div>;
}

const loadWishlist = async () => {
  try {
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + jwtToken);
    const response = await fetch("/api/user/wishlist", { headers });
    if (response.status === 200) {
      console.log(await response.json());
    }
  } catch (e) {
    console.error(e);
  }
};

const addProductToWishlist = async (product) => {
  try {
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + jwtToken);
    const response = await fetch("/api/user/wishlist", {
      method: "POST",
      headers,
      body: JSON.stringify({ product }),
    });

    if (response.status === 201) {
    }
  } catch (e) {
    console.error(e);
  }
};

const removeProductFromWishlist = async (productId) => {
  try {
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4OWE1ZWQ5YS05NWFlLTQ3YjctYjM2Yy05NDYzODA0ZmYwYjMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.uvMSr3DVt5yViVufdbbL6DwVeuF6FHlzEQDAb9QNb3M";
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + jwtToken);
    const response = await fetch("/api/user/wishlist/" + productId, {
      method: "DELETE",
      headers,
    });
    // console.log(response);
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
};

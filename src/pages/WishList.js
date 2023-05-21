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




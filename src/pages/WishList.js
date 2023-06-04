import { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";
import { WishlistItemCard } from "../components";

export default function WishList() {
  const {
    state: { items },
  } = useContext(WishlistContext);

  return (
    <div className="wishlist-container">
      <p>MY WISHLIST ({items.length})</p>
      <WishListItems items={items} />
    </div>
  );
}

function WishListItems({ items }) {
  return (
    <ul className="wishlist-card-list">
      {items.map((item) => (
        <WishlistItemCard key={item.id} item={item} />
      ))}
    </ul>
  );
}



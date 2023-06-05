import { useContext } from "react";
import { WishlistItemCard } from "../components";
import EmptyCart from "../assets/svgs/emptyCart.svg";
import { WishlistContext } from "../contexts";

export default function WishList() {
  const {
    state: { items },
  } = useContext(WishlistContext);

  return (
    <div className="wishlist-container">
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your wishlist is empty!</p>
          <img src={EmptyCart} alt="empty cart" />
        </div>
      ) : (
        <>
          <p>MY WISHLIST ({items.length})</p>
          <WishListItems items={items} />
        </>
      )}
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

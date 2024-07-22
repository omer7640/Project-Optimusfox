import { FavoriteBorder } from "@mui/icons-material";
import React from "react";
import AddFav from "./AddFav";

export default function Favourite({ cartItems, handleAdd, handleRemove }) {
  // console.log(cartItems);
  return (
    <div className="fav2">
      {cartItems.length === 0 && (
        <div className="cart-empty">Sorry! Your cart is empty</div>
      )}
      <div>
        {cartItems.map((items) => (
          <AddFav
            key={items.id}
            img={items.imgUrl}
            items={items}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}

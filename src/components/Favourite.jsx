import { FavoriteBorder } from "@mui/icons-material";
import React, { useContext } from "react";
import AddFav from "./AddFav";
import { counterContext } from "../context/context";

export default function Favourite() {
  // console.log(cartItems);
  const value = useContext(counterContext);
  return (
    <div className="fav2">
      {value.cartItems.length === 0 && (
        <div className="cart-empty">Sorry! Your Favourites is empty</div>
      )}
      <div>
        {value.cartItems.map((items) => (
          <AddFav key={items.id} img={items.imgUrl} items={items} />
        ))}
      </div>
    </div>
  );
}

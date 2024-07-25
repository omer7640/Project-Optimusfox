import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import { counterContext } from "../context/context";

export default function AddFav({ items, img }) {
  // console.log(items);
  const { name } = items;
  const value = useContext(counterContext);
  return (
    <div key={items.id}>
      <div className="card-cart">
        <div className="cart-body">
          {/* <img src={img} className="img-cart" /> */}
          <Avatar src={img} className="img-cart">
            {name[0]}
          </Avatar>
          <p>{name}</p>

          <button
            className="btn btn-danger"
            onClick={() => value.handleRemove(items)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

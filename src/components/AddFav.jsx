import { Avatar } from "@mui/material";
import React from "react";

export default function AddFav({ items, handleAdd, img, handleRemove }) {
  // console.log(items);
  const { name } = items;
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
            onClick={() => handleRemove(items)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

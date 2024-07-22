import React from "react";
import { Routes, Route } from "react-router-dom";
import Meets from "../components/Meets";
import Favourite from "../components/Favourite";
export default function AllRoutes({
  projectItems,
  cartItems,
  handleAdd,
  handleRemove,
}) {
  // console.log(Data);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Meets
              handleAdd={handleAdd}
              cartItems={cartItems}
              projectItems={projectItems}
            />
          }
        />
        <Route
          path="/fav"
          element={
            <Favourite
              handleAdd={handleAdd}
              cartItems={cartItems}
              projectItems={projectItems}
              handleRemove={handleRemove}
            />
          }
        />
      </Routes>
    </div>
  );
}

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
        <Route path="/" element={<Meets />} />
        <Route path="/fav" element={<Favourite />} />
      </Routes>
    </div>
  );
}

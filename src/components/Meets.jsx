import React from "react";
import Card from "./Card";
// import Contacts from "../../Json/Contacts";
import { FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Meets({ handleAdd, cartItems, projectItems }) {
  // console.log(projectItems);
  function createCard(projectItem) {
    return (
      <Card
        key={projectItem.id}
        img={projectItem.imgUrl}
        title={projectItem.name}
        projectItem={projectItem}
        handleAdd={handleAdd}
      />
    );
  }
  return (
    <div>
      <div className="favourite">
        <Link className="fav-btn" to="/fav">
          <h1>Favourites</h1>
          <FavoriteBorder />
        </Link>
      </div>
      <div className="meet-section">{projectItems.map(createCard)}</div>
    </div>
  );
}

import React, { useContext } from "react";
import Card from "./Card";
// import Contacts from "../../Json/Contacts";
import { FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { counterContext } from "../context/context";

export default function Meets() {
  function createCard(projectItem) {
    return (
      <Card
        key={projectItem.id}
        img={projectItem.imgUrl}
        title={projectItem.name}
        projectItem={projectItem}
      />
    );
  }
  const value = useContext(counterContext);
  console.log(value.projectItems);
  return (
    <div>
      <div className="favourite">
        <Link className="fav-btn" to="/fav">
          <h1>Favourites</h1>
          <FavoriteBorder />
        </Link>
      </div>
      <div className="meet-section">{value.projectItems.map(createCard)}</div>
    </div>
  );
}

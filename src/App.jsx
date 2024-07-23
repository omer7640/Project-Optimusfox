import React, { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";

import "./App.css";

import Contacts from "../Json/Contacts";
import AllRoutes from "./routes/AllRoutes";
function App() {
  const { projectItems } = Contacts;
  // console.log(projectItems);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAdd = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };
  const handleRemove = (product) => {
    const productExist = cartItems.find((items) => items.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((items) => items.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((items) =>
          items.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : items
        )
      );
    }
  };

  return (
    <div className="App">
      {/* <HomePage /> */}
      <AllRoutes
        handleAdd={handleAdd}
        cartItems={cartItems}
        projectItems={projectItems}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;

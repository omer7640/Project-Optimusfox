import React, { useEffect, useState } from "react";
import "./App.css";
import Contacts from "../Json/Contacts";
import AllRoutes from "./routes/AllRoutes";
import { counterContext } from "./context/context";
import axios from "axios";
function App() {
  // const { projectItems } = Contacts;
  // console.log(projectItems);
  const [projectItems, setProjectItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    axios.get("http://localhost:5173/persons").then((response) => {
      setProjectItems(response.data);
      setIsloading(false);
    });
  }, []);
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
  // console.log(data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <counterContext.Provider
      value={{
        cartItems,
        setCartItems,
        projectItems,
        handleAdd,
        handleRemove,
      }}
    >
      <div className="App">
        {/* <HomePage /> */}
        <AllRoutes />
      </div>
    </counterContext.Provider>
  );
}

export default App;

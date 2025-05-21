// import { useState } from 'react'
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}
function App() {
  const [cartData, setCartData] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartData(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <NavBar cartSize={cartData.length} />
      <HomePage cartData={cartData} setCartData={setCartData} />
    </div>
  );
}

export default App;

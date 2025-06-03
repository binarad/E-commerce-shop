import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export function loadCartFromStorage(): CartItem[] {
  const stored = localStorage.getItem("cart");
  if (!stored) {
    localStorage.setItem("cart", JSON.stringify([]));
    return [];
  }
  try {
    return JSON.parse(stored);
  } catch {
    console.log("Failed to parse cart");
    localStorage.setItem("cart", JSON.stringify([]));
    return [];
  }
}
function App() {
  const [cartData, setCartData] = useState<CartItem[]>(loadCartFromStorage());

  // Loading cart from localStorage on Mount
  useEffect(() => {
    setCartData(loadCartFromStorage());
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <NavBar cartSize={cartData.length} />
      <HomePage cartData={cartData} setCartData={setCartData} />
    </div>
  );
}

export default App;

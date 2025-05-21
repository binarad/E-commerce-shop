import NavBar from "../../Components/NavBar";
import { Link } from "react-router";
import { ArrowBack } from "@mui/icons-material";
import { CartItem, loadCartFromStorage } from "../../App";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>(loadCartFromStorage());
  const [update, setUpdate] = useState<number>(0);
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  useEffect(() => {
    setCart(loadCartFromStorage());
  }, [update]);

  function handleDeleteFromCart(name: string) {
    let updatedCart = cart
      .map((product) => {
        if (product.name === name) {
          if (product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return null;
        }
        return product;
      })
      .filter(Boolean);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // cart.find(product => product.name === name ? product.quantity >1 : {...product, quantity: product.quantity - 1} : updatedCart = cart.filter(product => product.name !== name) )
    setUpdate(update + 1);
  }
  if (cart.length == 0) {
    return (
      <div className="w-full flex flex-col">
        <NavBar cartSize={cart.length} />
        <div className="flex flex-col items-center justify-center m-10">
          <span className="text-3xl font-bold">Your cart is empty</span>
          <Link
            to="/"
            className="flex items-center hover:cursor-pointer bg-slate-500 text-white rounded-md p-2 mt-4 w-40 h-10 justify-center hover:bg-slate-600"
          >
            <ArrowBack />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center ">
      <NavBar cartSize={cart.length} />

      <div className="flex flex-col p-4 w-[1200px] h-[600px] overflow-visible">
        {cart.map((product) => (
          <div
            key={product.name}
            className="grid gap-2 grid-cols-7 items-center border py-2 px-4 my-2 h-20 rounded-lg border-[#d9d9d9]"
          >
            <h1>{product.name}</h1> <b>${product.price}</b>x{product.quantity}
            <button
              className="text-red-500 hover:underline ml-auto col-start-7 cursor-pointer"
              onClick={() => handleDeleteFromCart(product.name)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div id="additional-info" className="grid grid-cols-8 w-[1200px]">
        <Link to="/" className="col-span-2 col-start-1">
          <Button variant="contained" className="w-full h-full">
            Continue shopping
          </Button>
        </Link>
        <div
          className="flex text-3xl self-end m-2 col-start-7 col-span-2"
          id="total-price"
        >
          <h1>Total price: ${totalPrice}</h1>
        </div>
      </div>
    </div>
  );
}

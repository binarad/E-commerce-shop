import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { CartItem } from "../App";

interface CardProps {
  name: string;
  price: number;
  quantity: number;
  cartData: CartItem[];
  setCartData: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const ProductCard: React.FC<CardProps> = (props) => {
  // const [cartData, setCartData] = useState<CardProps[]>([]);

  // useEffect(() => {
  //   const newCartJSON = localStorage.getItem("cart");
  //   if (newCartJSON) setCartData(JSON.parse(newCartJSON));
  //   else setCartData([]);
  // }, []);

  const addToCartHandle = () => {
    const newProduct = {
      name: props.name,
      price: props.price,
      quantity: 1,
    };

    const existing = props.cartData.find(
      (item) => item.name === newProduct.name,
    );
    if (existing) {
      const updatedCart = props.cartData.map((item) =>
        item.name == newProduct.name
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      props.setCartData(updatedCart);
    } else {
      props.setCartData([...props.cartData, newProduct]);
    }
    // if add already added produt to array, find product and +1 quantity
    // const updatedCart = [...cartData, newProduct];
    // setCartData(updatedCart);
    // localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div className="h-[300px] w-[200px] items-center   justify-around flex flex-col m-[10px] p-[2.5px] border border-[#d9d9d9] rounded-lg">
      <img
        alt="Here must be product img but not today :("
        className="h-[150px] w-[150px] aspect-square text-center border border-[#d9d9d9] rounded-lg mt-2"
      />

      <h1>{props.name}</h1>
      <div className="flex items-center justify-between w-full p-2">
        <b>${props.price}</b>
        <Button variant="contained" onClick={addToCartHandle}>
          <AddShoppingCart />
        </Button>
      </div>
      <p className="text-sm">In stock: {props.quantity}</p>
    </div>
  );
};

export default ProductCard;

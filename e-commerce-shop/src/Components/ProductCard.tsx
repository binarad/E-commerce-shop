import React from "react";
import { Button } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

interface CardProps {
  name: string;
  price: number;
  quantity: number;
}
const ProductCard: React.FC<CardProps> = (props) => {
  // TODO: Handle Add to Cart
  return (
    <div className="h-[300px] w-[200px] items-center   justify-around flex flex-col m-[10px] p-[2.5px] border border-[#d9d9d9] rounded-lg">
      <img
        alt="Here must be product img but not today :("
        className="h-[150px] w-[150px] aspect-square text-center border border-[#d9d9d9] rounded-lg mt-2"
      />

      <h1>{props.name}</h1>
      <div className="flex items-center justify-between w-full p-2">
        <b>${props.price}</b>
        <Button variant="contained">
          <AddShoppingCart />
        </Button>
      </div>
      <p className="text-sm">In stock: {props.quantity}</p>
    </div>
  );
};

export default ProductCard;

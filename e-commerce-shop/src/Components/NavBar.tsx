import { Link } from "react-router";
import { ShoppingCart } from "@mui/icons-material";
import MainFavicon from "/favicon.png";
import { useEffect, useState } from "react";

interface NavBarProps {
  cartSize: number;
}
export default function NavBar({ cartSize }: NavBarProps) {
  return (
    <div className="flex h-[65px] w-full flex-row justify-center items-center px-[32px] border-b border-[#D9D9D9] bg-[#fff] gap-6 box-border flex-none order-none self-stretch ">
      <Link
        to={"/"}
        className="w-[40px] h-[40px] flex flex-row items-center flex-none order-none grow-0 mr-auto"
      >
        <img src={MainFavicon} alt="main-logo" className="h-[40px] w-[40px]" />
      </Link>

      <div id="cart-icon" className="ml-auto">
        <Link
          to={"/cartpage"}
          className="w-[40px] h-[40px] relative flex justify-center items-center"
        >
          <ShoppingCart className="w-8 z-0" />
          <span className="absolute top-[-10px] right-[-10px] bg-slate-600 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm ">
            {cartSize}
          </span>
        </Link>
      </div>
    </div>
  );
}

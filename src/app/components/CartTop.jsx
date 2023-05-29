"use client";

import React, { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

const CartTop = () => {
  const { setIsOpen } = useContext(CartContext);
  return (
    <div className="h-20 w-full border-b flex items-center justify-between px-10">
      {/* cart text */}
      <div className="font-semibold">
        Cart (3)
      </div>
      {/* close icon */}
      <div onClick={() => setIsOpen(false)} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl group-hover:scale-110 transition-all duration-300" />
      </div>
    </div>
  );
};

export default CartTop;

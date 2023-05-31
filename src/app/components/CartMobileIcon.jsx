"use client";

import { useContext } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

const CartMobileIcon = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-tertiary w-16 h-16 rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[3%] bottom-[10%] z-20 lg:hidden"
    >
      <BsHandbagFill className="text-3xl" />
      {/* amount */}
      <span className="absolute text-white bottom-3 right-3 gradient w-4 h-4 flex justify-center items-center rounded-full font-robotoCondensed text-sm">
        {itemAmount}
      </span>
    </div>
  );
};

export default CartMobileIcon;

"use client";

import Image from "next/image";
import { useContext } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

const CartItem = ({ pizza }) => {
  const { removeItem, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div className="select-non">
      <div className="flex gap-x-4 mb-2">
        {/* image */}
        <div className="flex justify-center items-center">
          <Image src={pizza.image} alt={pizza.name} width={90} height={90} />
        </div>
        {/* pizza info */}
        <div className="flex-1 flex flex-col gap-y-1">
          {/* name */}
          <div className="text-lg capitalize font-bold">{pizza.name}</div>
          <div className="flex flex-col gap-y-1">
            {/* crust */}
            <div className="capitalize font-medium text-sm">
              {pizza.crust} crust
            </div>
            {/* size */}
            <div className="capitalize mb-2 font-medium text-sm">
              {pizza.size} size
            </div>
            {/* quantity controls */}
            <div className="flex items-center gap-x-1">
              {/* remove quantity */}
              <div
                onClick={() => {
                  decreaseAmount(pizza.id, pizza.price);
                }}
                className="w-[18px] h-[18px] flex items-center justify-center cursor-pointer text-white gradient rounded-full"
              >
                <BiMinus />
              </div>
              {/* pizza amount */}
              <div className="flex font-semibold flex-1 max-w-[30px] justify-center items-center text-sm">
                {pizza.amount}
              </div>
              {/* add quantity */}
              <div
                onClick={() => {
                  increaseAmount(pizza.id, pizza.price);
                }}
                className="w-[18px] h-[18px] flex items-center justify-center cursor-pointer text-white gradient rounded-full"
              >
                <BiPlus />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {/* remove pizza */}
          <div
            onClick={() => {
              removeItem(pizza.id, pizza.crust, pizza.price);
            }}
            className="text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 transition-all duration-100 text-orange"
          >
            <IoCloseOutline />
          </div>
          {/* price */}
          <div>
            <span className="text-lg font-medium font-robotoCondensed">
              {parseFloat(pizza.price * pizza.amount).toFixed(2)}€
            </span>
          </div>
        </div>
      </div>
      {/* toppings */}
      <div className="flex flex-wrap items-center gap-2 p-6 border-b border-black/10">
        <div className="font-semibold">
          Toppings: {pizza.additionalTopping.length === 0 && "None"}
        </div>
        {pizza.additionalTopping.map((topping, index) => {
          return (
            <div
              className="capitalize text-sm font-medium gradient px-3 py-1 rounded-full leading-none"
              key={index}
            >
              {topping.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItem;

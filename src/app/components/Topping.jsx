"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  // checkbox state
  const [isChecked, setIsChecked] = useState(false);

  // handle checkbox
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // handle toppings
  const handleToppings = () => {
    if (isChecked) {
      // using a Set to ensure unique topping values
      const newToppings = new Set([...additionalTopping, { ...topping }]);
      setAdditionalTopping(Array.from(newToppings));
    } else {
      // remove the topping
      const newToppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name;
      });
      setAdditionalTopping(newToppings);
    }
  };

  useEffect(() => {
    handleToppings();
  }, [isChecked]);

  return (
    <div
      className={`${
        isChecked && "border-orange"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
    >
      <Image
        src={topping.image}
        width={70}
        height={70}
        alt={topping.name}
        className="mb-2"
      />
      {/* topping name */}
      <div className="text-sm capitalize text-center font-medium">
        {topping.name}
      </div>
      <input
        type="checkbox"
        checked={isChecked}
        className="absolute w-full h-full opacity-0 cursor-pointer"
        onChange={handleCheckbox}
      />
      {/* checkmark icon */}
      <div
        className={`${
          isChecked ? "opacity-1000" : "opacity-0"
        } absolute top-1 right-1`}
      >
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  );
};

export default Topping;

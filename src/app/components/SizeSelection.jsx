"use client";

import Image from "next/image";

const SizeSelection = ({ pizza, size, setSize }) => {
  return (
    <div>
      {/* sizes */}
      <div className="flex gap-x-12 items-baseline justify-around mb-10 font-medium">
        {/* small */}
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "small"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
            src={pizza.image}
            width={60}
            height={60}
            alt={pizza.name}
          />
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Small
        </label>
        {/* medium */}
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "medium"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
            src={pizza.image}
            width={70}
            height={70}
            alt={pizza.name}
          />
          <input
            type="radio"
            name="size"
            value="medium"
            checked={size === "medium"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Medium
        </label>
        {/* large */}
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "large"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
            src={pizza.image}
            width={80}
            height={80}
            alt={pizza.name}
          />
          <input
            type="radio"
            name="size"
            value="large"
            checked={size === "large"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
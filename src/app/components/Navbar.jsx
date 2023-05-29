"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.svg";
import Phone from "/public/phone.svg";
import Cart from "/public/bag.svg"

const Navbar = () => {
  return (
    <nav className="absolute w-full py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        {/* logo */}
        <Link href="#" className="max-w-[160px] lg:max-w-max">
          <Image src={Logo} width={180} height={180} alt="Logo" />
        </Link>
        {/* phone number and cart */}
        <div className="flex gap-x-8 items-center">
          {/* phone number */}
          <div className="flex gap-x-3 items-center">
            <Image src={Phone} width={42} height={42} alt="Phone" />
            <div className="text-white">
              <div className="uppercase font-robotoCondensed font-medium leading-none text-sm">24/7 Pizza delivery service</div>
              <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide">01.44.52.38.97</div>
            </div>
          </div>
          {/* cart */}
          <div className="relative cursor-pointer hidden lg:flex">
            <Image src={Cart} width={38} height={38} alt="Cart" />
            {/* amount */}
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-sm font-robotoCondensed absolute -bottom-2 -right-1">
              3
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

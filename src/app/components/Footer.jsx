"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "/public/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6 justify-center">
          {/* logo */}
          <Link href={"#"} passHref>
            <Image src={Logo} alt="Logo" height={180} width={180} />
          </Link>
          {/* social icons */}
          <div className="flex gap-x-6 text-xl text-white">
            <Link href={"#"} passHref>
              <FaFacebook className="lg:hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
            </Link>
            <Link href={"#"} passHref>
              <FaYoutube className="lg:hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
            </Link>
            <Link href={"#"} passHref>
              <FaTwitter className="lg:hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
            </Link>
            <Link href={"#"} passHref>
              <FaInstagram className="lg:hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
            </Link>
          </div>
          {/* copyright */}
          <div className="font-medium text-white font-robotoCondensed">Copyright &copy; PizzaLand, 2023. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

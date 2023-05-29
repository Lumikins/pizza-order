"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
import PizzaDetails from "./PizzaDetails";

Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const Pizza = ({ pizza }) => {
  // modal state
  const [modal, setModal] = useState(false);

  // open modal
  const openModal = () => {
    setModal(true);
  };

  // close modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
      <Image
        onClick={openModal}
        className="lg:group-hover:-translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        src={pizza.image}
        width={270}
        height={270}
        alt="Our pizzas"
        priority={1}
      />
      {/* title */}
      <div>
        <div onClick={openModal} className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </div>
      {/* price and select button */}
      <div className="flex mb-6 items-center justify-between">
        {/* price */}
        <div className="hidden lg:flex text-xl font-semibold">
          starts at {pizza.priceSm}€
        </div>
        {/* select button */}
        <button
          onClick={openModal}
          className="hidden lg:flex gradient rounded-lg btn-sm font-semibold text-sm"
        >
          Choose
        </button>
        {/* small screen select button */}
        <button
          onClick={openModal}
          className="btn btn-sm gradient lg:hidden px-3 text-sm"
        >
          Starts at {pizza.priceSm}€
        </button>
      </div>
      {/* modal */}
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        >
          {/* close modal button */}
          <div onClick={closeModal} className="absolute z-30 right-2 top-2">
            <IoCloseOutline className="text-4xl text-orange hover:scale-110 duration-200 cursor-pointer" />
          </div>
          {/* pizza details */}
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default Pizza;

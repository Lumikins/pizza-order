"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import Success from "/public/success-1.gif";

const CheckoutDetails = ({ setModal }) => {
  const { cart, setCart, cartTotal } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = useState(false);
  const [count, setCount] = useState(5);

  // countdown
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);
      // clear timer
      return () => clearTimeout(timer);
    }
  }, [count, successMessage]);

  // close modal after timer
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(false);
        // clear cart
        setCart([]);
        // close modal
        setModal(false);
      }, 5000);
      // clear timer
      return () => clearTimeout(timer);
    }
  }, [successMessage, setCart, setModal]);

  return (
    <div>
      {successMessage ? (
        <div className="flex flex-col justify-center items-center h-screen lg:h-[600px] px-6">
          <h2 className="text-2xl font-semibold text-center">
            Thank you for your order
          </h2>
          <Image src={Success} width={150} height={150} alt="Success" />
          <div>
            This window will close in <span>{count}</span> seconds
          </div>
        </div>
      ) : (
        <div className="lg:gap-x-8 h-full lg:px-12 lg:py-8">
          {/* title */}
          <h2 className="mb-6 text-lg uppercase font-extrabold text-center lg:text-left pt-6 lg:pt-0 font-robotoCondensed">
            Delivery & Checkout
          </h2>
          <div className="h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4">
            {/* box 1 */}
            <div className="flex-1 h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0">
              {/* input wrapper */}
              <div className="flex flex-col gap-4 h-full">
                {/* full name */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Full name"
                  />
                </div>
                {/* phone & email */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Phone"
                  />
                </div>
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Email"
                />
                {/* address */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Address"
                  />
                </div>
                {/* textarea */}
                <div className="flex-1 h-full">
                  <textarea
                    className="textarea w-full h-full"
                    placeholder="Comments?"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* box 2 */}
            <div className="flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0">
              <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                <h3 className="text-base uppercase font-extrabold mb-4 border-b pb-4">
                  Your order
                </h3>
                {/* items */}
                <div className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-[240px] py-2">
                  {cart.map((pizza, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between text-base"
                      >
                        <div className="flex gap-x-2">
                          <div className="capitalize">{pizza.name}</div>
                          <div>{pizza.amount > 0 && `x ${pizza.amount}`}</div>
                        </div>
                        <div>
                          {parseFloat(pizza.price * pizza.amount).toFixed(2)}€
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* place order button */}
              <button
                onClick={() => setSuccessMessage(true)}
                className="btn btn-lg gradient w-full"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutDetails;

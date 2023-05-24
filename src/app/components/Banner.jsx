"use client";

import Image from "next/image";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Basil from "/public/basil.png";
import Chilli1 from "/public/chilli-1.png";
import Chilli2 from "/public/chilli-2.png";
import Garlic1 from "/public/garlic-1.png";
import Garlic2 from "/public/garlic-2.png";
import Garlic3 from "/public/garlic-3.png";
import PizzaBanner from "/public/pizza-banner.png";

const Banner = () => {
  return (
    <section className="bg-primary bg-pattern lg:min-h-[768px] pt-16">
      <div className="container mx-auto min-h-[768px] flex items-center justify-center">
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          resetOnLeave
          className="w-full flex flex-col lg:flex-row justify-between lg:justify-center items-center"
        >
          {/* text */}
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6 text-white">
              <div className="flex-1 lg:flex lg:flex-wrap">
                <div className="font-bangers text-3xl tracking-wider">
                  the best pizza in Paris
                </div>
                <h1 className="text-6xl font-bangers lg:text-8xl drop-shadow-lg">
                  perfection <br /> in every bite
                </h1>
              </div>
            </div>
          </MouseParallaxChild>
          {/* image */}
          <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
            {/* pizza image */}
            <div className="flex flex-col lg:flex-row items-center text-center flex-1 px-6 lg:px-10">
              <div className="flex flex-1 justify-end max-w-sm lg:max-w-max">
                <Image
                  src={PizzaBanner}
                  width={550}
                  height={558}
                  alt="Pizza banner"
                  priority={1}
                />
              </div>
            </div>
            {/* chilli image 1 */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute top-44 right-44 hidden xl:flex"
            >
              <Image
                src={Chilli1}
                width={160}
                height={84}
                alt="Chilli"
                priority={1}
              />
            </MouseParallaxChild>
            {/* chilli image 2 */}
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              className="absolute top-52 right-32 hidden xl:flex"
            >
              <Image
                src={Chilli2}
                width={130}
                height={84}
                alt="Chilli"
                priority={1}
              />
            </MouseParallaxChild>
            {/* garlic image 1 */}
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.6}
              className="absolute top-80 -left-24 hidden xl:flex"
            >
              <Image
                src={Garlic1}
                width={84}
                height={72}
                alt="Chilli"
                priority={1}
              />
            </MouseParallaxChild>
            {/* garlic image 2 */}
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className="absolute top-[22rem] -left-8 hidden xl:flex"
            >
              <Image
                src={Garlic2}
                width={100}
                height={72}
                alt="Chilli"
                priority={1}
              />
            </MouseParallaxChild>
            {/* garlic image 3 */}
            <MouseParallaxChild
              factorX={0.4}
              factorY={1}
              className="absolute top-96 -left-20 hidden xl:flex"
            >
              <Image
                src={Garlic3}
                width={100}
                height={72}
                alt="Chilli"
                priority={1}
              />
            </MouseParallaxChild>
            {/* basil image */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.2}
              className="absolute top-44 right-72 hidden xl:flex"
            >
              <Image
                src={Basil}
                width={180}
                height={72}
                alt="Chilli"
                priority={1}
              />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;

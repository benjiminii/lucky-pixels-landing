"use client";

import classNames from "classnames";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      className={classNames(
        "relative flex items-center justify-center flex-col h-screen w-full flex-grow"
        // "bg-dots bg-repeat bg-100"
        // "bg-hero-pop bg-contain bg-center bg-no-repeat 2xl:bg-auto"
      )}
    >
      <div className="self-center relative text-[70px] md:text-[100px] text-[#F2F2F2] z-30">
        <h1 className="relative top-7 md:top-10 text-center">Your Brand</h1>
        <h1 className="relative bottom-7 md:bottom-10 text-center">
          Our Canvas.
        </h1>
        <img
          src="/hero/crown.png"
          className="absolute w-[100px] md:w-[150px] top-0 right-5 md:right-10 md:top-0"
        />
      </div>
      <img src="/hero/pop.png" className="absolute w-2/3 z-10" />
      <button className="absolute bottom-5 right-5">
        <img
          src="/hero/arrow.png"
          className="w-[40px] absolute top-[70px] left-[80px]"
        />
        <motion.img
          src="/hero/circle.png"
          className="w-[200px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </button>
    </div>
  );
}

export default Hero;

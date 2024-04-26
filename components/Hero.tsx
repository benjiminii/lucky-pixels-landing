"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { scrollAnimation } from "@/constants/motion.constant";
import CustomFont from "next/font/local";
import Image from "next/image";
import heroImage from "@/public/hero/new/hero.png";

const customFont1 = CustomFont({
  src: "../public/grotesque-font/RG-StandardSemibold.ttf",
});

function Hero() {
  return (
    <motion.div
      className={classNames(
        "relative flex items-center justify-center flex-col h-screen w-full flex-grow"
      )}
      initial="offscreen"
      whileInView="onscreen"
      variants={scrollAnimation}
    >
      <Image
        src={heroImage}
        alt="protection"
        width={heroImage.width}
        height={heroImage.height}
        className="max-w-[1092px] w-screen"
      />
      <img
        src="/hero/new/sound.png"
        className="w-[200px] md:w-[300px] lg:w-[500px] absolute top-[70px] left-[10px]"
      />
      <img
        src="/hero/new/eye.png"
        className="w-[100px] md:w-[200px] lg:w-[300px] absolute top-[70px] left-[72%]"
      />
      <img
        src="/hero/new/cube.png"
        className="w-[100px] md:w-[150px] lg:w-[250px] absolute top-[40%] left-[85%]"
      />
      <img
        src="/hero/new/starSmall.png"
        className="w-[20px] md:w-[40px] lg:w-[60px] absolute top-[40%] left-[90%]"
      />
      <img
        src="/hero/new/starSmall.png"
        className="w-[20px] md:w-[40px] lg:w-[60px] absolute top-[60%] left-[100px]"
      />
      <img
        src="/hero/new/star.png"
        className="w-[100px] md:w-[200px] lg:w-[300px] absolute top-[65%] left-[200px]"
      />
      <div className="absolute bottom-5 right-5 overflow-hidden">
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
      </div>
    </motion.div>
  );
}

export default Hero;

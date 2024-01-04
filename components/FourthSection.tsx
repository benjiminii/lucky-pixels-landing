"use client";

import { motion } from "framer-motion";

function FourthSection() {
  return (
    <section className="grid md:grid-cols-2 p-10" id="4th">
      <div className="relative p-10">
        <h2 className="text-[50px]">LUCKY PIXELS ROAD MAP</h2>
        <img src="hand.png" />
        <img src="zap.png" className="absolute top-0 left-0" />
      </div>
      <div className="relative">
        <img src="zap.png" className="absolute left-[50%] top-10" />
        <img src="zap.png" className="absolute left-40 bottom-0" />

        <button className="absolute bottom-5 right-5">
          <img
            src="/hero/arrow.png"
            className="w-[40px] absolute top-[70px] left-[80px] -rotate-90"
          />
          <motion.img
            src="/hero/circle.png"
            className="w-[200px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </button>
      </div>
    </section>
  );
}

export default FourthSection;

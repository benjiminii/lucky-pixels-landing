"use client";

import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/components/wrapper/MotionWrapper";
import { FaCircleCheck } from "react-icons/fa6";

function RoadmapSection() {
  return (
    <section id="roadmap">
      <ScrollAnimationWrapper className="grid md:flex md:flex-row p-10">
        <div className="w-screen">
          <div className="relative p-10">
            <h2 className="text-[50px]">LUCKY PIXELS ROAD MAP</h2>
            <img src="hand.png" />
            <img src="zap.png" className="absolute top-0 left-0" />
          </div>
          <div className="relative">
            <img src="zap.png" className="absolute left-[50%] top-10" />
            <img src="zap.png" className="absolute left-40 bottom-0" />
            <div className="absolute bottom-5 right-5 overflow-hidden">
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
            </div>
          </div>
        </div>
        <div className="p-10 relative flex">
          <div className="grid lg:grid-cols-5 w-full gap-6 z-10">
            <div className="col-span-2 flex flex-col gap-10">
              <h2 className="text-[50px]">Upcoming</h2>
              <div className="bg-main w-[300px] h-2" />
              <div className="flex flex-col font-thin text-[30px] gap-y-10">
                <div className="flex items-center gap-x-2">
                  <FaCircleCheck color="#808080" />
                  Global Expansion Upcoming
                </div>
                <div className="flex items-center gap-x-2 gap-y-6">
                  <FaCircleCheck color="#808080" />
                  Real Estate Finance Utility Upcoming
                </div>
              </div>
            </div>
            <div className="col-span-3 flex flex-col gap-10">
              <h2 className="text-[50px]">Completed $ Highlighted</h2>
              <div className="bg-main w-[300px] h-2" />
              <div className="flex flex-col font-thin text-[30px] gap-y-10">
                <div className="flex items-center gap-x-2">
                  <FaCircleCheck color="#D0F500" />
                  Global Expansion Completed
                </div>
                <div className="flex items-center gap-x-2 gap-y-6">
                  <FaCircleCheck color="#D0F500" />
                  Real Estate Finance Utility Completed
                </div>
                <div className="flex items-center gap-x-2">
                  <FaCircleCheck color="#D0F500" />
                  Stick sausage in president’s mouth Completed
                </div>
                <div className="flex items-center gap-x-2">
                  <FaCircleCheck color="#D0F500" />
                  Writing these just for the layout Completed
                </div>
              </div>
            </div>
          </div>

          <img src="zap.png" className="absolute bottom-10 left-10" />
          <img src="zap.png" className="absolute top-[40%] left-[30%]" />
          <img src="zap.png" className="absolute top-40 left-[65%]" />
          <img src="zap.png" className="absolute bottom-5 right-5" />
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}

export default RoadmapSection;

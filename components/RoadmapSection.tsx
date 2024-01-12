"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/components/wrapper/MotionWrapper";
import { FaCircleCheck } from "react-icons/fa6";
import classNames from "classnames";
import HorizontalScroll from "react-scroll-horizontal";

function RoadmapSection() {
  const [clientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);
  }, []);

  if (!clientSide) return <></>;
  return (
    <section id="roadmap" className="flex flex-grow h-[600px] md:h-[700px]">
      <HorizontalScroll
        reverseScroll={true}
        config={{ stiffness: 10, damping: 5 }}
        className={"hidden md:flex"}
      >
        <ScrollAnimationWrapper className="p-10 w-screen">
          <div className="relative p-10 h-fit">
            <h2 className="text-[50px]">LUCKY PIXELS ROAD MAP</h2>
            <img src="hand.png" width={500} height={500} />
            <img src="zap.png" className="absolute top-0 left-0" />
          </div>
          <div className="relative">
            <img src="zap.png" className="absolute left-[50%] top-0" />
            <img src="zap.png" className="absolute left-40 bottom-0" />
            <div className="absolute bottom-[400px] right-0 md:bottom-0 md:right-5 overflow-hidden">
              <img
                src="/hero/arrow.png"
                className="w-[20px] md:w-[40px] absolute top-[35px] left-[40px]  md:top-[70px] md:left-[80px] -rotate-90"
              />
              <motion.img
                src="/hero/circle.png"
                className="w-[100px] md:w-[200px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </div>
        </ScrollAnimationWrapper>
        <Roadmap className={"w-screen"} />
      </HorizontalScroll>
      <div className="flex flex-col md:hidden">
        <ScrollAnimationWrapper className="p-10 w-screen">
          <div className="relative p-10 h-fit">
            <h2 className="text-[50px]">LUCKY PIXELS ROAD MAP</h2>
            <img src="hand.png" width={500} height={500} />
            <img src="zap.png" className="absolute top-0 left-0" />
          </div>
          <div className="relative">
            <img src="zap.png" className="absolute left-[50%] top-0" />
            <img src="zap.png" className="absolute left-40 bottom-0" />
            <div className="absolute hidden md:block bottom-0 right-5 overflow-hidden">
              <img
                src="/hero/arrow.png"
                className="w-[40px] absolute top-[70px] left-[80px] -rotate-90"
              />
              <motion.img
                src="/hero/circle.png"
                className="w-[100px] md:w-[200px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </div>
        </ScrollAnimationWrapper>
        <Roadmap className={"w-screen"} />
      </div>
    </section>
  );
}

function Roadmap({ className }: any) {
  return (
    <div
      className={classNames("p-10 relative flex w-screen flex-grow", className)}
    >
      <div className="grid md:grid-cols-5 w-full gap-6 z-10">
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
  );
}

export default RoadmapSection;

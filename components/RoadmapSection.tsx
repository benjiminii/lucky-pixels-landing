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
    <section
      id="roadmap"
      className="flex flex-grow h-[600px] md:h-[700px]"
    ></section>
  );
}

export default RoadmapSection;

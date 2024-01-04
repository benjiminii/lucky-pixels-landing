"use client";

import { motion } from "framer-motion";
import { scrollAnimation } from "@/constants/motion.constant";

function ScrollAnimationWrapper({
  children,
  className,
  viewPortAmount = 0.15,
  ...props
}: any) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: viewPortAmount }}
      {...props}
    >
      <motion.div variants={scrollAnimation} className={className}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default ScrollAnimationWrapper;

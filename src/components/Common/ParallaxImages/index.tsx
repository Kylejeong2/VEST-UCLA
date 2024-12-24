"use client";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 200,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 500], [0, 2], {
    clamp: true,
  });

  const x = useTransform(
    baseX,
    [-20, -45],
    ["-20%", "-45%"]
  );

  const directionFactor = useRef<number>(1);
  const requestRef = useRef<number>();

  useEffect(() => {
    const updateAnimation = (time: number) => {
      const delta = time - (requestRef.current || time);
      let moveBy = directionFactor.current * baseVelocity * (delta / 2000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
      requestRef.current = time;
      requestAnimationFrame(updateAnimation);
    };

    requestRef.current = requestAnimationFrame(updateAnimation);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [baseVelocity, baseX, velocityFactor]);

  return (
    <div className="parallax">
      <motion.div 
        className="scroller" 
        style={{ x, willChange: "transform" }}
      >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;

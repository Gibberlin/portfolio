"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;
const easeSwift = [0.16, 1, 0.3, 1] as const;

type RouteTransitionProps = {
  children: ReactNode;
};

export default function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className="min-w-0 flex-1">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 24, scale: 0.985, filter: "saturate(0.88)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "saturate(1)" }}
        exit={{ opacity: 0, y: -10, scale: 0.992, filter: "saturate(1.08)" }}
        transition={{
          opacity: { duration: 0.5, ease: easeOut },
          y: { duration: 0.56, ease: easeSwift },
          scale: { duration: 0.45, ease: easeOut },
          filter: { duration: 0.42, ease: easeOut },
        }}
        className="route-stage min-w-0 flex-1"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

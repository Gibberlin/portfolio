"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function BackgroundPulse() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    setPulseKey((current) => current + 1);
  }, [pathname, reduceMotion]);

  if (reduceMotion) {
    return null;
  }

  return (
    <div
      key={pulseKey}
      aria-hidden="true"
      className="background-pulse pointer-events-none fixed inset-0 z-[1]"
    />
  );
}

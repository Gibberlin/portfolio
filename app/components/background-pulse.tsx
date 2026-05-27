"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BackgroundPulse() {
  const pathname = usePathname();
  const [pulseKey, setPulseKey] = useState(0);

  // Keep pulse key changes so the background-pulse can restart when pathname changes.
  useEffect(() => {
    setPulseKey((current) => current + 1);
  }, [pathname]);

  return (
    <div
      key={pulseKey}
      aria-hidden="true"
      className="background-pulse pointer-events-none fixed inset-0 z-[1]"
    />
  );
}

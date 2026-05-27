"use client"

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type RouteTransitionProps = {
  children: ReactNode;
};

// Animations disabled per request — render children directly.
export default function RouteTransition({ children }: RouteTransitionProps) {
  // keep pathname referenced so component updates with navigation
  usePathname();

  return <div className="min-w-0 flex-1">{children}</div>;
}

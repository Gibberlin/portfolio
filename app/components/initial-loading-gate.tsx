"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/app/components/loading-screen";

type InitialLoadingGateProps = {
  children: React.ReactNode;
};

const LOADING_SCREEN_MIN_DURATION_MS = 1800;

export default function InitialLoadingGate({ children }: InitialLoadingGateProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLoader(false);
    }, LOADING_SCREEN_MIN_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden={showLoader}
        className={showLoader ? "pointer-events-none invisible" : ""}
      >
        {children}
      </div>
      {showLoader ? <LoadingScreen overlay /> : null}
    </>
  );
}

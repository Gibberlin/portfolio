"use client"

import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class AnimationErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    // Log the animation error for debugging
    // eslint-disable-next-line no-console
    console.error("AnimationErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render children directly without animations to recover
      // This prevents animation-related errors from blocking navigation
      return <div className="min-w-0 flex-1">{this.props.children}</div>;
    }

    return this.props.children as React.ReactElement;
  }
}

"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to console for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="max-w-md rounded-lg border-4 border-[var(--border-color)] bg-[var(--card-bg)] p-6 text-center">
              <h1 className="text-2xl font-bold text-[var(--text-color)] mb-2">
                ⚠️ Something went wrong
              </h1>
              <p className="text-[var(--text-color)] mb-4">
                We encountered an unexpected error. Please try refreshing the page.
              </p>
              {process.env.NODE_ENV === "development" && this.state.error && (
                <details className="mt-4 text-left">
                  <summary className="cursor-pointer font-mono text-xs text-[var(--muted-text)]">
                    Error details (dev only)
                  </summary>
                  <pre className="mt-2 overflow-auto bg-[var(--background)] p-2 text-xs text-[var(--text-color)] rounded">
                    {this.state.error.toString()}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
              <button
                onClick={() => window.location.reload()}
                className="mt-4 inline-block border-4 border-[var(--border-color)] bg-[var(--accent-primary)] px-4 py-2 font-bold text-[var(--page-bg)] transition-transform hover:-translate-y-0.5"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

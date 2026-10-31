import { Component, type ErrorInfo, type ReactNode } from "react";

export default class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error?: Error }> {
  state: { hasError: boolean; error?: Error } = { hasError: false, error: undefined };
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "4rem 2rem", textAlign: "center", fontFamily: "sans-serif" }}>
          <h2 style={{ fontSize: "1.8rem", color: "#101f38", marginBottom: "1rem" }}>Something went wrong.</h2>
          <p style={{ color: "#526078", marginBottom: "2rem" }}>{this.state.error?.message || "An unexpected error occurred."}</p>
          <button className="button" onClick={() => window.location.reload()}>Reload page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

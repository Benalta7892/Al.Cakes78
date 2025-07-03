"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 10000,
        className: "double-bordered-toast",
        style: {
          background: "var(--background)",
          color: "var(--color-chocolate)",
          borderRadius: 0,
          border: "2px solid var(--color-caramel)",
          padding: "10px",
          filter: "drop-shadow(rgba(0, 0, 0, 0.5) 2px 4px 20px)",
        },
      }}
    />
  );
}

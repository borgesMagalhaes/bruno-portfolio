import React from "react";

export function Button({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-800 ${className}`} {...props}>
      {children}
    </button>
  );
}

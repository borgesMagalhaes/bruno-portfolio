import React from "react";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 rounded-lg shadow-md ${className || "bg-gray-800"}`}>{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

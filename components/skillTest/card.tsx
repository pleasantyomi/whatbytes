import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({  children }: CardProps) {
  return (
    <div
      className="border-[1px] border-gray-300 px-3 py-5 rounded-xl w-full"
    >
      {children}
    </div>
  );
}

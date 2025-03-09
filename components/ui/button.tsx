import { MouseEventHandler } from "react";
import React from "react";

interface ButtonProps {
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function Button({ className, children, onClick }: ButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${className} bg-blue-900 rounded-xl py-2 px-6`}
      >
        {children}
      </button>
    </div>
  );
}

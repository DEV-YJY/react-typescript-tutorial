import React, { EventHandler, ReactEventHandler } from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

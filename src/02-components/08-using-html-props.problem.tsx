import React from "react";

export const Button = ({ className, ...rest }: {
  className?: string
  onClick: React.MouseEventHandler
  type: "button" | "submit" | "reset"
}) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};

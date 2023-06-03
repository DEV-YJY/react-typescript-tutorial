import React, { JSXElementConstructor } from "react";

interface Props {
  className: string;
}

export const Button: React.FC<Props> = (props) => {
  return <div></div>;
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};

import React from "react";

interface Props {
  className: string;
}

/* @ts-expect-error */
export const Button: React.FC<props> = (props: Props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};

import React from "react";

type ButtonPropsType = {
  className: string
}

export const Button = (props: ButtonPropsType)  => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};

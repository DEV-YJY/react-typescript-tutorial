import React, {ComponentProps} from "react";


type ExtraType = ComponentProps<'button'> &  {
  myDiv?: string
}


export const Button = ({ className, ...rest }: ExtraType) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};

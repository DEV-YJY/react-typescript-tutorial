import React from "react";

export const Button = (props: {}) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};

<div
  className={classNames(
    "absolute z-[99] flex h-[calc(100vh-4rem)] transform select-none flex-col border-2 border-secondary-701 bg-secondary-800 py-1 pt-5 text-white transition-all duration-300",
    !sidebarIsOpen ? "w-min px-6" : " w-max px-10",
    props.className
  )}
  onMouseOver={() => setSidebarIsOpen(true)}
  onMouseLeave={() => handleMouseLeave()}
  // style={{ position: pinSideBar ? "relative" : "fixed" }}
></div>;



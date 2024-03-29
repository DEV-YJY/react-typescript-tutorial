import { useRef } from "react";

export const Component = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return <div ref={ref} />;
};

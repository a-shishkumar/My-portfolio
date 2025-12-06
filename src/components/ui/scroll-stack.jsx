import React from "react";

const ScrollStack = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col gap-6 overflow-y-auto max-h-[400px] ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollStack;

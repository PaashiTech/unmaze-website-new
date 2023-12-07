import React from "react";

type TextProps = {
  children: React.ReactNode;
  size: "md" | "lg" | "xl";
  className?: React.ComponentProps<"div">["className"];
};

const Text: React.FC<TextProps> = ({ children, size, className }) => {
  return <p className={`text-${size} leading-6 ${className}`}>{children}</p>;
};

export default Text;

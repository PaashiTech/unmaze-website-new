import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children, size, className, ...props }) => {
  return (
    <p {...props} className={cn(textVariants({ size, className }))}>
      {children}
    </p>
  );
};

const textVariants = cva("font-font-body", {
  variants: {
    size: {
      /*
       * Body-5
       */
      xs: "text-[0.75rem] lg:text-[1rem] leading-[1rem] lg:leading-[1.25rem] tracking-[0.045rem] lg:tracking-[0.06rem]",

      /*
       * Body-4
       */
      sm: "text-[0.875rem] lg:text-[1rem] leading-[1.125rem] lg:leading-[1.25rem] tracking-[0.0525rem] lg:tracking-[0.06rem]",

      /*
       * Body-3
       */
      md: "text-[1rem] lg:text-[1.25rem] leading-[1.25rem] lg:leading-[1.5rem] tracking-[0.06rem] lg:tracking-[0.075rem]",

      /*
       * Body-2
       */
      lg: "text-[1.125rem] lg:text-[1.5rem] leading-[1.5rem] lg:leading-[2rem] tracking-[0.0675rem] lg:tracking-[0.09rem]",

      /*
       * Body-1
       */
      xl: "font-medium text-[1.25rem] lg:text-[1.625rem] leading-[1.75rem] lg:leading-[2.25rem] tracking-[0.05rem] lg:tracking-[0.105rem]",

      /*
       * Highlight
       */
      highlight:
        "font-semibold text-[0.875rem] leading-[1.125rem] tracking-[0.0175rem]",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export default Text;

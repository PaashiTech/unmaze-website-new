import { HTMLAttributes } from "react";
import { cn } from "../../../utils/cn";
import { VariantProps, cva } from "class-variance-authority";

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
}

const Heading: React.FC<HeadingProps> = ({
  children,
  as: Component = "h2",
  variant,
  className,
  ...props
}) => {
  if (variant === "sub-heading-1" || variant === "sub-heading-2") {
    Component = "h3";
  }

  return (
    <Component
      {...props}
      className={cn(headingVariants({ variant, className }))}
    >
      {children}
    </Component>
  );
};

const headingVariants = cva("font-font-heading", {
  variants: {
    variant: {
      "heading-1":
        "font-semibold text-[3rem] lg:text-[4.5rem] leading-[3rem] lg:leading-[5rem] tracking-[0.12rem] lg:tracking-[0.18rem]",
      "heading-2":
        "font-semibold text-[1.5rem] lg:text-[3.5rem] leading-[1.5rem] lg:leading-[3.5rem] tracking-[0.06rem] lg:tracking-[0.12rem]",
      "heading-3":
        "font-bold text-[1.25rem] lg:text-[2rem] leading-[1.5rem] lg:leading-[2.5rem] tracking-[0.05rem] lg:tracking-[0.08rem]",
      "sub-heading-1":
        "font-medium text-[1.25rem] lg:text-[2rem] leading-[1.5rem] lg:leading-[2.5rem] tracking-[0.15rem] lg:tracking-[0.32rem]",
      "sub-heading-2":
        "font-medium text-[0.875rem] lg:text-[1.5rem] leading-[1.125rem] lg:leading-[2rem] tracking-[0.105rem] lg:tracking-[0.18rem]",
    },
  },
  defaultVariants: {
    variant: "heading-1",
  },
});

export default Heading;

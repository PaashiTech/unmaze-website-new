type HeadingProps = {
  children: React.ReactNode;
  as: "h1" | "h2" | "h3";
  className?: React.ComponentProps<"div">["className"];
};

const Heading: React.FC<HeadingProps> = ({
  children,
  as: Component,
  className,
}) => {
  return (
    <Component className={`font-font-heading ${className}`}>
      {children}
    </Component>
  );
};

export default Heading;

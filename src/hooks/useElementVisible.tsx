import { useRef, useState, useEffect } from "react";

const useElementVisible = () => {
  const contaierRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = contaierRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.35,
      },
    );

    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, [contaierRef]);

  return { contaierRef, isVisible };
};

export default useElementVisible;

import { useRef, useState, useEffect } from "react";

const useElementStuck = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsStuck(e.intersectionRatio === 0);
      },
      {
        rootMargin: "-72px",
        threshold: [0, 1],
      },
    );

    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, [containerRef]);

  return { containerRef, isStuck };
};

export default useElementStuck;

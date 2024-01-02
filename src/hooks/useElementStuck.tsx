import { useRef, useState, useEffect } from "react";

const useElementStuck = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWatcher = document.createElement("div");
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsStuck(!e.isIntersecting && e.boundingClientRect.top < 72);
      },
      { rootMargin: "-71px", threshold: 1 },
    );

    if (container) {
      container.before(scrollWatcher);
      observer.observe(scrollWatcher);
    }

    return () => {
      if (container) observer.unobserve(scrollWatcher);
    };
  }, [containerRef]);

  return { containerRef, isStuck };
};

export default useElementStuck;

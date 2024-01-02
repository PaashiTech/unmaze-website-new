import { useEffect, useRef, useState } from "react";

export const useElementPosition = (offset: number) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOnTop, setIsOnTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        setIsOnTop(top <= offset);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, offset]);

  return { isOnTop, ref };
};

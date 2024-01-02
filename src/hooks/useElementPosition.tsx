import { useEffect, useRef, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export const useElementPosition = (offset: number) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOnTop, setIsOnTop] = useState(false);
  const isOnTopDebouned = useDebounce(isOnTop, 100);

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

  return { isOnTop: isOnTopDebouned, ref };
};

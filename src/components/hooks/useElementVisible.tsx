import { useRef, useState, useEffect } from "react";

const useElementVisible = () => {
  const contaierRefOne = useRef<HTMLDivElement>(null);
  const contaierRefTwo = useRef<HTMLDivElement>(null);
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);

  useEffect(() => {
    const containerOne = contaierRefOne.current;
    const containerTwo = contaierRefTwo.current;
    const observerOne = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisibleOne(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.35,
      },
    );
    const observerTwo = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisibleTwo(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.725,
      },
    );
    if (containerOne) observerOne.observe(containerOne);
    if (containerTwo) observerTwo.observe(containerTwo);

    return () => {
      if (containerOne) observerOne.unobserve(containerOne);
      if (containerTwo) observerTwo.unobserve(containerTwo);
    };
  }, [contaierRefOne, contaierRefTwo]);

  return { contaierRefOne, contaierRefTwo, isVisibleOne, isVisibleTwo };
};

export default useElementVisible;

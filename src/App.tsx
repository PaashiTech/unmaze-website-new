import { useRef, useState, useEffect } from "react";
import "./App.css";
import Careers from "./components/Careers/Careers";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import Waitlist from "./components/Waitlist/Waitlist";
import Whitepaper from "./components/Whitepaper/Whitepaper";
import WaitlistSticky from "./components/Waitlist/WaitlistSticky";

function App() {
  const contaierRefOne = useRef<HTMLDivElement>(null);
  const contaierRefTwo = useRef<HTMLDivElement>(null);
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);

  const callbackOne = (entries: any) => {
    const [entry] = entries;
    setIsVisibleOne(entry.isIntersecting);
  };

  const callbackTwo = (entries: any) => {
    const [entry] = entries;
    setIsVisibleTwo(entry.isIntersecting);
  };

  useEffect(() => {
    const optionsOne = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const optionsTwo = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    };

    const observerOne = new IntersectionObserver(callbackOne, optionsOne);
    const observerTwo = new IntersectionObserver(callbackTwo, optionsTwo);
    if (contaierRefOne.current) observerOne.observe(contaierRefOne.current);
    if (contaierRefTwo.current) observerTwo.observe(contaierRefTwo.current);

    return () => {
      if (contaierRefOne.current) observerOne.unobserve(contaierRefOne.current);
      if (contaierRefTwo.current) observerTwo.unobserve(contaierRefTwo.current);
    };
  }, [contaierRefOne, contaierRefTwo]);

  return (
    <div className="relative h-screen">
      <div className="flex flex-col h-screen overflow-scroll">
        <Navbar />
        <Hero />
        <div ref={contaierRefOne}>
          <Waitlist type="first" />
        </div>
        <Features />
        <Whitepaper />
        <Team />
        <Careers />
        <div ref={contaierRefTwo}>
          <Waitlist type="second" />
        </div>

        <Footer />
      </div>
      {!isVisibleOne && !isVisibleTwo && <WaitlistSticky type="second" />}
    </div>
  );
}

export default App;

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
import useElementVisible from "./hooks/useElementVisible";

function App() {
  const { contaierRefOne, contaierRefTwo, isVisibleOne, isVisibleTwo } =
    useElementVisible();

  const isWaitListVisible = !isVisibleOne && !isVisibleTwo;

  return (
    <div className="relative flex h-[100dvh] flex-col">
      <Navbar />
      <div
        className={`h-[calc(100dvh - 4.75rem)] flex flex-col overflow-x-hidden overflow-y-scroll scroll-smooth`}
      >
        <Hero />
        <div ref={contaierRefOne}>
          <Waitlist type="first" />
        </div>
        <Features />
        <Whitepaper />
        <Team />
        <Careers />
        <div ref={contaierRefTwo} className="lg:hidden">
          <Waitlist type="second" />
        </div>
        <Footer />
        {isWaitListVisible && (
          <WaitlistSticky type="second" isWaitListVisible />
        )}
      </div>
    </div>
  );
}

export default App;

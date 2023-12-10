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
import useElementVisible from "./components/hooks/useElementVisible";

function App() {
  const { contaierRefOne, contaierRefTwo, isVisibleOne, isVisibleTwo } =
    useElementVisible();

  return (
    <div className="relative h-[100dvh]">
      <div className="flex h-full flex-col overflow-scroll overflow-x-hidden scroll-smooth">
        <Navbar />
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
      </div>
      {!isVisibleOne && !isVisibleTwo && <WaitlistSticky type="second" />}
    </div>
  );
}

export default App;

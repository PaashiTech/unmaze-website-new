import "./App.css";
import Careers from "./components/Careers/Careers";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import Waitlist from "./components/Waitlist/Waitlist";
import Whitepaper from "./components/Whitepaper/Whitepaper";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Waitlist type="first" />
      <Features />
      <Whitepaper />
      <Team />
      <Careers />
      <Waitlist type="second" />
      <Footer />
    </div>
  );
}

export default App;

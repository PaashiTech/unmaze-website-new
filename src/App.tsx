import "./App.css";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Waitlist from "./components/Waitlist/Waitlist";
import Whitepaper from "./components/Whitepaper/Whitepaper";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Waitlist />
      <Features />
      <Whitepaper />
    </div>
  );
}

export default App;

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Careers from "./components/Careers/Careers";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import Waitlist from "./components/Waitlist/Waitlist";
import Whitepaper from "./components/Whitepaper/Whitepaper";
// import WaitlistSticky from "./components/Waitlist/WaitlistSticky";
// import useElementVisible from "./hooks/useElementVisible";

function App() {
  // const { contaierRefOne, contaierRefTwo, isVisibleOne, isVisibleTwo } =
  //   useElementVisible();

  // const isWaitListVisible = !isVisibleOne && !isVisibleTwo;

  return (
    <div className="relative flex h-[100dvh] flex-col">
      <Navbar />
      <div
        className={`flex h-[calc(100dvh-4.5rem)] flex-col overflow-x-hidden overflow-y-scroll scroll-smooth`}
      >
        <Hero />
        {/* <div ref={contaierRefOne} data-testid="waitlist-top"> */}
        <Waitlist type="first" />
        {/* </div> */}
        <Features />
        <Whitepaper />
        <Team />
        <Careers />
        <div
          // ref={contaierRefTwo}
          className="lg:hidden"
        >
          <Waitlist type="second" />
        </div>
        <Footer />
        {/* {isWaitListVisible && (
          <WaitlistSticky type="second" isWaitListVisible />
        )} */}
      </div>
      <ToastContainer
        position={window.innerWidth <= 1024 ? "top-center" : "bottom-right"}
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeButton={false}
        rtl={false}
      />
    </div>
  );
}

export default App;

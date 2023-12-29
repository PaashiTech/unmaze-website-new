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
import SurveyBanner from "./components/_UI/SurveyBanner";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Waitlist type="first" />
        <SurveyBanner />
        <Features />
        <Whitepaper />
        <Team />
        <Careers />
        <div className="lg:hidden">
          <Waitlist type="second" />
        </div>
        <Footer />
      </div>
      <ToastContainer
        position={window.innerWidth <= 1024 ? "top-center" : "bottom-right"}
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeButton={false}
        closeOnClick={false}
        pauseOnHover={false}
        draggable={false}
        rtl={false}
      />
    </>
  );
}

export default App;

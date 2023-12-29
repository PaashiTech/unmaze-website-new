import "./Whitepaper.css";
import arrowMobile from "../../assets/whitepaper-arrows/whitepaper-arrow-mobile.svg";
import arrowDesktop from "../../assets/whitepaper-arrows/whitepaper-arrow-desktop.svg";
import Heading from "../_UI/Typography/Heading";
import StarIcon from "../_UI/StarIcon";
import Text from "../_UI/Typography/Text";

const Whitepaper = () => {
  return (
    <div
      id="resources"
      className="flex justify-center bg-white px-5 py-8 lg:justify-start lg:bg-[#e1f0f0] lg:p-0"
    >
      <div className="gradient rounded-[1.25rem] px-9 py-12 text-primary-green lg:bg-gradient-to-r  lg:from-[#e1f0f0] lg:to-[#e1f0f0] lg:px-[5.625rem] lg:py-16 ">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-[0.375rem] font-font-heading lg:gap-3">
            <Heading variant="sub-heading-2">Our Research</Heading>
            <a
              href="/Unmaze__Article__Portfolio_Optimization.pdf"
              target="_blank"
              className="flex shrink-0"
            >
              <Heading variant="heading-2">
                <StarIcon /> The art of mindful investing
              </Heading>
            </a>
          </div>
          <div className="flex gap-6 lg:gap-6">
            <Text size="lg" className="lg:hidden">
              Bridging the gap between theory and practice
            </Text>
            <Text size="lg" className="hidden lg:block lg:max-w-[60.5rem]">
              In this paper, Unmaze.app gives you actionable insights on two
              most widely used decision frameworks (MVT and BPT), along with a
              cutting edge technique that combines both.
            </Text>
            <a
              href="/Unmaze__Article__Portfolio_Optimization.pdf"
              target="_blank"
              className="flex shrink-0"
            >
              <picture>
                <source srcSet={arrowDesktop} media="(min-width: 1024px)" />
                <img
                  src={arrowMobile}
                  alt="arrow-icon"
                  className="mt-4 self-start "
                />
              </picture>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;

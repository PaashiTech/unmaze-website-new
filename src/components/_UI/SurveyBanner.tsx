import Text from "./Typography/Text";
import arrowBanner from "../../assets/arrow_banner.svg";
import arrowBannerGreen from "../../assets/arrow_banner_green.svg";
import useElementStuck from "../../hooks/useElementStuck";

const SurveyBanner = () => {
  const { containerRef, isStuck } = useElementStuck();

  return (
    <div
      ref={containerRef}
      className={`lg:py-0.5rem sticky top-[71px] z-20 flex justify-center ${
        isStuck
          ? "bg-primary-green text-white"
          : "bg-gradient-banner text-primary-green"
      } z-50 py-[0.375rem]  transition-colors lg:gap-2 lg:px-[5.625rem] lg:py-[0.5rem]`}
    >
      <a
        href="https://forms.office.com/r/n84Gedffn9"
        target="_blank"
        className="flex gap-1"
      >
        <Text size="sm" className="whitespace-nowrap font-medium lg:hidden">
          Take our personal finance survey <u>here</u>
        </Text>
        <Text
          size="sm"
          className="hidden whitespace-nowrap font-medium lg:block"
        >
          Help us solve your pain points, take our{" "}
          <span className={`${isStuck ? "text-[#ccfd62]" : "text-inherit"}`}>
            personal finance survey
          </span>{" "}
          <u>here</u>
        </Text>
        <img src={isStuck ? arrowBanner : arrowBannerGreen} alt="arrow" />
      </a>
    </div>
  );
};

export default SurveyBanner;

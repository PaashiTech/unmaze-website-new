import Text from "./Typography/Text";
import arrowBanner from "../../assets/arrow_banner.svg";
import arrowBannerGreen from "../../assets/arrow_banner_green.svg";
import { useElementPosition } from "../../hooks/useElementPosition";

const SurveyBanner = () => {
  // Top offset is set to 72px as the element sticks to top below the navbar
  const { isOnTop, ref } = useElementPosition(72);

  return (
    <div
      ref={ref}
      className={`lg:py-0.5rem sticky top-[72px] z-20 flex justify-center ${
        isOnTop
          ? "bg-primary-green text-white"
          : "bg-gradient-banner text-primary-green"
      } z-50 py-[0.375rem]  transition-colors lg:gap-2 lg:px-[5.625rem] lg:py-[0.5rem]`}
    >
      <a
        href="https://forms.office.com/r/XfgPg39D3i"
        target="_blank"
        className="flex gap-1"
      >
        <Text size="sm" className="font-medium lg:hidden">
          Join our personal finance survey <u>here</u>
        </Text>
        <Text size="sm" className="hidden font-medium lg:block">
          Help us solve your pain points, join our{" "}
          <span className={`${isOnTop ? "text-[#ccfd62]" : "text-inherit"}`}>
            personal finance survey
          </span>{" "}
          <u>here</u>
        </Text>
        <img src={isOnTop ? arrowBanner : arrowBannerGreen} alt="arrow" />
      </a>
    </div>
  );
};

export default SurveyBanner;

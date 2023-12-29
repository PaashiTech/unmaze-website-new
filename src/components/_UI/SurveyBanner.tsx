import Text from "./Typography/Text";
import arrowBanner from "../../assets/arrow_banner.svg";
import arrowBannerGreen from "../../assets/arrow_banner_green.svg";
import useElementStuck from "../../hooks/useElementStuck";

const SurveyBanner = ({ isAboveVisible }: { isAboveVisible: boolean }) => {
  const { containerRef, isStuck } = useElementStuck();
  const isReallyStuck = !isAboveVisible && isStuck;

  return (
    <>
      <div
        ref={containerRef}
        className={`min-h-[1px] min-w-[1px] ${
          isReallyStuck
            ? "bg-primary-green text-white"
            : "bg-gradient-banner text-primary-green"
        }`}
      ></div>
      <div
        className={`lg:py-0.5rem sticky top-[72px] z-20 flex justify-center ${
          isReallyStuck
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
            <span
              className={`${isReallyStuck ? "text-[#ccfd62]" : "text-inherit"}`}
            >
              personal finance survey
            </span>{" "}
            <u>here</u>
          </Text>
          <img
            src={isReallyStuck ? arrowBanner : arrowBannerGreen}
            alt="arrow"
          />
        </a>
      </div>
    </>
  );
};

export default SurveyBanner;

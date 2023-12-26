import Text from "./Typography/Text";
import arrowBanner from "../../assets/arrow_banner.svg";

const SurveyBanner = () => {
  return (
    <div className="lg:py-0.5rem sticky top-0 z-20 flex justify-center bg-primary-green py-[0.375rem] text-white lg:justify-between lg:gap-2 lg:px-[5.625rem] lg:py-[0.5rem]">
      <Text size="highlight" className="hidden lg:block">
        Building on REAL insights to solve your pain points!
      </Text>
      <Text size="highlight" className="hidden lg:block">
        Contribute to shaping the future of finance!
      </Text>
      <a
        href="https://forms.office.com/r/XfgPg39D3i"
        target="_blank"
        className="flex gap-1"
      >
        <Text size="highlight">Join our Financial Survey here</Text>
        <img src={arrowBanner} alt="arrow" />
      </a>
    </div>
  );
};

export default SurveyBanner;

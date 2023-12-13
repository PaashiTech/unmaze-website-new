import BackgroundLogo from "../_UI/BackgroundLogo";
import Heading from "../_UI/Typography/Heading";
import Text from "../_UI/Typography/Text";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col gap-12 overflow-x-clip bg-gradient-unmaze-hero px-[1.25rem] py-[6.45rem] text-center text-primary-green lg:px-[5.625rem] lg:py-[15rem]"
    >
      <BackgroundLogo />
      <div className="flex flex-col items-center gap-3 lg:gap-4 ">
        <Heading variant="sub-heading-1">Intelligent, Personalized</Heading>
        <Heading as="h1">Investment Journeys</Heading>
      </div>
      <Text size="lg" className="lg:whitespace-pre-line">
        {`Unmaze the world of personal finance with 
        the 'lightsaber' of a wealth management app`}
      </Text>
    </div>
  );
};

export default Hero;

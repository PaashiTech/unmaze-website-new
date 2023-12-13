import BackgroundLogo from "../UI/BackgroundLogo";
import Heading from "../UI/Typography/Heading";
import Text from "../UI/Typography/Text";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-gradient-unmaze-hero relative flex flex-col gap-12 overflow-x-clip px-[1.25rem] py-[6.45rem] text-center text-primary-green lg:px-[5.625] lg:py-[15rem]"
    >
      <BackgroundLogo />
      <div className="flex flex-col items-center gap-3 lg:gap-4 ">
        <Heading as="h2" variant="sub-heading-1">
          Intelligent, Personalized
        </Heading>
        <Heading>Investment Journeys</Heading>
      </div>
      {/* <p className="font-font-body text-lg font-normal leading-6 tracking-[0.045rem] lg:text-[1.75rem] lg:leading-10">
        Unmaze the world of personal finance with
        <br className="hidden lg:block" />
        the 'lightsaber' of a wealth management app
      </p> */}
      <Text size="lg">
        Unmaze the world of personal finance with
        <br className="hidden lg:block" />
        the 'lightsaber' of a wealth management app
      </Text>
    </div>
  );
};

export default Hero;

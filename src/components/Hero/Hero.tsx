import BackgroundLogo from "../BackgroundLogo";
import Heading from "../Typography/Heading";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-gradient-unmaze-hero relative flex flex-col gap-12 overflow-x-clip px-[1.25rem] py-[6.45rem] text-center text-primary-green lg:px-[5.625] lg:py-[15rem]"
    >
      <BackgroundLogo />
      <div className="flex flex-col items-center gap-3 lg:gap-4 ">
        <Heading
          as="h2"
          className="w-[15rem] text-center text-xl font-medium leading-6 tracking-[0.15rem] lg:w-full lg:text-[2rem] lg:tracking-[0.3rem]"
        >
          Intelligent, Personalized
        </Heading>
        <Heading
          as="h1"
          className="text-5xl font-semibold leading-[3rem] lg:text-7xl"
        >
          Investment Journeys
        </Heading>
      </div>
      <p className="font-font-body text-lg font-normal leading-6 tracking-[0.045rem] lg:text-[1.75rem] lg:leading-10">
        Unmaze the world of personal finance with
        <br className="hidden lg:block" />
        the 'lightsaber' of a wealth management app
      </p>
    </div>
  );
};

export default Hero;

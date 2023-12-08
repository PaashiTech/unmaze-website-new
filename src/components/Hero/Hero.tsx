// import BackgroundLogo from "../BackgroundLogo";
import Heading from "../Typography/Heading";
import Text from "../Typography/Text";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      id="home"
      className="hero-gradient flex flex-col gap-12 py-[6.4375rem] px-[1.25rem] text-center text-[#035E5D] relative scroll-m-[76px]"
    >
      {/* <BackgroundLogo /> */}
      <div className="flex flex-col gap-3">
        <Heading
          as="h2"
          className="text-xl leading-3 font-medium tracking-[0.15rem]"
        >
          Intelligent,
        </Heading>
        <Heading
          as="h2"
          className="text-xl leading-3 font-medium tracking-[0.15rem]"
        >
          Personalized
        </Heading>
        <Heading as="h1" className="text-5xl font-semibold leading-[3rem]">
          Investment Journeys
        </Heading>
      </div>
      <Text
        size="lg"
        className="text-lg leading-6 font-normal tracking-[0.045rem] font-avenir-next"
      >
        Unmaze the world of personal finance with the 'lightsaber' of a wealth
        management app
      </Text>
    </div>
  );
};

export default Hero;

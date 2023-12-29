import nextButtonDesktop from "../../assets/next-button/next-desktop.svg";
import nextButtonMobile from "../../assets/next-button/next-mobile.svg";

import teamPhoto from "../../assets/team-photo.png";
import Heading from "../_UI/Typography/Heading";
import StarIcon from "../_UI/StarIcon";
import Text from "../_UI/Typography/Text";

const Careers = () => {
  return (
    <div
      id="careers"
      className="flex h-fit justify-center bg-primary-green px-5 py-8 lg:p-0"
    >
      <div className="flex flex-grow items-center rounded-[1.25rem] bg-white px-9 py-12 text-primary-green lg:max-w-[50%] lg:rounded-none lg:bg-transparent lg:bg-gradient-unmaze-1 lg:px-[5.625rem] lg:py-16">
        <div className="flex flex-col gap-4  lg:gap-6">
          <div className="flex flex-col gap-[0.375rem] font-font-heading lg:gap-3">
            <Heading variant="sub-heading-2">Work with us</Heading>
            <a
              href="https://wellfound.com/company/unmaze-app/jobs"
              target="_blank"
              className="flex shrink-0 items-center"
            >
              <Heading
                variant="heading-2"
                className="text-2xl font-semibold leading-6 tracking-[0.06rem] lg:text-5xl"
              >
                <StarIcon /> Careers
              </Heading>
            </a>
          </div>
          <div className="flex gap-4 lg:gap-8">
            <Text size="lg">
              Be a part of the change in the way we think about personal
              finance!
            </Text>
            <a
              href="https://wellfound.com/company/unmaze-app/jobs"
              target="_blank"
              className="flex shrink-0 items-center"
            >
              <picture>
                <source
                  srcSet={nextButtonDesktop}
                  media="(min-width: 1024px)"
                />
                <img src={nextButtonMobile} alt="arrow-icon" />
              </picture>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:flex-grow lg:overflow-hidden">
        <img
          src={teamPhoto}
          alt="team-photo"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Careers;

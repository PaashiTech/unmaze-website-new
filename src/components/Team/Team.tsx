import Heading from "../_UI/Typography/Heading";
import TeamCarousel from "./TeamCarousel";
const Team = () => {
  return (
    <div
      id="team"
      data-testid="team"
      className="flex flex-col items-center gap-6 bg-primary-green py-[4.75rem] lg:gap-16 lg:py-[8rem]"
    >
      <div className="flex w-full flex-col items-center gap-[0.625rem] px-5 font-font-heading lg:items-start lg:px-[5.625rem]">
        <Heading
          variant="sub-heading-1"
          className="text-center text-white lg:text-left"
        >
          The finance & tech wizards
        </Heading>
        <Heading
          variant="heading-1"
          className="bg-gradient-unmaze-team bg-clip-text text-center text-transparent"
        >
          Behind Unmaze
        </Heading>
      </div>
      <TeamCarousel />
    </div>
  );
};

export default Team;

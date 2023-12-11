import "./Team.css";
import TeamCarousel from "./TeamCarousel";
const Team = () => {
  return (
    <div
      id="team"
      className="flex flex-col items-center gap-6 bg-[#035e5d] py-[4.75rem] lg:gap-16 lg:py-[8rem]"
    >
      <div className="flex w-full flex-col items-center gap-[0.625rem] px-5 font-clash-display lg:items-start lg:px-[5.625rem]">
        <p className="text-center text-lg font-medium leading-6 tracking-[0.15rem] text-white lg:text-[2rem] lg:leading-[2.5rem] lg:tracking-[0.32rem]">
          The finance & tech
          <br className="lg:hidden" />
          wizards
        </p>
        <h2 className="text-gradient text-center text-5xl font-semibold tracking-[0.12rem] lg:text-[4.5rem] lg:leading-[5rem] lg:tracking-[0.18rem]">
          Behind Unmaze
        </h2>
      </div>
      <TeamCarousel />
    </div>
  );
};

export default Team;

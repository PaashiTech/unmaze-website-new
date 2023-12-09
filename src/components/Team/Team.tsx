import "./Team.css";
import TeamCarousel from "./TeamCarousel";

const Team = () => {
  return (
    <div
      id="team"
      className="flex flex-col items-center gap-6 bg-[#035e5d] py-[4.75rem] lg:scroll-m-[95.2px]"
    >
      <div className="flex flex-col items-center gap-[0.625rem] px-5 font-clash-display">
        <div className="flex flex-col items-center">
          <p className="text-lg font-medium leading-6 tracking-[0.15rem] text-white">
            The finance & tech
          </p>
          <p className="text-lg font-medium leading-6 tracking-[0.15rem] text-white">
            wizards
          </p>
        </div>
        <h2 className="text-gradient text-center text-5xl font-semibold tracking-[0.12rem]">
          Behind Unmaze
        </h2>
      </div>
      <TeamCarousel />
    </div>
  );
};

export default Team;

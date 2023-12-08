import "./Team.css";
// import TeamCarousel from "./TeamCarousel";

const Team = () => {
  return (
    <div className="py-[4.75rem] flex flex-col gap-6 items-center bg-[#035e5d]">
      <div className="px-5 flex flex-col items-center gap-[0.625rem] font-clash-display">
        <div className="flex flex-col items-center">
          <p className="text-lg font-medium leading-6 tracking-[0.15rem] text-white">
            The finance & tech
          </p>
          <p className="text-lg font-medium leading-6 tracking-[0.15rem] text-white">
            wizards
          </p>
        </div>
        <h2 className="text-5xl font-semibold tracking-[0.12rem] text-center text-gradient">
          Behind Unmaze
        </h2>
      </div>
      {/* <TeamCarousel /> */}
    </div>
  );
};

export default Team;

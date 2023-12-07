import FeatureImages from "./FeatureImages";
import FeatureList from "./FeatureList";

const Features = () => {
  return (
    <div className="px-5 py-16 flex flex-col gap-10 items-center font-clash-display">
      <div className="flex flex-col items-center gap-[0.625rem] text-[#035e5d]">
        <h2 className="text-lg font-medium leading-6 tracking-[0.15rem]">
          Decode the maze of
        </h2>
        <h2 className="text-5xl font-semibold tracking-[0.12rem] text-center">
          Personal Finance
        </h2>
      </div>
      <FeatureImages />
      <FeatureList />
    </div>
  );
};

export default Features;

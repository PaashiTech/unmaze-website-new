import FeatureImages from "./FeatureImages";
import FeatureList from "./FeatureList";
import FeaturesHeading from "./FeaturesHeading";

const Features = () => {
  return (
    <div className="flex justify-center bg-white font-clash-display">
      <div className="flex flex-col items-center gap-10 px-5 py-16 lg:hidden">
        <FeaturesHeading />
        <FeatureImages />
        <FeatureList />
      </div>
      <div className="hidden lg:flex lg:w-full lg:justify-between lg:gap-10 lg:px-[5.625rem] lg:py-32">
        <div className="flex flex-col gap-16">
          <FeaturesHeading />
          <FeatureList />
        </div>
        <div className="self-end">
          <FeatureImages />
        </div>
      </div>
    </div>
  );
};

export default Features;

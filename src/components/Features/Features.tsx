import FeatureImages from "./FeatureImages";
import FeatureList from "./FeatureList";
import FeaturesHeading from "./FeaturesHeading";

const Features = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-5 py-16 font-font-heading lg:items-start lg:px-[5.625rem] lg:py-[8rem]">
      <FeaturesHeading />
      <div className="flex flex-col items-center gap-10 lg:flex-row">
        <FeatureImages />
        <FeatureList />
      </div>
    </div>
  );
};

export default Features;

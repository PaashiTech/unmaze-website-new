import React from "react";
import { featuresData } from "./featuresData";
import Text from "../_UI/Typography/Text";

type FeatureProps = {
  icon: string;
  text: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, text }) => {
  return (
    <div className="flex gap-5 px-4">
      <img src={icon} alt="feature-icon" />
      <Text size="xl" className="font-font-heading font-medium">
        {text}
      </Text>
    </div>
  );
};

const FeatureList = () => {
  return (
    <div className="flex flex-col gap-8 text-[#2a2a2a]">
      {featuresData.map((feature) => (
        <Feature key={feature.id} icon={feature.icon} text={feature.text} />
      ))}
    </div>
  );
};

export default FeatureList;

import React from "react";
import { featuresData } from "./featuresData";

type FeatureProps = {
  icon: string;
  text: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, text }) => {
  return (
    <div className="flex gap-5 px-4">
      <img src={icon} alt="feature-icon" />
      <p className="text-lg font-medium leading-7 tracking-wider lg:text-[2rem] lg:leading-10 lg:tracking-[0.08rem]">
        {text}
      </p>
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

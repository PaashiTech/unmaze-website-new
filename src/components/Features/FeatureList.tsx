import React from "react";
import { featuresData } from "./featuresData";
import Text from "../_UI/Typography/Text";

type FeatureProps = {
  iconMobile: string;
  iconDesktop: string;
  text: string;
};

const Feature: React.FC<FeatureProps> = ({ iconMobile, iconDesktop, text }) => {
  return (
    <div className="flex items-center gap-5 px-4">
      <picture className="shrink-0">
        <source srcSet={iconDesktop} media="(min-width: 1024px)" />
        <img src={iconMobile} alt="feature-icon" />
      </picture>

      <Text size="xl">{text}</Text>
    </div>
  );
};

const FeatureList = () => {
  return (
    <div className="flex flex-col gap-8 text-[#2a2a2a]">
      {featuresData.map((feature) => (
        <Feature
          key={feature.id}
          iconMobile={feature.iconMobile}
          iconDesktop={feature.iconDesktop}
          text={feature.text}
        />
      ))}
    </div>
  );
};

export default FeatureList;

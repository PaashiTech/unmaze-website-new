import React from "react";
import starYellowMobile from "../../assets/stars/star-yellow-mobile.svg";
import starYellowDesktop from "../../assets/stars/star-yellow-desktop.svg";
import { useResponsive } from "../../hooks/useResponsive";
import "./MembarCard.css";
import Heading from "../_UI/Typography/Heading";
import Text from "../_UI/Typography/Text";

type MemberCardProps = {
  image: string;
  name: string;
  bio: string;
  reverse?: boolean;
};

const MemberCard: React.FC<MemberCardProps> = ({
  image,
  name,
  bio,
  reverse,
}) => {
  const { screenType } = useResponsive();

  return (
    <div className="flex max-w-md items-center gap-4 px-5 md:w-[18.5rem] md:flex-col md:gap-6">
      <div
        className={`h-[9.5rem] w-[9.5rem] overflow-hidden rounded-[1.875rem] ${
          reverse ? "order-1" : "order-none"
        } shrink-0 md:order-none md:h-[13.125rem] md:w-[13.125rem]`}
      >
        <img
          src={image}
          alt={name}
          className="member-img h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 text-center">
        <Heading
          variant="heading-3"
          className="px-4 text-[#fff000] md:text-[2rem] md:leading-10"
        >
          <span className="mr-2 inline-block">
            <img
              src={
                screenType === "MOBILE" ? starYellowMobile : starYellowDesktop
              }
              alt="star"
            />
          </span>
          {name}
        </Heading>
        <Text size="xs" className="text-white">
          {bio}
        </Text>
      </div>
    </div>
  );
};

export default MemberCard;

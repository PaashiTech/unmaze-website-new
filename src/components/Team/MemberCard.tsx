import React from "react";
import starYellowMobile from "../../assets/stars/star-yellow-mobile.png";
import starYellowDesktop from "../../assets/stars/star-yellow-desktop.png";
import { useResponsive } from "../hooks/useResponsive";
import "./MembarCard.css";

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
    <div className="flex items-center gap-4 px-5 lg:w-[18.5rem] lg:flex-col lg:gap-6">
      <div
        className={`h-[9.5rem] w-[9.5rem] overflow-hidden rounded-[1.875rem] ${
          reverse ? "order-1" : "order-none"
        } shrink-0 lg:order-none lg:h-[13.125rem] lg:w-[13.125rem]`}
      >
        <img
          src={image}
          alt={name}
          className="member-img h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 text-center">
        <p className="font-clash-display text-xl font-bold leading-6 tracking-wider text-[#fff000] lg:text-[2rem] lg:leading-10">
          <span className="mr-2 inline-block">
            <img
              src={
                screenType === "MOBILE" ? starYellowMobile : starYellowDesktop
              }
              alt="star"
            />
          </span>
          {name}
        </p>
        <p className="font-avenir-next text-xs leading-4 tracking-[0.1rem] text-white lg:px-6 lg:text-base lg:leading-5 lg:tracking-[0.04rem]">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;

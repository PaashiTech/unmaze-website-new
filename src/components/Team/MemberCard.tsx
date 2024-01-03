import React from "react";
import starYellowMobile from "../../assets/stars/star-yellow-mobile.svg";
import starYellowDesktop from "../../assets/stars/star-yellow-desktop.svg";
import { useResponsive } from "../../hooks/useResponsive";
import "./MembarCard.css";
import Heading from "../_UI/Typography/Heading";
import Text from "../_UI/Typography/Text";
import { Member } from "./memberData";

interface MemberCardProps extends Omit<Member, "id"> {}

const MemberCard: React.FC<MemberCardProps> = ({
  image,
  name,
  bio,
  reverse,
  linkedInURL,
}) => {
  const { screenType } = useResponsive();

  return (
    <div className="flex max-w-md items-center justify-between gap-4 px-5 md:w-[18.5rem] md:flex-col md:gap-[1.5rem]">
      <div
        className={`h-[9.5rem] w-[9.5rem] overflow-hidden rounded-[1.875rem] ${
          reverse ? "order-1" : "order-none"
        } shrink-0 md:order-none md:h-[9.375rem] md:w-[9.375rem]`}
      >
        <a href={linkedInURL} target="_blank">
          <img
            src={image}
            alt={name}
            className="member-img h-full w-full object-cover"
          />
        </a>
      </div>
      <a href={linkedInURL} target="_blank">
        <div className="flex flex-col gap-3 text-center">
          <Heading
            variant="heading-3"
            className="max-w-[9.5rem] whitespace-pre-line text-[#fff000] md:px-5 md:text-[2rem] md:leading-10 lg:max-w-none"
          >
            <span className="mr-2 inline-block align-top lg:w-[2rem]">
              <img
                src={
                  screenType === "MOBILE" ? starYellowMobile : starYellowDesktop
                }
                alt="star"
                width="100%"
              />
            </span>
            {name}
          </Heading>
          <Text size="xs" className="whitespace-pre-line text-white md:px-2">
            {bio}
          </Text>
        </div>
      </a>
    </div>
  );
};

export default MemberCard;

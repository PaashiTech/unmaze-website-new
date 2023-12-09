import React from "react";
import starYellowMobile from "../../assets/stars/star-yellow-mobile.png";

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
  return (
    <div className="flex items-center gap-4 px-5">
      <div
        className={`${
          reverse ? "order-1" : "order-none"
        } lg: order-none shrink-0`}
      >
        <img src={image} alt={name} />
      </div>

      <div className="flex flex-col gap-3 text-center">
        <p className="font-clash-display text-xl font-bold leading-6 tracking-wider text-[#fff000]">
          <span className="mr-2 inline-block">
            <img src={starYellowMobile} alt="star" />
          </span>
          {name}
        </p>
        <p className="font-avenir-next text-xs leading-4 tracking-[0.1rem] text-white">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;

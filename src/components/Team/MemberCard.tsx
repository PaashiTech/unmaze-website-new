import React from "react";
import starSmall from "../../assets/star-small.svg";

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
    <div className="px-5 flex gap-4 items-center">
      <div className={`${reverse ? "order-1" : "order-none"} shrink-0`}>
        <img src={image} alt={name} />
      </div>

      <div className="flex flex-col gap-3 text-center">
        <p className="font-clash-display text-xl font-bold leading-6 tracking-wider text-[#fff000]">
          <span className="inline-block mr-2">
            <img src={starSmall} alt="star" />
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
